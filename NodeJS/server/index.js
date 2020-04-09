var express = require('express');
var app = express();
var mysql = require('mysql');
var body = require('body-parser')
var cors = require('cors')

//app.use(cors({ origin: ['http://localhost:8100/'], credentials: true }))
app.use(cors())
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
	});
var con = mysql.createPool({
connectionLimit : 10,
  host: "localhost",
  port: "3307",
  user: "root",
  password: "srinathsk0528", 
  database: "the_bank",
  insecureAuth : true
});

app.get('/addbranch', function (req, res) {
	insertifsc = req.query.ifsc;
	insertarea = req.query.area;
	insertcity = req.query.city;
	insertmid = req.query.MID;
	parram = [[insertifsc, insertarea, insertcity, insertmid]],
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);

		}
		con.query("INSERT INTO BRANCHES VALUES("+mysql.escape(insertifsc)+","+mysql.escape(insertarea)+","+mysql.escape(insertcity)+","+mysql.escape(insertmid)+");", function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end(err['sqlMessage']);
		  }
		  console.log(result);
		  res.end('1');
		});
	 });
	 
});

app.get('/addemployee', function (req, res) {
	name = req.query.name;
	dob = req.query.dob;
	city = req.query.city;
	sex = req.query.sex;
	add1 = req.query.add1;
	add2 = req.query.add2;
	postal = req.query.postal;
	salary = req.query.salary;
	desig = req.query.designation;
	passw = req.query.password;
	ifsc = req.query.ifsc;
	console.log(name);
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query("INSERT INTO EMPLOYEES VALUES(NULL,"+mysql.escape(name)+", "+mysql.escape(sex)+", "+mysql.escape(dob)+","+ mysql.escape(ifsc)+","+mysql.escape(desig)+","+mysql.escape(salary)+","+mysql.escape(passw)+","+mysql.escape(add1)+","+mysql.escape(add2)+","+mysql.escape(city)+","+mysql.escape(postal)+");", function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end(err['sqlMessage']);
		  }
		  console.log(result);
		  console.log(result.insertId);
		  res.end(result.insertId.toString());
		});
	 });
	 
	 
});

app.get('/loanpayment', function (req, res) {
	insertifsc = req.query.ifsc;
	insertlaccno = req.query.laccno;
	insertamt = req.query.amt;
	insertbifsc = req.query.bifsc;
	con.getConnection(function(err) {
		if (err) {
			console.log(err)
			res.end(err['sqlMessage']);
		}
		con.query("INSERT INTO LOANPAYMENTS VALUES(NULL, CURDATE(),"+mysql.escape(insertamt)+","+mysql.escape(insertlaccno)+","+mysql.escape(insertifsc)+", "+ mysql.escape(insertbifsc) +");", function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end(err['sqlMessage']);
		  }
		  console.log(result);
		  res.end(result.insertId.toString());
		});
	  });
});


app.get('/addcustomers', function (req, res) {
	name = req.query.name;
	dob = req.query.dob;
	city = req.query.city;
	sex = req.query.sex;
	add1 = req.query.add1;
	add2 = req.query.add2;
	postal = req.query.postal;
	
	console.log(name);
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query("INSERT INTO CUSTOMERS VALUES(NULL,"+mysql.escape(name)+", "+mysql.escape(sex)+", "+mysql.escape(dob)+","+mysql.escape(add1)+","+mysql.escape(add2)+","+mysql.escape(city)+","+mysql.escape(postal)+");", function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end(err['sqlMessage']);
		  }
		  console.log(result);
		  res.end(result.insertId.toString());
		});
	 }); 
});

app.get('/addaccount', function (req, res) {
	
	acctype = req.query.acctype;
	cusid = req.query.cusid;
	ifsc = req.query.ifsc;
	
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query("INSERT INTO ACCOUNTS VALUES(NULL,"+mysql.escape(ifsc)+","+mysql.escape(cusid)+","+mysql.escape(acctype)+",'A',0);", function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end(err['sqlMessage']);
		  }
		  console.log(result);
		  res.end(result.insertId.toString());
		});
	 }); 
});

app.get('/loansanction', function (req, res) {
	loantype = req.query.loantype;
	cusid = req.query.cusid;
	ifsc = req.query.ifsc;
	principle = req.query.principle;
	sec = req.query.sec;
	approval = req.query.approval;
	
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query("INSERT INTO LOANS VALUES(NULL,"+mysql.escape(ifsc)+", "+mysql.escape(cusid)+", "+mysql.escape(principle)+",0,"+mysql.escape(principle)+",'A',"+mysql.escape(sec)+","+mysql.escape(loantype)+","+mysql.escape(approval)+",CURDATE());", function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end(err['sqlMessage']);
		  }
		  console.log(result);
		  res.end(result.insertId.toString());
		});
	 }); 
});

app.get('/addtrans', function (req, res) {
	daccno = req.query.daccno;
	difsc = req.query.difsc;
	caccno = req.query.caccno;
	cifsc = req.query.cifsc;
	amt = req.query.amt;
	if(!daccno)
	str = "INSERT INTO TRANSACTIONS VALUES(NULL, CURDATE(), "+mysql.escape(amt)+",NULL,"+mysql.escape(difsc)+","+mysql.escape(caccno)+","+mysql.escape(cifsc)+");";
	if(!caccno)
	str = "INSERT INTO TRANSACTIONS VALUES(NULL, CURDATE(), "+mysql.escape(amt)+","+mysql.escape(daccno)+","+mysql.escape(difsc)+",NULL,"+mysql.escape(cifsc)+");"
	if(caccno && daccno)
	str = "INSERT INTO TRANSACTIONS VALUES(NULL, CURDATE(), "+mysql.escape(amt)+","+mysql.escape(daccno)+","+mysql.escape(difsc)+","+mysql.escape(caccno)+","+mysql.escape(cifsc)+");"
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query(str, function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end(err['sqlMessage']);
		  }
		  console.log(result);
		  res.end(result.insertId.toString());
		});
	 }); 
});

app.get('/fetchData', function (req, res) {
	faccno = req.query.faccno;
	
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query("SELECT * FROM CUSTOMERACCOUNT WHERE CUSTOMERID = " + mysql.escape(faccno), function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end(err['sqlMessage']);
		  }
		  console.log(result);
		  res.end(JSON.stringify(result));
		});
	 }); 
});

app.get('/fetchlData', function (req, res) {
	faccno = req.query.faccno;
	
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query("SELECT * FROM CUSTOMERLOAN WHERE CUSTOMERID = " + mysql.escape(faccno), function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end(err['sqlMessage']);
		  }
		  console.log(result);
		  res.end(JSON.stringify(result));
		});
	 }); 
});

app.get('/loaninterestupdate', function (req, res) {
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query("CALL LOANINTERESTUPDATEPROC();", function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end('1');
		  }
		  console.log(result);
		});
	 }); 
});

app.get('/depositinterestupdate', function (req, res) {
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query("CALL DEPOSITINTERESTUPDATEPROC();", function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end('1');
		  }
		  console.log(result);
		});
	 }); 
});

app.get('/login', function (req, res) {
	user = req.query.user;
	pass = req.query.pass;
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query("SELECT LOGPASSWORD FROM EMPLOYEES WHERE EMPLOYEEID="+mysql.escape(user)+";", function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end('1');
		  }
		  if(result.length) {
		  console.log(result);
		  if(pass==result[0].LOGPASSWORD)
			res.end('11');
		  else
			res.end('12');
		  }
		  else {
			res.end('22');
		  }
		});
	 }); 
});
app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
var express = require('express');
var app = express();
var mysql = require('mysql');
var body = require('body-parser');
var cors = require('cors');
var passwordHash = require('password-hash');
app.use(cors())
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

/*Storing the DATABASE CONNECTION VARIABLE*/
var con = mysql.createPool({
connectionLimit : 200,
  host: "localhost",
  port: "3307",
  user: "root",
  password: "srinathsk0528", 
  database: "TheBank",
  insecureAuth : true
});

/*THIS IS FOR EMPLOYEE LOGIN*/
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
			if(passwordHash.verify(pass, result[0].LOGPASSWORD)) {
				console.log('Employee ' + user + ' is logged in...');  
				res.end('11');
			}
		  	else {
				console.log('Failed login attempt of employee '+ user + '...');  
				res.end('12');
			  }
		  }
		  else {
			console.log('Invalid employee ID ' + user + '...');
			res.end('22');
		  }
		});
	 }); 
});


/*THIS API CALL ADDS BRANCH TO DATABASE*/
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
		  console.log('Branch ' + insertifsc + ' added successfully...');
		  res.end('1');
		});
	 });	 
});


/*THIS API CALL ADDS EMPLOYEES TO DATABASE*/
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
	var hashedPassword = passwordHash.generate(passw);
	con.getConnection(function(err) {
		if (err) {
			console.log(err);
			res.end(err['sqlMessage']);
		}
		con.query("INSERT INTO EMPLOYEES VALUES(NULL,"+mysql.escape(name)+", "+mysql.escape(sex)+", "+mysql.escape(dob)+","+ mysql.escape(ifsc)+","+mysql.escape(desig)+","+mysql.escape(salary)+","+mysql.escape(hashedPassword)+","+mysql.escape(add1)+","+mysql.escape(add2)+","+mysql.escape(city)+","+mysql.escape(postal)+");", function (err, result, fields) {
		  if (err) {
			  console.log(err);
			  res.end(err['sqlMessage']);
		  }
		  console.log('Employee successfully added and was allotted the EmployeeID ' + result.insertId + '...');
		  res.end(result.insertId.toString());
		});
	 }); 
});

/*THIS API CALL ADDS CUSTOMERS TO DATABASE*/
app.get('/addcustomers', function (req, res) {
	name = req.query.name;
	dob = req.query.dob;
	city = req.query.city;
	sex = req.query.sex;
	add1 = req.query.add1;
	add2 = req.query.add2;
	postal = req.query.postal;
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
		  console.log('Customer was successfully added and was given the CustomerID ' + result.insertId + '...');
		  res.end(result.insertId.toString());
		});
	 }); 
});

/*THIS API CALL ADDS ACCOUNTS TO DATABASE*/
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
		  console.log('Customer ' + cusid + ' now has an ' + acctype + ' account in ' + ifsc + ' with AccountNo ' + result.insertId+'...');
		  res.end(result.insertId.toString());
		});
	 }); 
});

/*THIS API CALL ADD NEWLY SANCTIONED LOANS TO DATABASE*/
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
		  console.log('Customer ' + cusid + ' got a '+ loantype + ' loan sanctioned from ' + ifsc + ' with LoanAccountNo ' + result.insertId + '...');
		  res.end(result.insertId.toString());
		});
	 }); 
});

/*THIS API CALL ADDS NEW TRANSACTIONS TO DATABASE*/
app.get('/addtrans', function (req, res) {
	daccno = req.query.daccno;
	difsc = req.query.difsc;
	caccno = req.query.caccno;
	cifsc = req.query.cifsc;
	amt = req.query.amt;

	if(caccno==null|| caccno==''|| cifsc=='') {
		str = "INSERT INTO TRANSACTIONS VALUES(NULL, CURDATE(), "+mysql.escape(amt)+","+mysql.escape(daccno)+","+mysql.escape(difsc)+",NULL,NULL);"
	}else if(daccno==null || daccno=='' || difsc=='') {
		str = "INSERT INTO TRANSACTIONS VALUES(NULL, CURDATE(), "+mysql.escape(amt) +",NULL,NULL,"+mysql.escape(caccno)+","+mysql.escape(cifsc)+");";
	}else if(!caccno && !daccno) {
		str = "INSERT INTO TRANSACTIONS VALUES(NULL, CURDATE(), "+mysql.escape(amt)+","+mysql.escape(daccno)+","+mysql.escape(difsc)+","+mysql.escape(caccno)+","+mysql.escape(cifsc)+");"
	}
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
		  console.log('Transaction ID : ' +result.insertId+' From : ' + daccno +' '+ difsc + ' To : ' + caccno + ' ' + cifsc + ' Amount : '+amt + '...');
		  res.end(result.insertId.toString());
		});
	 }); 
});

/*THIS API CALL ADDS TRANSACTIONS OF LOAN PAYMENTS TO DATABASE*/
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
		  console.log('LoanPayment ID : ' + result.insertId + ' LoanAccNo : '+insertlaccno + 'LoanIFSC : ' + insertifsc + 'Amount : ' + insertamt +'...');
		  res.end(result.insertId.toString());
		});
	  });
});

/*THIS API CALL FETCHES CUSTOMER ACCOUNT DATA FROM DATABASE*/
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
		  console.log('Fetched Account Data for Customer: '+ faccno + '...');
		  res.end(JSON.stringify(result));
		});
	 }); 
});

/*THIS API CALL FETCHES CUSTOMER LOAN DATA FROM DATABASE*/
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
		  console.log('Fetched Loan data for customer : '+ faccno +'...');
		  res.end(JSON.stringify(result));
		});
	 }); 
});

/*THIS API CALL UPDATE INTEREST ON LOANS*/
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
		  console.log('Updated calculated interests on Loans for this month...');
		});
	 }); 
});


/*THIS API CALL UPDATE INTEREST ON DEPOSITS*/
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
		  console.log('Updated calculated interests on Fixed and Recurring Deposits for this month...');
		});
	 }); 
});



/*THE SERVER LISTENS TO REQUESTS*/
app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
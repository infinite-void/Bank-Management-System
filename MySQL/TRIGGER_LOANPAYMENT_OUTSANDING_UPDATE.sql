DELIMITER $$
CREATE TRIGGER LOANPAY_BALANCE_UPDATE_AFTER
AFTER INSERT ON LOANPAYMENTS
FOR EACH ROW
BEGIN
		DECLARE EXISTING_OUTSTANDING BIGINT;
		SELECT LOANS.OUTSTANDING INTO EXISTING_OUTSTANDING
		FROM LOANS
		WHERE LOANS.LOANACCOUNTNO = NEW.LOANACCOUNTNO
		AND LOANS.BRANCHIFSC = NEW.LOANIFSC
		AND LOANS.LOANSTATUS = 'A';	
        
        IF (EXISTING_OUTSTANDING >= NEW.AMOUNT) THEN
			BEGIN
				UPDATE LOANS
				SET LOANS.OUTSTANDING = LOANS.OUTSTANDING - NEW.AMOUNT
				WHERE LOANS.LOANACCOUNTNO = NEW.LOANACCOUNTNO
				AND LOANS.BRANCHIFSC = NEW.LOANIFSC
                AND LOANS.LOANSTATUS = 'A';
			END;
		END IF;
END$$
DELIMITER ;


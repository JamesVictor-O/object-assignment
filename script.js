// 1 create a function that allow users to create a bank account

function WemaBank(firstName,lastName,Age,Nin,){
    this.firstName=firstName;
    this.lastName=lastName;
    this.Age=Age;
    this.Nin=Nin;
    this.accountBalance=0;

    // lonable amount
    const lonableAmount=10000;

    // internal function to generate account number
     const generateAccountNumber=function(){
          let accountNumber="";
           for(i=0;i<=10; i++){
                accountNumber += Math.floor(Math.random()* 10)
           }
           return accountNumber
     }
     this.accountNumber=generateAccountNumber()


    //  function for checking balance

    this.checkBalance=function(){
        console.log(this.accountBalance)
        return this.accountBalance;
    }

    // function for depositing money
    this.depositMoney=function(amount){
        this.accountBalance += amount;
    }

    // function for withdrawing money
     
    this.withdrawMoney=function(amount){
        if(amount <= this.accountBalance){
            this.accountBalance -= amount
        }else{
            console.log("insufficient funds,unable to perform this transaction")
        }
    }

    // function to transfer money

    this.transferMoney=function(receiver,amount){
        if(amount<=this.accountBalance){
            receiver.accountBalance += amount;
            this.accountBalance -= amount
        }
    }

}

const account1=new WemaBank("James","victor",23,2121104418);
const account2=new WemaBank("John","Ochula",24,2121104418);

account1.checkBalance()
account1.depositMoney(6000);
account1.checkBalance()
account1.transferMoney(account2,5000)
account1.checkBalance()


account2.checkBalance()
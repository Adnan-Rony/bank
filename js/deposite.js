    document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField= document.getElementById('Deposit-field');
    //    
    const NewDepositeAmountString=depositField.value;
    const NewDepositeAmount=parseFloat(NewDepositeAmountString);

    // console.log(depositeAmount);

    //    
    const depositTotalElement= document.getElementById('deposit-total');

    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);

        const currentDepositTotal=previousDepositTotal+ NewDepositeAmount;



  
  depositTotalElement.innerText =currentDepositTotal;

  //clear
  depositField.value='';

        //balance add
     const balanceTotalElement  = document.getElementById('Balance-total');
     const previousBalanceTotalString=balanceTotalElement.innerText;

     const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    //  calculate

    const cureenBalanceTotal=previousBalanceTotal + NewDepositeAmount;

    //set the balance total
    balanceTotalElement.innerText=cureenBalanceTotal;

            // // new
            // document.getElementById('btn-withdraw').addEventListener('click',function(){

            //     const WithdrawField=document.getElementById('withdraw-field');
            //     const NewWithdrawamountString=WithdrawField.value;
            //    const NewWithdrawamount=parseFloat(NewWithdrawamountString);
               

            //    const withdrawTotaleLement=document.getElementById('withdraw-total');
            //    const previousWithdrawTotalString=withdrawTotaleLement.innerText;

            //    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
            //    const CurrentWithdrawTotal=previousWithdrawTotal+NewWithdrawamount;

            //    withdrawTotaleLement.innerText=CurrentWithdrawTotal;
            // })


    })
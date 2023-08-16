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

           


    })


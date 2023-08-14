    document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField= document.getElementById('Deposit-field');
    //    
    const depositeAmount=depositField.value;
    // console.log(depositeAmount);

    //    
    const depositTotalElement= document.getElementById('deposit-total');
    const depositTotal=depositTotalElement.innerText;
  depositTotalElement.innerText =depositeAmount

    })
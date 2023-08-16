/* 1.add event handler with withdraw button

 2.get the withdraw amount from the withdraw input field

2.5:also make sure to convert the input into a number by using parseFloat

3.get previous withdraw total

4.calculate total withdraw amount

5.set total withdraw amount

6.clear the input

7.get the previous balance total

8.calculate new balance total

*/



// step-1:
document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    // step-2:
    const withdrawfield=document.getElementById('withdraw-field');
    const NewWithdrawAmountString=withdrawfield.value ;
    const NewWithdrawAmount=parseFloat(NewWithdrawAmountString);

    withdrawfield.value='';

    
    if(isNaN(NewWithdrawAmount))
    {
        alert('please provide a valid number');
        return;
    }

    

    //step-3:
    const withdrawTotaleLement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotaleLement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    // step-4:

    const CurrentWithdrawTotal=previousWithdrawTotal+ NewWithdrawAmount;

    //step-5;

    withdrawTotaleLement.innerText=CurrentWithdrawTotal


    // step-6
    withdrawfield.value='';

    // step-7:

    const balanceTotalElement=document.getElementById('Balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);


    //if else
    if(NewWithdrawAmount>previousBalanceTotal){
        alert('Baap ar Bank a aTO tk nai')
        return;
    }




    // step-8
    const newBalanceTotal=previousBalanceTotal-NewWithdrawAmount;
    balanceTotalElement.innerText=newBalanceTotal





})
    document.getElementById('btn-withdraw').addEventListener('click',function(){
       
        const newWithdrawAmount=getInputFieldValueById('withdraw-field');

        const previousWithdrawTotal=getTextElementById('withdraw-total');

        const newWithdrawTotal=previousWithdrawTotal + newWithdrawAmount ;

        setTextElementvalueById('withdraw-total',newWithdrawTotal);

        const previousBalanaceTotal = getTextElementById('Balance-total');

        const newBalanceTotal= previousBalanaceTotal - newWithdrawAmount;

        setTextElementvalueById('Balance-total',newBalanceTotal)






    })
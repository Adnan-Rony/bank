


        document.getElementById('btn-deposit').addEventListener('click',function(){



            const newDepositAmount= getInputFieldValueById('Deposit-field');



            const previousDepositAmount=getTextElementById('deposit-total');

            //calculate new deposit total

            const newDepositTotal=previousDepositAmount + newDepositAmount;



            setTextElementvalueById('deposit-total',newDepositTotal);


            const previousBalanaceTotal=getTextElementById('Balance-total');

            const newBalanceTotal=previousBalanaceTotal + newDepositAmount;

            setTextElementvalueById('Balance-total',newBalanceTotal)
    

        })
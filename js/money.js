// function-1 
function getElementFieldValueById(elementId) {
    const incomeElementField = document.getElementById(elementId);
    const incomeMoneyString = incomeElementField.value;
    const incomeMoney = parseFloat(incomeMoneyString);
    incomeElementField.value = ''
    return incomeMoney;
};

document.getElementById('calculate-btn').addEventListener('click', function () {
    // income field
    const incomeMoney = getElementFieldValueById('income');
    if (isNaN(incomeMoney)) {
        alert('money should be in number');

    };
    // expenses
    const foodCost = getElementFieldValueById('food');
    const rentCost = getElementFieldValueById('rent');
    const clothesCost = getElementFieldValueById('clothes')
    const totalExpenses = foodCost + rentCost + clothesCost;
    if (isNaN(totalExpenses)) {
        alert('expenses should be in number')
    };

    if (incomeMoney > totalExpenses) {

        const totalExpenseElement = document.getElementById('total-expense');
        totalExpenseElement.innerText = totalExpenses;

        const restMoney = incomeMoney - totalExpenses;
        const balanceElement = document.getElementById('balance');
        balanceElement.innerText = restMoney;
    }
    else{
        alert('cut your cot according to your cloth')
    }
});

document.getElementById('save-btn').addEventListener('click',function(){
   
    const saveElementField = document.getElementById('save');
    const savePercentageString = saveElementField.value ;
    const savePercentage = parseFloat(savePercentageString);
    saveElementField.value = ''

    if(isNaN(savePercentage)){
        alert('percentage should be a number')
    }
    
    const incomeMoney = getElementFieldValueById('income');
    const savingAmount = (incomeMoney * savePercentage) / 100 ;
    const savingElementField = document.getElementById('saving-amount');
    savingElementField.innerText = savingAmount;
     
    const balanceElementField = document.getElementById('balance');
    const balanceElementString = balanceElementField.innerText;
    const balance = parseFloat(balanceElementString);

    const remainingBalance = balance - savingAmount;
    const remainingBalanceField = document.getElementById('remaining-balance');
      remainingBalanceField.innerText = remainingBalance;
      if(remainingBalance < 0){
        alert('You could not save this type of percentage amount')
        savingElementField.innerText ='';
        remainingBalanceField.innerText = '';
      }
})
const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller')

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};


confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if( 
        enteredAmount.trim().length <= 0 || 
        enteredAmount <= 0 || 
        enteredReason.trim().length <= 0 
        ) {
            alertCtrl.create({
                message: 'Please Enter A Valid Reason And Amount!',
                header: 'Invalid Inputs',
                buttons: ['okay']
            }).then(alertElement => {
                alertElement.present();
            })
        return;
    }
    
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;

    totalExpensesOutput.textContent = totalExpenses;

    clear();

});

cancelBtn.addEventListener('click', clear);
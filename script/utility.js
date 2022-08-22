function calculatePlayerExpense(listLength) {
    let playerExpense = document.getElementById('player-expense');
    let expense = document.getElementById('input-player-expense');
    playerExpense.innerText = listLength * parseInt(expense.value);
    return listLength * parseInt(expense.value);


}

function calculateTotal(listLength) {
    let playerExpense = document.getElementById('player-expense');
    let expense = document.getElementById('input-player-expense');
    let manager = document.getElementById('manager-expense');
    let coach = document.getElementById('coach-expense');
    playerExpense.innerText = listLength * parseInt(expense.value);
    document.getElementById('total').innerText = parseInt(playerExpense.innerText) + parseInt(manager.value) + parseInt(coach.value);

}

function getListLength() {
    let playerList = document.getElementById('player-list');
    let listLength = playerList.childNodes.length - 1;
    return listLength;
}

function addToList(playerName, btn) {
    const list = document.createElement('li');
    list.innerText = playerName;
    let playerList = document.getElementById('player-list');
    let listLength = playerList.childNodes.length;

    if (listLength > 5) {
        alert('You can\'t add more than 5 player');
        btn.removeAttribute('disabled');

    } else {
        document.getElementById('list-msg').style.display = 'none';
        playerList.append(list);
        btn.setAttribute('disabled', '');
        btn.innerText = "Player Selected";


    }

}

function checkInputError(inputID) {
    if (isNaN(inputID.value) || inputID.value <= 0 || inputID.value.trim().length == 0) {
        inputID.value = "";
        alert("Value Cannot be a String or less then zero or empty");


        return true;

    }

}


buttons = document.getElementsByClassName('btn');
for (let btn of buttons) {

    btn.addEventListener('click', function (event) {
        let parents = event.target.parentNode;
        let titles = parents.getElementsByClassName('card-title');
        for (let name of titles) {
            addToList(name.innerText, btn);
        }



    })


}

document.getElementById('calculate-player-btn').addEventListener('click', function () {
    let expense = document.getElementById('input-player-expense');

    if (!checkInputError(expense)) {
        let listLength = getListLength();
        calculatePlayerExpense(listLength);

    }



})

document.getElementById('calculate-total-btn').addEventListener('click', function () {




    if (!checkInputError(expense) && !checkInputError(coach) && !checkInputError(manager)) {
        let listLength = getListLength();
        calculatePlayerExpense(listLength);

    }





    let listLength = getListLength();
    calculateTotal(listLength);


})
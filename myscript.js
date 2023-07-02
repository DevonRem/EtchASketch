const container = document.querySelector('.container');

function createGrid(num) {
    for (let rows = 0; rows < num; rows++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let columns = 0; columns < num; columns++) {
            const col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);
        }
    }
}

function buttonclick() {
    let userSelection = prompt("Please enter a new grid size less than 100");
    if (userSelection > 100 || userSelection < 0) {
        alert("ERROR!");
    }
    else {
        const rowsToDelete = document.querySelectorAll('.row');
        const colsToDelete = document.querySelectorAll('.col');
        console.log(colsToDelete);
        console.log(rowsToDelete); 
        for (let j=0; j < colsToDelete.length; j++) {
            colsToDelete[j].remove();
        }
        for (let i=0; i < rowsToDelete.length; i++) {
            rowsToDelete[i].remove();
        }

        //creates new grid
        createGrid(userSelection);
    }
}

createGrid(16);
container.addEventListener('mouseover', function(e) {
    e.target.style.background = 'grey';
});

container.addEventListener('mouseout', function(e) {
    if (e.target.style.background !== 'black') {
    e.target.style.background = 'white';
    }
});

container.addEventListener('click', function(e) {
    e.target.style.background = 'black';
});
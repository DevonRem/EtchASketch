const container = document.querySelector('.container');

//probably turn this into a function later: createGrid()

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

createGrid(16);
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
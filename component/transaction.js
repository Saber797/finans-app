export function transaction(item){
    // Создаем строку таблицы
    const row = document.createElement('tr');
    row.classList.add('down');

    // Создаем ячейки и добавляем в них данные
    const idCell = document.createElement('td');
    idCell.textContent = item.id;

    const walletCell = document.createElement('td');
    walletCell.textContent = item.wallet; // Имя кошелька

    const categoryCell = document.createElement('td');
    categoryCell.textContent = item.category;

    const sumCell = document.createElement('td');
    sumCell.textContent = item.sum // Форматируем сумму

    const dateCell = document.createElement('td');
    dateCell.textContent =  item.createAt

    // Добавляем ячейки в строку
    row.append(idCell, walletCell, categoryCell, sumCell, dateCell);

    return row; // Возвращаем строку
}

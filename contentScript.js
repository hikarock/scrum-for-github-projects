setInterval(function() {
  updateTotalLabel();
}, 2000);

function updateTotalLabel() {
  const totalClassName = 'total-label';
  const columnsSelector = '.project-column';
  const labelsSelector = '.labels button';
  const columnTitleSelector = '.js-project-column-name';

  let columns = document.querySelectorAll(columnsSelector);
  columns.forEach(column => {
    let labels = column.querySelectorAll(labelsSelector);
    let total = 0;
    labels.forEach(label => {
      let text = label.textContent.trim();
      if (text.match(/^\d+$/)) {
        let point = parseInt(text);
        total += point;
      }
    });
    let columnTitle = column.querySelector(columnTitleSelector);
    if (column.querySelector(`.${totalClassName}`)) {
      column.querySelector(`.${totalClassName}`).remove();
    }
    let totalLabel = document.createElement('span');
    totalLabel.textContent = total;
    totalLabel.classList = totalClassName;
    columnTitle.appendChild(totalLabel);
  });
}

const totalClassName = 'total-label';
const columnsSelector = '.project-column';
const labelsSelector = '.project-card:not(.d-none) .labels button';
const columnTitleSelector = '.js-project-column-name';

function updateTotalLabels() {
  let columns = document.querySelectorAll(columnsSelector);
  columns.forEach(column => {
    let labels = column.querySelectorAll(labelsSelector);
    let totals = calcTotals(labels);
    removeTotalLabels(column);
    appendTotalLabels(column, totals);
  });
}

function calcTotals(labels) {
  let totals = {};
  labels.forEach(label => {
    let text = label.textContent.trim();
    if (text.match(/^([1-9]\d*|0)(\.\d+)?$/)) {
      if (totals[''] === undefined) {
        totals[''] = 0;
      }
      totals[''] += parseFloat(text);
    } else if (text.match(/^.*::([1-9]\d*|0)(\.\d+)?$/)) {
      let matches = text.match(/^(.*)::([1-9]\d*|0)(\.\d+)?$/);
      let key = matches[1];
      let point = `${matches[2]}${matches[3]}`;
      if (totals[key] === undefined) {
        totals[key] = 0;
      }
      totals[key] += parseFloat(point);
    }
  });
  return totals;
}

function appendTotalLabels(column, totals) {
  let columnTitle = column.querySelector(columnTitleSelector);
  for (let key in totals) {
    let totalLabel = document.createElement('span');
    if (key === '') {
      totalLabel.textContent = totals[key];
    } else {
      totalLabel.textContent = `${key}::${totals[key]}`;
    }
    totalLabel.classList = totalClassName;
    columnTitle.appendChild(totalLabel);
  }
}

function removeTotalLabels(column) {
  let totalLabels = column.querySelectorAll(`.${totalClassName}`);
  totalLabels.forEach(totalLabel => {
    totalLabel.remove();
  });
}

setInterval(function() {
  updateTotalLabels();
}, 2000);

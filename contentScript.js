window.onload = function() {
  let columns = document.querySelectorAll('.project-column');
  columns.forEach(column => {
    let labels = column.querySelectorAll('.labels button');
    let total = 0;
    labels.forEach(label => {
      let text = label.textContent.trim();
      if (text.match(/^\d+$/)) {
        let point = parseInt(text);
        total += point;
      }
    });
    let columnTitle = column.querySelector('.js-project-column-name');
    let totalLabel = document.createElement('span');
    totalLabel.textContent = total;
    totalLabel.classList = 'total-label';
    columnTitle.appendChild(totalLabel);
  });
};

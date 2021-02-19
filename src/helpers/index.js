export function substract30DaysFromToday(separator = "-") {
  var dt = new Date();
  dt.setDate(dt.getDate() - 30);

  let date = dt.getDate();
  let month = dt.getMonth() + 1;
  let year = dt.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date < 10 ? `0${date}` : `${date}`}`;
}

export function substractDate(date) {
  var today = new Date();
  var dt = new Date(date);
  var res = new Date(today - dt);

  return res.getDate();
}

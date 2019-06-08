function daysInYear(year) {
  if (Number.isInteger(year)) {
    const isLeap = new Date(year, 1, 29).getMonth();
    return isLeap === 1 ? 366 : 365;
  }
  throw new Error('exeption')
}

daysInYear(2019); // 365
daysInYear("2019"); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({ year: 2100 }); // exception

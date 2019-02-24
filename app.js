window.onload = function () {
  const button = document.getElementById('genIt');
  button.addEventListener('click', () => genSchedule());

  function genSchedule() {
    allShiftForMonthArr = [];
    const peopleArr = document.getElementById('names').value.split(',');
    const shiftsArr = document.getElementById('shifts').value.split(',');
    const days = document.getElementById('days').value;
    const checkPersonDoublicated = [];
    generateSchedule(days, peopleArr, checkPersonDoublicated, shiftsArr);
  }

  function randomIndexForPeopleArr(indexOfPeopleArr, peopleArr) {
    const personIndex = Math.floor(Math.random() * peopleArr.length);
    if (!indexOfPeopleArr.includes(personIndex) && indexOfPeopleArr.length < peopleArr.length) {
      indexOfPeopleArr.push(personIndex);
      randomIndexForPeopleArr(indexOfPeopleArr, peopleArr);
    } else {
      if (indexOfPeopleArr.length < peopleArr.length) {
        return randomIndexForPeopleArr(indexOfPeopleArr, peopleArr);
      }
      return;
    }
  };

  function generateSchedule(days, peopleArr, checkPersonDoublicated, shiftsArr) {
    document.getElementById('table').innerHTML = '';
    randomIndexForPeopleArr(checkPersonDoublicated, peopleArr);
    genAllMonthShifts(days, shiftsArr);
    renderSchedule(days, peopleArr, checkPersonDoublicated, allShiftForMonthArr);
  };

  function genAllMonthShifts(days, shiftsArr) {
    for (let i = 0; i < shiftsArr.length; i++) {
      allShiftForMonthArr.push(...shiftsArr);
    }
  }

  function renderSchedule(days, peopleArr, checkPersonDoublicated, allShiftForMonthArr) {
    for (let i = 0; i < days; i++) {
      let y = 0,
        z = y + i;
      for (y, z; y < peopleArr.length; y++, z++) {
        document.getElementById('table').innerHTML +=
          `<div>Ден ${i+1} - ${peopleArr[checkPersonDoublicated[y]]} - ${allShiftForMonthArr[z]}</div>`;
      }
    }
  }
}
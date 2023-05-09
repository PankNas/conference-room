const moment = require("moment");

export const checkValidDateTime = (date, time1, time2) => {
  const myDate1 = moment(`${date} ${time1}`, 'DD.MM.YYYY HH:mm');
  const myDate2 = moment(`${date} ${time2}`, 'DD.MM.YYYY HH:mm');

  const curDate = new Date();

  return myDate1 > curDate && myDate2 > curDate && myDate2 > myDate1;
};

const checkTime = (time1, time2) => {
  const [timeEarly, timeLater] = time1[0] > time2[1] ? [time1, time2] : [time2, time1];

  const compareTime = (time) => timeEarly[0] <= time && time <= timeEarly[1];

  return compareTime(timeLater[0]) || compareTime(timeLater[1]);
};

export const checkBooking = (data, booking) => (
  booking.find(elem => {
    if (elem.tower !== data.tower || elem.floor !== data.floor ||
      elem.numRoom !== data.numRoom || elem.date !== data.date)
      return false;

    return checkTime([data.timeStart, data.timeEnd], [elem.timeStart, elem.timeEnd]);
  })
);

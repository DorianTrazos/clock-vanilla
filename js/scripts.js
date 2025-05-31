const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const dayOfWeekElement = document.getElementById('day-of-week');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const rootStyles = document.documentElement.style;

const days = ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const fixTime = time => (time < 10 ? '0' + time : time);

const setClocks = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const today = now.getDay();
  const date = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = fixTime(seconds);

  dayOfWeekElement.textContent = days[today];
  dayElement.textContent = fixTime(date);
  monthElement.textContent = months[currentMonth];
  yearElement.textContent = currentYear;

  // 360 / 60 = 6
  const secondsDegrees = seconds * 6;
  rootStyles.setProperty('--seconds-rotate', secondsDegrees + 'deg');

  const minutesDegrees = minutes * 6 + seconds / 10;
  rootStyles.setProperty('--minutes-rotate', minutesDegrees + 'deg');

  // 360 / 12 = 30
  const hoursDegrees = hours * 30 + minutes / 2;
  rootStyles.setProperty('--hours-rotate', hoursDegrees + 'deg');
};

setInterval(setClocks, 1000);

setClocks();

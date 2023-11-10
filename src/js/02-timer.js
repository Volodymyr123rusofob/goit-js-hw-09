import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  timerDays: document.querySelector('span[data-days]'),
  timerHours: document.querySelector('span[data-hours]'),
  timerMinutes: document.querySelector('span[data-minutes]'),
  timerSeconds: document.querySelector('span[data-seconds]'),
  btnStartTimer: document.querySelector('button[data-start]'),
};

const { timerDays, timerHours, timerMinutes, timerSeconds, btnStartTimer } =
  refs;
btnStartTimer.disabled = true;
btnStartTimer.addEventListener('click', () => {
  start();
  btnStartTimer.disabled = true;
});

let selectedDate = null;
let currentDate = null;
let timerId = null;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateClockface({ days, hours, minutes, seconds }) {
  timerDays.textContent = `${days}`;
  timerHours.textContent = `${hours}`;
  timerMinutes.textContent = `${minutes}`;
  timerSeconds.textContent = `${seconds}`;
}

flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    currentDate = Date.now();
    if (selectedDate <= currentDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStartTimer.disabled = true;
      return;
    }
    btnStartTimer.disabled = false;
  },
});

function start() {
  timerId = setInterval(() => {
    if (Date.now() >= selectedDate) return clearInterval(timerId);
    const currentTime = Date.now();
    const resultTimerEl = selectedDate - currentTime;
    const timeComponents = convertMs(resultTimerEl);
    updateClockface(timeComponents);
  }, 1000);
}

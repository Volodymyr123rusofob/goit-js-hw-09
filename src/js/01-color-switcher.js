const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;
refs.btnStart.addEventListener('click', () => {
  timerId = setInterval(onSwitch, 1000);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
});
refs.btnStop.addEventListener('click', offSwitch);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function onSwitch() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function offSwitch() {
  clearInterval(timerId);
  refs.btnStop.disabled = true;
  refs.btnStart.disabled = false;
}

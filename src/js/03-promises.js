// const refs {
//   form: document.querySelector('.form'),
//   delay: document.querySelector('input[name="delay"]'),
//   step: document.querySelector('input[name="step"]'),
//   amount: document.querySelector('input[name="amount"]'),
// }

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  setInterval(
    createPromise
    // передати номер промісу pоsition, викликати стільки разів скільки сказав користувач), затримка вказується користувачем;
  );
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

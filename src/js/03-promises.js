import Notiflix from 'notiflix';
const linkForm = document.querySelector('.form');
let timerId = null;
let currentValuePromis = 0;
let delay = 0;

linkForm.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const amount = Number(form.elements.amount.value);
  delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  timerId = setInterval(() => {
    if (amount === currentValuePromis) {
      clearInterval(timerId);
      return;
    }
    createPromise(currentValuePromis, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    currentValuePromis += 1;
    delay += step;
  }, delay);
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    if (shouldResolve) {
      setTimeout(() => res({ position, delay }), delay);
    } else {
      setTimeout(() => rej({ position, delay }), delay);
    }
  });
}

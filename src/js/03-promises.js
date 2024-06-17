'use strict';
import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const submitButton = form.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

submitButton.addEventListener('click', event => {
  event.preventDefault();
  const count = Number(form.elements.amount.value);
  const delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  for (let i = 0; i < count; i += 1) {
    const promise = createPromise(i + 1, delay + i * step);
    promise
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
  }
  form.reset();
  submitButton.disabled = true;
});

const inputs = [form.elements.delay, form.elements.step, form.elements.amount];
const checkInputs = () => {
  let allFilled = true;
  inputs.forEach(input => {
    if (input.value === '') {
      allFilled = false;
    }
  });
  submitButton.disabled = !allFilled;
};

form.addEventListener('input', checkInputs);

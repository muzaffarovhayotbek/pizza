import { PizzaModel } from './model/Pizza';

const form = document.querySelector('form') as HTMLFormElement;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formEl = new FormData(form);

  const newPizza: PizzaModel = {
    title: formEl.get('title') as string,
    description: formEl.get('description') as string,
    toppings: formEl.getAll('toppings') as string[],
    price: parseInt(formEl.get('price') as string),
  };
 await newPizza.save();
});

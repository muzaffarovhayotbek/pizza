import { Pizza, PizzaModel } from './model/Pizza';

const rootElement = document.querySelector('.root')!;

function pizzaElementCreator(pizza: PizzaModel): string {
  return `
  <div class = "pizza">
  <h2>${pizza.title}</h2>
  <p class = "toppings">${pizza.toppings.join(', ')}</p>
  <p>${pizza.description}</p>
  <span>${pizza.price}</span>
  </div>

  `;
}

function pizzatemplatesRender(pizzasTemplates: string[], peremt: Element) {
  const templateElement = document.createElement('template');

  for (let t of pizzasTemplates) {
    templateElement.innerHTML += t;
  }
  peremt.append(templateElement.content);
}

document.addEventListener('DOMContentLoaded', async () => {
  const pizzas = await Pizza.loadAll();
  const pizzatemplates = pizzas.map(pizzaElementCreator);

  pizzatemplatesRender(pizzatemplates, rootElement);
});

import { assert } from 'https://deno.land/std/testing/asserts.ts';

// Importer le code source
import { display, buttons } from './script009.js';

// Définir les tests
Deno.test('Test clear button', () => {
  display.innerText = '123';
  buttons.find(button => button.innerText === 'C').click();
  assert(display.innerText === '');
});

Deno.test('Test evaluate button', () => {
  display.innerText = '2 + 2';
  buttons.find(button => button.innerText === '=').click();
  assert(display.innerText === '4');
});

Deno.test('Test delete button', () => {
  display.innerText = '123';
  buttons.find(button => button.innerText === '←').click();
  assert(display.innerText === '12');
});

Deno.test('Test adding digit button', () => {
  display.innerText = '12';
  buttons.find(button => button.innerText === '3').click();
  assert(display.innerText === '123');
});


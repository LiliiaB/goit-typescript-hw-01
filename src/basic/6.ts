/* Створіть інтерфейс User для типізації об'єктів,
 які містять такі властивості. Зверніть увагу, 
 що адреса є необов'язковою властивістю.
 */

interface Person {
  name: string;
  age: number;
  email: string;
  address?: { city: string; country: string };
}

const mango: Person = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: Person = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

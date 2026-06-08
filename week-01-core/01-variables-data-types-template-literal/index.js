const pi = 3.14;
let score = 10;
score = 15;

const name = "Nutthapong";
const city = "Yasothon";

const isMember = true;
const isStudent = false;

let currentOrder = null; // ตอนนี้ยังไม่มีออเดอร์ (ตั้งใจให้เป็นค่าว่าง)

const firstName = "Somsak";
const age = 30;

// Template Literals
// เราสามารถแทรกตัวแปรลงไปตรงๆ ได้เลย โดยใช้โครงสร้าง ${variable} ภายในเครื่องหมาย Backtick
const greeting = `Hello, my name is ${firstName} and I am ${age} years old.`;

const emailTemplate = `
  Dear Customer,
  Thank you for your purchase.
  Best regards,
  Shop Team.
`;

console.log(emailTemplate);

const price = 100;
const vat = 0.07;
console.log(`Total price: ${price + price * vat} THB`); // 💻 ผลลัพธ์: Total price: 107 THB

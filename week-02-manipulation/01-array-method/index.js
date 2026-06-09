// 1. การวนลูป (Looping)
// โจทย์: ต้องการเอาชื่อทุกคนมาพิมพ์แสดงผล และสร้าง Array ใหม่ที่เติมคำว่า "Hi " เข้าไป

const names = ["John", "Jane", "Bob"];

// ❌ แบบเก่า: ใช้ for loop (ยาวและต้องคอยจัดการ index 'i')
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
let greetedOld = [];
for (let i = 0; i < names.length; i++) {
  greetedOld.push("Hi " + names[i]);
}

// ✅ แบบใหม่: ใช้ forEach() เพื่อทำบางอย่าง และ map() เพื่อสร้าง Array ใหม่
names.forEach((name) => console.log(name));

const greetedNew = names.map((name) => "Hi " + name);
// ผลลัพธ์: ['Hi John', 'Hi Jane', 'Hi Bob']

// ##############################################################################

// 2. การเพิ่มข้อมูล (Adding Data)
// โจทย์: มี Array ตะกร้าผลไม้อยู่ อยากเพิ่ม 'Mango' เข้าไป

let fruits = ["Apple", "Banana"];

// ❌ แบบเก่า: ใช้ push() (ตัวแปร fruits ต้นฉบับถูกเปลี่ยนไปเลย)
fruits.push("Mango");

// ✅ แบบใหม่: ใช้ Spread Operator (ปลอดภัย ต้นฉบับไม่ช้ำ)
let newFruits = ["Apple", "Banana"]; // สมมติว่ามีค่าตั้งต้น
let updatedFruits = [...newFruits, "Mango"];

// ##############################################################################

// 3. การเช็คว่ามีของไหม (Checking Existence)
// โจทย์: เช็คว่าผู้ใช้งานคนนี้มีสิทธิ์ 'admin' หรือไม่

const userRoles = ["editor", "subscriber", "admin"];

// ❌ แบบเก่า: ใช้ indexOf() (อ่านยาก ต้องมาแปลความหมายของ -1)
if (userRoles.indexOf("admin") !== -1) {
  console.log("You have admin access!");
}

// ✅ แบบใหม่: ใช้ includes() (อ่านง่ายเหมือนภาษาอังกฤษ)
if (userRoles.includes("admin")) {
  console.log("You have admin access!");
}

// ##############################################################################

// 4. การลบข้อมูลบางตัว (Removing Data)
// โจทย์: ต้องการลบ Task ที่มี ID = 2 ออกจากรายการ

let tasks = [
  { id: 1, title: "Read book" },
  { id: 2, title: "Buy milk" },
  { id: 3, title: "Code JS" },
];

// ❌ แบบเก่า: ใช้ splice() (ยุ่งยาก ต้องหา Index ก่อน แล้วค่อยสั่งตัด)
let indexToRemove = tasks.findIndex((t) => t.id === 2);
if (indexToRemove !== -1) {
  tasks.splice(indexToRemove, 1); // tasks ต้นฉบับแหว่งไปแล้ว
}

// ✅ แบบใหม่: ใช้ filter() (สร้างเงื่อนไขดึงเอาเฉพาะตัวที่ "ไม่เท่ากับ 2" เอาไว้)
let remainingTasks = tasks.filter((t) => t.id !== 2);
// remainingTasks จะเหลือแค่ id 1 กับ 3 โดยที่ tasks เดิมไม่พัง

// ##############################################################################

// 5. การค้นหา Object (Searching Data)
// โจทย์: ตามหาข้อมูลของพนักงานชื่อ 'Jane'

const employees = [
  { id: 101, name: "John", dept: "IT" },
  { id: 102, name: "Jane", dept: "HR" },
  { id: 103, name: "Bob", dept: "Sales" },
];

// ❌ แบบเก่า: ใช้ filter() (ได้ผลลัพธ์มาเป็น Array ซ้อน Object ต้องดึง [0] ออกมาอีกที)
const janeOld = employees.filter((emp) => emp.name === "Jane")[0];

// ✅ แบบใหม่: ใช้ find() (ได้ตัว Object นั้นออกมาตรงๆ เลย และทำงานเร็วกว่า)
const janeNew = employees.find((emp) => emp.name === "Jane");
// ผลลัพธ์: { id: 102, name: 'Jane', dept: 'HR' }

// ##############################################################################

// 6. การเรียงลำดับข้อมูล (Sorting)
// โจทย์: เรียงลำดับคะแนนสอบจากน้อยไปมาก

const scores = [85, 42, 100, 12];

// ❌ แบบเก่า: ใช้ sort() เฉยๆ (อันตรายมาก เพราะ Array scores สลับตำแหน่งไปตลอดกาล)
// scores.sort((a, b) => a - b);

// ✅ แบบใหม่ (วิธีที่ 1): ก๊อปปี้ก่อนแล้วค่อย sort (ใช้ได้กับทุกเวอร์ชัน)
const sortedScores1 = [...scores].sort((a, b) => a - b);

// ✅ แบบใหม่ (วิธีที่ 2): ใช้ toSorted() (ท่าใหม่ล่าสุดของ JS สะดวกสุดๆ)
const sortedScores2 = scores.toSorted((a, b) => a - b);

// ผลลัพธ์ทั้ง 2 แบบ: [12, 42, 85, 100]
// และตัวแปร scores ต้นฉบับยังคงเป็น [85, 42, 100, 12] ปลอดภัย 100%

// ##############################################################################

const products = [
  { name: "iPhone", category: "Gadget" },
  { name: "iPad", category: "Gadget" },
  { name: "Shirt", category: "Clothes" },
];

// ✅ แบบใหม่ล่าสุด: สั้น กระชับ อ่านง่าย
const grouped = Object.groupBy(products, (p) => p.category);

// Set = collection ที่เก็บค่า "ไม่ซ้ำ"
const arr = [1, 2, 2, 3];
const set = new Set(arr);

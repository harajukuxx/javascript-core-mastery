// โจทย์ข้อที่ 1: การเข้าถึงและแก้ไข Array
// - มี Array รายชื่อวิชาดังนี้: const subjects = ["Math", "Science", "History"];
// - จงเปลี่ยนวิชา "Science" ให้เป็นวิชา "English"
// - จากนั้นให้ใช้ console.log พิมพ์ตัวแปร subjects ออกมาดูผลลัพธ์
// เขียนโค้ดด้านล่างนี้:

const subjects = ["Math", "Science", "History"];
subjects[1] = "English";
console.log(subjects);

// โจทย์ข้อที่ 2: บริหารจัดการคิวลูกค้า (Push / Shift)
// - สร้าง Array ว่างขึ้นมาตัวหนึ่งชื่อว่า storeQueue
// - มีลูกค้าเข้ามาใช้บริการ 3 คนตามลำดับ ให้ใช้เมธอดที่ถูกต้องเพิ่มชื่อเข้าไปในคิวทีละคน: "A", "B" และ "C"
// - ต่อมา ลูกค้าคนแรกสุดทำธุระเสร็จแล้ว ให้ใช้เมธอดที่ถูกต้องตัดชื่อลูกค้าคนแรกนั้นออกจากคิว
// - แสดงผลลัพธ์สุดท้ายของ storeQueue ออกทางหน้าจอ
// เขียนโค้ดด้านล่างนี้:

const storeQueue = ["A", "B", "C"];
storeQueue.shift();
console.log(storeQueue);

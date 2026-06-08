const initialUsers = ["Nutthapong", "A", "B"];

// เริ่มที่ index 0; ทำตราบใดที่ยังน้อยกว่าความยาวของอาร์เรย์; ขยับทีละ 1 ตำแหน่ง
for (let i = 0; i < initialUsers.length; i++) {
  console.log(`ลำดับที่ ${i + 1}: ${initialUsers[i]}`);
}
/* 💻 ผลลัพธ์:
   ลำดับที่ 1: Nutthapong
   ลำดับที่ 2: A
   ลำดับที่ 3: B
*/

const accounts = ["Talks Money", "Saving", "Investment"];

for (const account of accounts) {
  console.log(`กำลังตรวจสอบบัญชี: ${account}`);
}

const prices = [100, 200, 300];

// โครงสร้าง: array.forEach((item, index) => { ... })
prices.forEach((price, index) => {
  console.log(`สินค้าชิ้นที่ ${index} ราคา ${price} บาท`);
});

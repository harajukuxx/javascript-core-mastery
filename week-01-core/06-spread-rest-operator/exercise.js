// ==========================================
// โจทย์ข้อที่ 1: ผสานเมนูอาหาร (Spread Array)
// ==========================================
const basicMenu = ["Rice", "Noodle"];
const premiumMenu = ["Steak", "Salmon"];

// 🎯 สิ่งที่ต้องทำ:
// จงสร้างอาร์เรย์ใหม่ชื่อว่า totalMenu โดยใช้ Spread Operator
// เพื่อรวม basicMenu และ premiumMenu เข้าด้วยกัน โดยให้มีคำว่า "Water" เพิ่มเข้าไปตรงกลางระหว่างสองอาร์เรย์นี้
// พิมพ์ผลลัพธ์ออกมาดูทางหน้าจอ
// เขียนโค้ดของคุณด้านล่างนี้:

const totalMenu = [...basicMenu, "Water", ...premiumMenu];
console.log("🚀 ~ totalMenu:", totalMenu);

// ==========================================
// โจทย์ข้อที่ 2: อัปเดตราคาแอป (Spread Object)
// ==========================================
const appConfig = {
  appName: "Talks Money app",
  version: "1.0.0",
  price: 0,
};

// 🎯 สิ่งที่ต้องทำ:
// จงสร้างอ็อบเจกต์ใหม่ชื่อว่า paidAppConfig โดยทำการก๊อปปี้ข้อมูลทั้งหมดจาก appConfig มา
// แต่ให้เปลี่ยน version เป็น "2.0.0" และเปลี่ยน price เป็น 99 บาท
// เขียนโค้ดของคุณด้านล่างนี้:

const paidAppConfig = { ...appConfig, version: "2.0.0", price: 99 };
console.log("🚀 ~ paidAppConfig:", paidAppConfig);

// ==========================================
// โจทย์ข้อที่ 3: ฟังก์ชันสั่งอาหารแบบไม่อั้น (Rest Parameter)
// ==========================================
// 🎯 สิ่งที่ต้องทำ:
// จงสร้างฟังก์ชันชื่อ orderFood รับพารามิเตอร์สองส่วน:
// 1. tableNumber (หมายเลขโต๊ะ เช่น 5)
// 2. ข้อมูลเมนูอาหารที่สั่งเข้ามา (ใช้ Rest Parameter รวบไว้)
// ข้างในฟังก์ชันให้พิมพ์ข้อความว่า "โต๊ะที่ [tableNumber] สั่งอาหารทั้งหมด [จำนวนเมนูที่สั่ง] อย่าง"
//
// ตัวอย่างการเรียกใช้: orderFood(5, "Rice", "Steak", "Soup");
// ผลลัพธ์ที่ต้องแสดง: โต๊ะที่ 5 สั่งอาหารทั้งหมด 3 อย่าง
// เขียนโค้ดของคุณด้านล่างนี้:

function orderFood(tableNumber, ...orders) {
  console.log(`โต๊ะที่ ${tableNumber} สั่งอาหารทั้งหมด ${orders.length} อย่าง`);
}

orderFood(5, "Rice", "Steak", "Soup");

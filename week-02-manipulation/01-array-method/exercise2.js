// ### **โจทย์ข้อที่ 1: คำนวณมูลค่ารวมและผลกำไรของพอร์ตหุ้น (Map + Reduce)**

const portfolio = [
  { symbol: "AAPL", shares: 10, buyPrice: 150, currentPrice: 180 },
  { symbol: "TSLA", shares: 5, buyPrice: 250, currentPrice: 240 },
  { symbol: "NVDA", shares: 20, buyPrice: 400, currentPrice: 450 },
  { symbol: "BTC", shares: 0, buyPrice: 30000, currentPrice: 60000 }, // หุ้นที่ขายหมดแล้ว
];

// ภารกิจ:** 1. คัดกรองเอาเฉพาะหุ้นที่มีการถือครองอยู่จริง (`shares > 0`)
// 2. คำนวณหา **"กำไร/ขาดทุนรวมทั้งหมด (Total Profit/Loss)"** ของพอร์ตนี้ (คิดจาก: `(currentPrice - buyPrice) * shares` ของหุ้นทุกตัวรวมกัน)
// ผลลัพธ์ที่ต้องการ:** `1250` (มาจาก AAPL กำไร 300 + TSLA ขาดทุน -50 + NVDA กำไร 1000)

const totalProfitLoss = portfolio
  .filter((p) => p.shares > 0)
  .reduce(
    (cur, arr) => cur + (arr.currentPrice - arr.buyPrice) * arr.shares,
    0,
  );

// ### **โจทย์ข้อที่ 2: ระบบตรวจความพร้อมและค้นหาสินค้าที่ขาดตลาด (Every + Find)**

const orderItems = [
  { id: 1, name: "Laptop", quantity: 1, inStock: true },
  { id: 2, name: "Mouse", quantity: 2, inStock: true },
  { id: 3, name: "Monitor", quantity: 1, inStock: false },
  { id: 4, name: "HDMI Cable", quantity: 1, inStock: false },
];

// ภารกิจ:** 1. ตรวจสอบว่าออเดอร์นี้ **"พร้อมจัดส่งทันทีหรือไม่"** (เงื่อนไข: สินค้า *ทุกชิ้น* ในออเดอร์ต้องมี `inStock: true`) ให้เก็บผลลัพธ์เป็น Boolean ในตัวแปร `canShip`
// 2. หากออเดอร์ไม่พร้อมจัดส่ง ให้ใช้ Method ค้นหาและเก็บ **"ชื่อสินค้า (String)" ของสินค้าตัวแรกที่ของหมด** ไว้ในตัวแปร `outOfStockItem` (ถ้าพร้อมจัดส่งให้เป็น `null` หรือ `undefined`)
// ผลลัพธ์ที่ต้องการ:** *
// `canShip` ต้องเป็น `false`
// `outOfStockItem` ต้องเป็น `'Monitor'`

const canShip = orderItems.every((item) => item.inStock);

if (!canShip) {
  const outOfStockItem = orderItems.find((item) => item.inStock !== true);
  console.log(outOfStockItem.name);
}

// ### **โจทย์ข้อที่ 3: แยกเกรดและนับจำนวนนักเรียน (Object.groupBy + Map/Reduce)**

const students = [
  { name: "Anna", score: 85 },
  { name: "Bob", score: 42 },
  { name: "Charlie", score: 75 },
  { name: "David", score: 90 },
  { name: "Emma", score: 48 },
];

// ภารกิจ:** 1. จัดกลุ่มนักเรียนออกเป็น 2 กลุ่ม โดยใช้เงื่อนไข:
// คะแนนตั้งแต่ 50 ขึ้นไป จัดอยู่ในกลุ่ม `'Passed'`
// คะแนนต่ำกว่า 50 จัดอยู่ในกลุ่ม `'Failed'`
// 2. แปลงผลลัพธ์ที่ได้จากการจัดกลุ่ม ให้เหลือแค่ **"จำนวนคน"** ในแต่ละกลุ่ม (ห้าม Hardcode ตัวเลข)
// { Passed: 3 , Failed: 2 }

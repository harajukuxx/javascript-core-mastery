// ข้อ 3: ปรับใช้ Nested Destructuring ชั้นเดียวจบ
const company = {
  companyName: "Tech Innovation",
  detail: { ceo: "Mr. David", revenue: 10000000 },
};
const {
  detail: { ceo, revenue },
} = company; // แกะลึกเข้าไปถึงข้างใน
console.log(`CEO คือ ${ceo} มีรายได้ ${revenue} บาท`);

// ข้อ 5: ปรับแก้ให้เงินในกระเป๋าลดลงจริงๆ ในหน่วยความจำ
const wallet = {
  owner: "Nutthapong",
  cash: 1000,
  spend(amount) {
    this.cash -= amount; // 💡 อัปเดตหักเงินในอ็อบเจกต์ตัวมันเองจริงๆ
    console.log(
      `${this.owner} จ่ายเงินไป ${amount} บาท เหลือเงิน ${this.cash} บาท`,
    );
  },
};
wallet.spend(200); // เหลือ 800
// wallet.spend(200); // ถ้าเรียกอีกทีจะเหลือ 600 แล้ว เพราะคีย์ cash โดนหักไปจริงๆ

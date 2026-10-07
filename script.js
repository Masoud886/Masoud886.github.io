// محصولات — اسم، قیمت، دسته، عکس را اینجا اضافه/ویرایش کن
const TELEGRAM = "YOUR_TELEGRAM"; // آیدی تلگرافت بدون @

const products = [
  { name: "بند کفش اسپرت فانتزی ۷ رنگ", price: "۴۹٬۰۰۰", cat: "accessory", img: "https://via.placeholder.com/400x300?text=Shoe+Laces" },
  { name: "بند کفش الاستیک قفل‌دار", price: "۲۳۱٬۰۰۰", cat: "accessory", img: "https://via.placeholder.com/400x300?text=Elastic+Laces" },
  { name: "شوچارم (وگ کفش)", price: "۳۵٬۰۰۰", cat: "accessory", img: "https://via.placeholder.com/400x300?text=Shoe+Charms" },
  { name: "کفی ژله‌ای ورزشی", price: "۸۹٬۰۰۰", cat: "accessory", img: "https://via.placeholder.com/400x300?text=Insole" },
];

const grid = document.getElementById("productGrid");

function render(cat = "all") {
  grid.innerHTML = "";
  products
    .filter(p => cat === "all" || p.cat === cat)
    .forEach(p => {
      const msg = encodeURIComponent(`سلام، می‌خواستم «${p.name}» با قیمت ${p.price} تومان را سفارش بدم.`);
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="card-body">
          <h3>${p.name}</h3>
          <div class="cat">${catName(p.cat)}</div>
          <div class="price">${p.price} تومان</div>
          <a class="order-btn" target="_blank" href="https://t.me/${TELEGRAM}?text=${msg}">سفارش در تلگرام</a>
        </div>`;
      grid.appendChild(card);
    });
}

function catName(c) {
  return { accessory: "اکسسوری کفش", shoes: "کفش", cloth: "لباس", perfume: "ادکلن" }[c] || "";
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.cat);
  });
});

render();
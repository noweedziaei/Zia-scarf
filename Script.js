// نمایش و پنهان کردن فرم فاکتور جدید
const newInvoiceBtn = document.getElementById("newInvoiceBtn");
const invoiceForm = document.getElementById("invoiceForm");
const invoiceFormElement = document.getElementById("invoiceFormElement");

newInvoiceBtn.addEventListener("click", () => {
  invoiceForm.classList.toggle("hidden");
});

// محاسبه خودکار جمع فاکتور
const quantityInput = document.getElementById("quantity");
const unitPriceInput = document.getElementById("unitPrice");
const totalPriceDisplay = document.getElementById("totalPrice");

function updateTotal() {
  const q = Number(quantityInput.value);
  const p = Number(unitPriceInput.value);
  totalPriceDisplay.textContent = (q * p).toLocaleString();
}

quantityInput.addEventListener("input", updateTotal);
unitPriceInput.addEventListener("input", updateTotal);

// ثبت فاکتور در حافظه موقت (فعلاً بدون سرور)
invoiceFormElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const invoice = {
    id: document.getElementById("invoiceId").value,
    date: document.getElementById("invoiceDate").value,
    customer: document.getElementById("customerName").value,
    product: document.getElementById("productName").value,
    quantity: Number(quantityInput.value),
    unitPrice: Number(unitPriceInput.value),
    total: Number(quantityInput.value) * Number(unitPriceInput.value),
  };

  console.log("✅ فاکتور ثبت شد:", invoice);
  alert("✅ فاکتور با موفقیت ثبت شد!");

  invoiceFormElement.reset();
  totalPriceDisplay.textContent = "0";
});

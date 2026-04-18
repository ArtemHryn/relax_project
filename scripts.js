document.querySelectorAll(".ll-acc-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const item = this.parentElement;
    item.classList.toggle("active");
  });
});

const popup = document.getElementById("giftPopup");
const closePopupBtn = document.getElementById("closePopup");

if (closePopupBtn && popup) {
  closePopupBtn.addEventListener("click", function () {
    popup.classList.add("ll-hidden");
  });

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.classList.add("ll-hidden");
    }
  });
}

emailjs.init({
  publicKey: "yDlbFD5jDcphog0lo",
});

const form = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  formMessage.className = "ll-form-message";
  formMessage.textContent = "";

  emailjs
    .sendForm("service_8tobhyr", "template_8tklikx", form)
    .then(function () {
      formMessage.className = "ll-form-message success";
      formMessage.textContent =
        "Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.";
      form.reset();
    })
    .catch(function (error) {
      formMessage.className = "ll-form-message error";
      formMessage.textContent =
        "Не удалось отправить заявку. Попробуйте ещё раз чуть позже.";
      console.error("EmailJS error:", error);
    });
});

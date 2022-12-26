const nextStepbtn = document.querySelector(".confirm-btn");
const goBackBtn = document.querySelector(".go-back");
const changeBtn = document.getElementById("change");
console.log(changeBtn);

const planError = document.querySelector(".plan-error-message");
const chekboxAdd = Array.from(document.querySelectorAll(".chekbox-add"));
const addOnList = document.getElementById("add-on-list");
const summaryPlan = document.querySelector(".summary--plan");
const slides = Array.from(document.querySelectorAll(".slide"));
const slideTitle = document.querySelector(".slide__title");
const totalPriceEl = document.querySelector(".total .totalPrice");
const totalPer = document.querySelector(".total-per");

const formContainerItem = Array.from(
  document.querySelectorAll(".form-container__item ul li")
);

function accTotal() {
  let totalPrice;
  let date;
  if (currentPlan.ex === "yr") {
    totalPrice = [
      currentPlan.price,
      ...selectedAdd.map((el) => el.price * 12),
    ].reduce((acc, value) => acc + value);
    date = "Year";
  } else {
    totalPrice = [
      currentPlan.price,
      ...selectedAdd.map((el) => el.price),
    ].reduce((acc, value) => acc + value);
    date = "Month";
  }

  totalPriceEl.innerHTML = `$${totalPrice}`;
  totalPer.innerHTML = `Total (Per ${date})`;
}

function planTotal() {
  summaryPlan.innerHTML = `
        <div class="summary--plan__title">
            <h3>${currentPlan?.name}</h3>
            <a href="#">change</a>
            </div>
            <div class="summary--plan__price">
            <span>$${currentPlan?.price}/${currentPlan?.ex}</span>
        </div> 
  `;
}

function addOnTotal() {
  selectedAdd.forEach((el) => {
    if (selectedAdd.length > 0) {
      const html = `
          <li>
            <h3>${el?.name}</h3>
            <h3>+$${el?.price}/mo</h3>
          </li>`;

      addOnList.insertAdjacentHTML("beforeend", html);
    }
  });
}

let currentSlide = 0;

function slideHandler() {
  slides.forEach((slide) => {
    slide.classList.remove("slide-active");
  });
  slides[currentSlide].classList.add("slide-active");
  //
  formContainerItem.forEach((item) => {
    item.classList.remove("slide-num-active");
  });
  //
  if (currentSlide === 0) {
    goBackBtn.style.opacity = 0;
  } else {
    goBackBtn.style.opacity = 1;
  }
  if (currentSlide <= 3) {
    formContainerItem[currentSlide].classList.add("slide-num-active");
    slideTitle.innerHTML = `
    <h1>${title[currentSlide].title}</h1>
    <p>${title[currentSlide].des}</p>`;
  } else if (currentSlide === 4) {
    slideTitle.classList.add("thank");
    nextStepbtn.parentElement.classList.add("thank");
  } else {
    slideTitle.classList.remove("thank");
    nextStepbtn.parentElement.classList.remove("thank");
  }
}
slideHandler();

function changePage() {
  if (currentSlide < slides.length - 1) {
    if (slides[currentSlide].classList.contains("slide--info")) {
      if (allInputValid()) {
        currentSlide++;
      }
    } else if (slides[currentSlide].classList.contains("slide--plan")) {
      if (currentPlan !== null) {
        planError.classList.remove("show-error");
        currentSlide++;
      } else {
        planError.classList.add("show-error");
      }
    } else if (slides[currentSlide].classList.contains("slide--add")) {
      planTotal();
      addOnList.innerHTML = "";
      updateAdds();
      addOnTotal();
      currentSlide++;
      nextStepbtn.innerHTML = "Confirm";
      accTotal();
    } else if (slides[currentSlide].classList.contains("slide--summary")) {
      currentSlide++;
    } else {
      nextStepbtn.innerHTML = "Next step";
    }
  }
  slideHandler();
}
function decreaseSlide() {
  if (currentSlide >= 1) {
    currentSlide--;
  }
  slideHandler();
}

nextStepbtn.addEventListener("click", changePage);
goBackBtn.addEventListener("click", decreaseSlide);

changeBtn.addEventListener("click", function () {
  currentSlide -= 2;
  slideHandler();
});

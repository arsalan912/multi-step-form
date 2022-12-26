const planContainer = document.querySelector(".plan__select");
const planSwitchContainer = document.querySelector(".plan__switch--container");
const monthly = [
  {
    name: "Arcade",
    price: 9,
    des: "2 days for free",
    ex: "mo",
  },
  {
    name: "Advance",
    price: 12,
    des: "2 days for free",
    ex: "mo",
  },
  {
    name: "Pro",
    price: 15,
    des: "2 days for free",
    ex: "mo",
  },
];
const yearly = [
  {
    name: "Arcade",
    price: 90,
    des: "2 month for free",
    ex: "yr",
  },
  {
    name: "Advance",
    price: 120,
    des: "2 month for free",
    ex: "yr",
  },
  {
    name: "Pro",
    price: 150,
    des: "2 month for free",
    ex: "yr",
  },
];

const addOption = [monthly, yearly];

let current = addOption[0];
let currentPlan = null;

function plan() {
  const perPrice = current === monthly ? "/mo" : "/yr";
  planContainer.innerHTML = `
            <div class="slide--plan__option">
                <div class="option__item option__icon">
                  <img src="/assets/images/icon-arcade.svg" alt="" />
                </div>
                <div class="option__item option__title">
                  <h3>${current[0].name}</h3>
                  <p>$${current[0].price}${perPrice}</p>
                  <p>${current[0].des}</p>
                </div>
            </div>
            <div class="slide--plan__option">
                <div class="option__item option__icon">
                  <img src="/assets/images/icon-advanced.svg" alt="" />
                </div>
                <div class="option__item option__title">
                  <h3>${current[1].name}</h3>
                  <p>$${current[1].price}${perPrice}</p>
                  <p>${current[1].des}</p>
                </div>
            </div>
            <div class="slide--plan__option">
                <div class="option__item option__icon">
                  <img src="/assets/images/icon-pro.svg" alt="" />
                </div>
                <div class="option__item option__title">
                  <h3>${current[2].name}</h3>
                  <p>$${current[2].price}${perPrice}</p>
                  <p>${current[2].des}</p>
                </div>
            </div>
    `;
}
plan();
selectPlan();

function selectPlan() {
  const options = Array.from(document.querySelectorAll(".slide--plan__option"));
  options.forEach((item) => {
    item.addEventListener("click", function () {
      options.forEach((el) => el.classList.remove("option--active"));
      item.classList.add("option--active");
      //   find current option selected
      const currentplanName = options.find((el) =>
        el.classList.contains("option--active")
      ).lastElementChild.firstElementChild.innerHTML;
      currentPlan = current.find((el) => el.name === currentplanName);
    });
  });
}

function switchPlan() {
  if (current === addOption[0]) {
    current = addOption[1];
    planSwitchContainer.classList.add("plan-yearly");
  } else {
    current = addOption[0];
    planSwitchContainer.classList.remove("plan-yearly");
  }
  currentPlan = null;
  plan();
  selectPlan();
}

planSwitchContainer.addEventListener("click", switchPlan);

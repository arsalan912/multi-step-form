const checkboxContainer = document.querySelector(".checkbox-container");

const addOns = [
  {
    name: "Online Experience",
    price: 1,
    des: "Access to multiplayer games",
  },
  {
    name: "Larger storage",
    price: 2,
    des: "Extra 1TB to cloud save ",
  },
  {
    name: "Customizeable profile",
    price: 2,
    des: "Custom theme on your profile",
  },
];
let selectedAdd = [];

addOns.forEach((el) => {
  const html = `              
    <div class="chekbox-add">
      <label class="container">
        <input type="checkbox" />
      </label>
      <div class="checkbox-title">
        <div>
          <h3>${el.name}</h3>
          <p>${el.des}</p>
        </div>
        <span>+$${el.price}/mo</span>
      </div>
    </div>`;

  checkboxContainer.insertAdjacentHTML("beforeend", html);
});

const allCheckBox = Array.from(
  document.querySelectorAll(".checkbox-container input[type='checkbox']")
);

for (let i = 0; i < allCheckBox.length; i++) {
  allCheckBox[i].addEventListener("click", function () {
    if (allCheckBox[i].checked) {
      allCheckBox[i].parentElement.parentElement.classList.add("checked");

      //
    } else {
      allCheckBox[i].parentElement.parentElement.classList.remove("checked");
    }
  });
}

function updateAdds() {
  selectedAdd = chekboxAdd
    .filter((el) => el.classList.contains("checked"))
    .map((el) => {
      return {
        name: el.children[1].children[0].children[0].innerHTML,
        price: +el.children[1].children[1].innerHTML[2],
      };
    });
}

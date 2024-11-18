
let inputItems = document.querySelector("#inputItem");
let priceInput = document.querySelector("#priceInput");

let itemContainer = [];
let addBudget = document.querySelector("#add-btn");
let updateBudget = document.querySelector("#update-btn");
let itemsDiv = document.querySelector("#itemsDiv");

let saveBtn = document.getElementById("save-btn");
let deleteBtn = document.querySelector("#delete-btn");
// let checkItem = document.querySelector("#check")
let exceededAmount = document.querySelector("#exceededAmount");
let remainingBudget = document.querySelector("#remainingBudget");


const saveItem = () => {
  if (inputItems.value === "") return alert("value is empty");

  let itemObj = {
    id: crypto.randomUUID(),
    item: inputItems.value,
    price: priceInput.value,
    isBought: false,
  };
  itemContainer.push(itemObj);

  inputItems.value = "";
  priceInput.value = "";

  updateDisplay(itemContainer)
};



const updateDisplay = (newArray) => {
   
  itemsDiv.textContent = "";

  itemContainer.forEach((itemList, itemId) => {
    itemsDiv.innerHTML += `<div id=${itemId}>
          <div>${itemList.item}</div>
          <br />
          <input type="checkbox" id="check" /> <br />
          <button class="delete-btn">Delete</button>
        </div>`;
  });
   
   let removeButton = document.querySelectorAll(".delete-btn");
   removeButton.forEach(button => {
      button.addEventListener("click", () => {
         deleteItem(button)
      })
   })
};

saveBtn.addEventListener("click", () => {
   saveItem()
});

// inputItems.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     saveItem();
//   }
// });
const deleteItem = (button) => {
   let parentId = button.parentElement.id;
   console.log(parentId)
    let newArray = itemContainer.splice(parentId, 1)
   // //   let newArray = itemContainer.filter((itemList) => itemList.Id !== itemId);
     updateDisplay(newArray);
   };
console.log("linked")


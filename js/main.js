const addBtn = document.getElementById("add");
const search = document.querySelector(".search");
const addList = document.querySelector(".addlistForm");
const clearAll = document.querySelector(".clean");

addBtn.addEventListener("click", () => {
  style();
});

document.querySelector("#addingList").addEventListener("click", () => {
  addinglist();
});

// Clear All
clearAll.addEventListener("click", () => {});

// refactor Create Element
function addinglist() {
  // Check Input Valid
  if (document.querySelector("#inputValue").value === "") {
    document.querySelector(".error").textContent = "NO Value";
  } else {
    const itemsList = document.querySelector(".items-list");
    const list = document.createElement("li");
    list.textContent = document.querySelector("#inputValue").value;
    itemsList.appendChild(list);
    // error none
    document.querySelector(".error").style.display = "none";
  }
}

// refactor css
function style() {
  search.style.display = "none";
  addList.style.display = "block";
}

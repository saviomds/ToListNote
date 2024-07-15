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

// refactor Create Element
function addinglist() {
  const input = document.querySelector("#inputValue");

  // Check Input Valid
  if (input.value === "") {
    const error = document.querySelector(".error");
    error.textContent = "No Value";
    setTimeout(() => {
      error.style.display = "none";
    }, 3000);
  }
}

// refactor css
function style() {
  search.style.display = "none";
  addList.style.display = "block";
}

// Clear All
clearAll.addEventListener("click", () => {
  // Remove all list items
  document.querySelector(".items-list").innerHTML = "";
});

(() => {
  fetch("/listData").then((response) => {
    response.json().then((data) => {
      const itemsList = document.querySelector(".items-list");
      itemsList.innerHTML = "";

      data.forEach((user) => {
        const list = document.createElement("li");
        list.textContent = user.inputVal;
        list.addEventListener("click", () => {
           
          
        });

        itemsList.appendChild(list);
      });
    });
  });
})();

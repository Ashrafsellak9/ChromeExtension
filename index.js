let myLeads = [];
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
      myLeads.push(inputEl.value);
      renderLeads() 
});

const renderLeads = () => {
    let listItems = "";
    for(let i = 0; i < myLeads.length; i++) {
    listItems += `<li>${myLeads[i]}</li>`;
}
    ulEl.innerHTML = listItems;
}
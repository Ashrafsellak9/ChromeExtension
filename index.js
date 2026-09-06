let myLeads = [];
let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
      myLeads.push(inputEl.value);
      console.log(myLeads);  
});

for(let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += `<li>${myLeads[i]}</li>`;
}
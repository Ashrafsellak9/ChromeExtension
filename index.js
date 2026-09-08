let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let ulEl = document.getElementById("ul-el");

let myLeads = []

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
})

const renderLeads = () => {
    let listItems = "";
    for(let i = 0; i < myLeads.length; i++) {
        listItems += `
          <li>
            <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
          </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

const addBtn = document.querySelector(".add");
const input = document.querySelector(".inp-group");

function addInput(){
  const header1 = document.createElement("input");
  header1.type="text";

  const header2 = document.createElement("input");
  header2.type="text";

  const header3 = document.createElement("input");
  header3.type="text";

  const header4 = document.createElement("input");
  header4.type="text";

  const header5 = document.createElement("input");
  header5.type="text";

  const header6 = document.createElement("input");
  header6.type="text";

  // const btn = document.createElement("a");
  // btn.className = "delete";
  // btn.innerHTML = "&times"

  const flex=document.createElement("div");
  flex.className = "flex";
  input.appendChild(flex);
  input.appendChild(header1);
  input.appendChild(header2);
  input.appendChild(header3);
  input.appendChild(header4);
  input.appendChild(header5);
  input.appendChild(header6);
  // input.appendChild(btn);


}





addBtn.addEventListener("click",addInput);
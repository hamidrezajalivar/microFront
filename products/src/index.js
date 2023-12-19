import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  console.log("faker", faker.Company);
  const name = faker.Company.companyName();
  products += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;

import faker from "faker";


const mount=(el)=>{
    el.innerHTML = "cart page";
}

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#cart-product");
    if (el) {
      mount(el);
    }
  }
export {mount}
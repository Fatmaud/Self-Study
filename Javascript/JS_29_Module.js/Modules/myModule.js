console.log("myModule'den selamlar!");

export const CALISMA_SAATI = 40;

export function topla(s1, s2) {
  return s1 + s2;
}

let counter = 5;

const increase = (miktar) => (counter += miktar);

const decrease = (miktar) => {
  counter -= miktar;
  console.log(counter);
};

const myName = "Ashley";

export { increase, decrease, myName };

//!Bir sayfada 1 tane export default olabilir
export default function ugurla() {
  console.log("görüsmek üzere JS!");
}

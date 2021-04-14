const user = {
  name: "Lee",
  active: true,
  cart: [],
  purchases: [],
};

let amazonHistory = [];
const compose = (f, g) => (...args) => f(g(...args)); // compose
const pipe = (f, g) => (...args) => g(f(...args)); // pipe

const purchaseItem = (...fns) => {
  return fns.reduce(pipe);
};

const addItemToCart = (user, item) => {
  const updateCart = user.cart.concat([item]);
  return { ...user, cart: updateCart };
};

const applyTaxToItems = (user) => {
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return { ...user, cart: updatedCart };
};

const buyItem = (user) => {
  return { ...user, purchases: user.cart };
};

const emptyCart = (user) => {
  return { ...user, cart: [] };
};

const result = purchaseItem(
  addItemToCart, // 1. 아이템을 카트에 추가
  applyTaxToItems, // 2. 아이템에 세금을 추가
  buyItem, // 3. 카트에 있는 것을 구입목록에 포함
  emptyCart // 4. 카트를 초기화
)(user, { name: "laptop", price: 200 });

// compose는 오른쪽부터 왼쪽, pipe는 왼쪽부터 오른쪽

console.log(result);

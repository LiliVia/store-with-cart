export default class DashboardService {
  constructor() {
    this.cart = this.getCart() || [];
  }

  newItem(item) {
    const obj = {};
    obj.name = item.name;
    obj.cost = item.cost;
    obj.count = 1;
    return obj;
  }

  getDevices($http) {
    return $http.get('devices.json').then(function (response) {
      return response.data;
    });
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  getCart() {
    return JSON.parse(localStorage.getItem("cart"));
  }

  getCountItem(item) {
    const arr = this.getCart();
    let count = 0;
    for (let i in arr) {
      if (arr[i].name === item.name) {
        count = arr[i].count;
      }
    }
    return count;
  }

  addItemToCart(item, count) {

    const arr = this.getCart() || [];
    for (let i in arr) {
      if (arr[i].name === item.name) {
        arr[i].count += count;
        this.cart = arr;
        this.saveCart();
        return;
      }
    }

    const newItem = this.newItem(item);
    console.log('newitem', newItem);

    arr.push(newItem);
    this.cart = arr;
    this.saveCart();
  }

  removeOneOfItem(item) {
    for (let i in this.cart) {
      if (this.cart[i].name === item.name) {
        this.cart[i].count--;
        if (this.cart[i].count === 0) {
          this.cart.splice(i, 1);
        }
        break;
      }
    }
    this.saveCart();
  }

  removeItem(item) {
    for (let i in this.cart) {
      if (this.cart[i].name === item.name) {
        this.cart.splice(i, 1);
        break;
      }
    }
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  countCartItems() {
    let total = 0;
    for (let i in this.cart) {
      total += this.cart[i].count;
    }
    return total;
  }

  countTotal() {
    let total = 0;
    for (let i in this.cart) {
      total += this.cart[i].cost * this.cart[i].count;
    }
    return total;
  }
}

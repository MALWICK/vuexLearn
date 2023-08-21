
import{createStore} from "vuex";



const store = createStore({
  strict: true,
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  }
  ,mutations: {
    // ...
  },
  actions: {
    addToCart(context, product) {
      // Perform some logic, such as updating the cart state
      // For simplicity, we'll just log the selected product
      console.log("Added to cart:", product);
    }
  },
  getters: {
    getProducts: state => state.products
  }
});

export default store;
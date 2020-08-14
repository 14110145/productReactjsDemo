import React, { Component } from "react";

const CartContext = React.createContext();

class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  addToCart = (product) => {
    console.log("Adding to cart ", product);
    this.setState({
      cartItems: this.state.cartItems.concat(product),
    });
  };

  render() {
    return (
      <CartContext.Provider value={{ cartItems: this.state.cartItems, addToCart: this.addToCart }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export { CartContext, CartProvider };

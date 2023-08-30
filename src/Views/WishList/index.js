import React, { Component } from "react";

class WishListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishListItems: this.props.wishListItems,
            cartItems: []
        };
    }

    componentDidUpdate() {
    }

    clearCart = () => {
    };

    removeItem = (index) => {
        const { wishListItems } = this.state;
        const updatedWishListItems = [...wishListItems];
        updatedWishListItems.splice(index, 1);
        this.setState({ wishListItems: updatedWishListItems });
        this.props.setWishListItems(updatedWishListItems);
    }

    addToCart = (productItem, index) => {
        this.props.setCartItems([...this.props.cartItems, productItem]);
        this.removeItem(index);
    };

    render() {
        const { wishListItems } = this.state;

        return (
            <>
                <div class="container mt-5">
                    <h5>My Wish List</h5>
                    <div class="row">
                        {
                            wishListItems && wishListItems.length > 0 &&
                            wishListItems.map((item, idx) => (
                                <div class="col-md-3 mb-4" key={idx}>
                                    <div class="product-card">
                                        <a class="product-thumb" href="#">
                                            <img src={item.ImgUrl} alt="Product" class="product-image" />
                                        </a>
                                        <h5 class="product-title">{item.Name}</h5>
                                        <p class="product-price">{item.price}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <button class="btn btn-danger"
                                                onClick={() => this.removeItem(idx)}>Remove</button>
                                            <button class="btn btn-success"
                                                onClick={() => this.addToCart(item, idx)}>Move to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </>
        );
    }
}

export default WishListView;

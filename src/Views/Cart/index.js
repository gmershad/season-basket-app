import React, { Component } from "react";


class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(this.props.cartItems);
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <div class="table-responsive shopping-cart">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th class="text-center">Quantity</th>
                                        <th class="text-center"><a class="btn btn-sm btn-outline-danger" href="#">Clear Cart</a></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.cartItems.map((item) => (
                                            <tr key={item.ProductId}>
                                                <td>
                                                    <div class="product-item">
                                                        <a class="product-thumb" href="#">
                                                            <img src="data:image/jpeg;base64,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"
                                                                alt="Product" />
                                                        </a>
                                                        <div class="product-info">
                                                            <h4 class="product-title"><a href="#">
                                                                {item.Name}
                                                            </a></h4><span><em>Benefits:
                                                            </em>Fibre, Protien</span>
                                                            <span><em>Season: January</em></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-center">
                                                    <div class="count-input">
                                                        <select class="form-control">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td class="text-center"><a class="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i class="fa fa-trash"></i></a></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div class="shopping-cart-footer">
                            <div class="column"><a class="btn btn-outline-secondary"
                                href="#"><i class="icon-arrow-left"></i>&nbsp;Back to Shopping</a></div>
                            <div class="column"><a class="btn btn-primary" href="#" data-toast=""
                                data-toast-type="success" data-toast-position="topRight"
                                data-toast-icon="icon-circle-check" data-toast-title="Your cart"
                                data-toast-message="is updated successfully!">Update Cart</a>
                                <a class="btn btn-success" href="#">Save PDF</a></div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default CartView;

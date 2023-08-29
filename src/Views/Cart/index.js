import React, { Component } from "react";


class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
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
                                    <tr>
                                        <td>
                                            <div class="product-item">
                                                <a class="product-thumb" href="#">
                                                    <img src="data:image/jpeg;base64,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"
                                                        alt="Product" />
                                                </a>
                                                <div class="product-info">
                                                    <h4 class="product-title"><a href="#">Apples</a></h4><span><em>Benefits:</em>Fibre, Protien</span><span><em>Season: January</em></span>
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
                                    <tr>
                                        <td>
                                            <div class="product-item">
                                                <a class="product-thumb" href="#">
                                                    <img src="data:image/jpeg;base64,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" alt="Product" />
                                                </a>
                                                <div class="product-info">
                                                    <h4 class="product-title"><a href="#">Banana</a></h4><span>
                                                        <em>Benefits:
                                                        </em> Fibre, Calcium</span><span>
                                                        <em>Season:</em> January</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <div class="count-input">
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option selected="">2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td class="text-center"><a class="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i class="fa fa-trash"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="product-item">
                                                <a class="product-thumb" href="#">
                                                    <img src="https://cdn.britannica.com/27/78227-050-28A68F87/cauliflower-Head-colour-White-brown-cultivars.jpg"
                                                        alt="Product" />
                                                </a>
                                                <div class="product-info">
                                                    <h4 class="product-title"><a href="#">Cauliflower</a></h4><span>
                                                        <em>Benefits:</em> Fibre, Magnesium</span>
                                                    <span><em>Season:</em> January</span>
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
                                        <td class="text-center"><a class="remove-from-cart" href="#"
                                            data-toggle="tooltip" title="" data-original-title="Remove item"><i class="fa fa-trash"></i></a></td>
                                    </tr>
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

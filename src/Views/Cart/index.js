import React, { Component } from "react";
import PDFView from "../../Components/PDF"
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        };
    }

    cartItems = [];

    componentDidUpdate() {
        this.setState({ cartItems: this.props.cartItems })
    }

    clearCart = () => {
        this.cartItems = [];
    };


    render() {
        this.cartItems = this.props.cartItems;
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
                                        <th class="text-center" onClick={this.clearCart}>
                                            <a class="btn btn-sm btn-outline-danger"
                                                href="#">Clear Cart</a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.cartItems.map((item) => (
                                            <tr key={item.ProductId}>
                                                <td>
                                                    <div class="product-item">
                                                        <a class="product-thumb" href="#">
                                                            <img src={item.ImgUrl}
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
                                <a class="btn btn-success" href="#">
                                    <PDFDownloadLink style={{ textDecoration: 'none', color: '#ffff' }}
                                        document={<PDFView data=
                                            {this.cartItems} />}
                                        fileName="Cart_Items.pdf">
                                        {({ blob, url, loading, error }) =>
                                            loading ? 'Loading document...' : 'Download PDF'
                                        }
                                    </PDFDownloadLink>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default CartView;

import React, { Component } from "react";
import PDFView from "../../Components/PDF"
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';

class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: this.props.cartItems
        };
    }

    componentDidUpdate() {
    }

    clearCart = () => {
        this.setState({ cartItems: [] });
        this.props.setCartItems([]);
    };

    removeItem = (index) => {
        const { cartItems } = this.state;
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        this.setState({ cartItems: updatedCartItems });
        this.props.setCartItems(updatedCartItems);
    }

    render() {
        const { cartItems } = this.state;
        console.log(cartItems);

        return (
            <>
                <div className="card">
                    <div className="card-body">
                        {
                            !cartItems || cartItems.length === 0 ? (
                                <h5 className="text-center">Cart is empty!</h5>
                            ) : (
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
                                                cartItems && cartItems.length > 0 && cartItems.map((item, idx) => (
                                                    <tr key={item.ProductId}>
                                                        <td>
                                                            <div class="product-item">
                                                                <a class="product-thumb" href="#">
                                                                    <img src={JSON.parse(item.ProductImage.ImgUrls)[0]}
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
                                                        <td class="text-center" onClick={() => this.removeItem(idx)}>
                                                            <a class="remove-from-cart" href="#"
                                                                data-toggle="tooltip" title=""
                                                                data-original-title="Remove item"
                                                            ><i class="fa fa-trash"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }
                        <div class="shopping-cart-footer">
                            <div class="column">
                                <Link to={`/`}>
                                    <a class="btn btn-outline-secondary" href="#">
                                        <i class="icon-arrow-left"></i>
                                        &nbsp;Back to Shopping</a>
                                </Link>
                            </div>
                            {
                                cartItems && cartItems.length > 0 && (
                                    <div class="column"><a class="btn btn-primary" href="#" data-toast=""
                                        data-toast-type="success" data-toast-position="topRight"
                                        data-toast-icon="icon-circle-check" data-toast-title="Your cart"
                                        data-toast-message="is updated successfully!">Update Cart</a>
                                        <a class="btn btn-success" href="#">
                                            <PDFDownloadLink style={{ textDecoration: 'none', color: '#ffff' }}
                                                document={<PDFView data=
                                                    {cartItems} />}
                                                fileName="Cart_Items.pdf">
                                                {({ blob, url, loading, error }) =>
                                                    loading ? 'Loading document...' : 'Download PDF'
                                                }
                                            </PDFDownloadLink>
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div >
            </>
        );
    }
}

export default CartView;

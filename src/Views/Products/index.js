import React, { Component } from "react";
import { Link } from 'react-router-dom';
import data from "../../assets/data/products";
import ProductMenu from "./productMenu";

class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: data.productData,
            diseaseFilter: [],
            searchedItem: [],
            selectedSeason: -1,
            cartItems: []
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSeason !== prevProps.selectedSeason) {
            this.handleSelectedSeasonChange();
        }
        if (this.props.selectedFilters !== prevProps.selectedFilters) {
            this.handleFiltersChange();
        }
        if (this.props.searchedItems !== prevProps.searchedItems) {
            this.handleSearchedItems();
        }
    }

    handleSelectedSeasonChange() {
        const selectedSeason = parseInt(this.props.selectedSeason);
        const filteredData = data.productData.filter(dataItem => {
            const seasons = dataItem.Seasons[0];
            return Object.values(seasons).includes(selectedSeason);
        });
        this.setState({
            products: filteredData.length === 0
                ? data.productData : filteredData,
            selectedSeason: selectedSeason
        });
    }

    handleFiltersChange() {
        const filters = this.props.selectedFilters;
        this.setState({ diseaseFilter: filters });
    }

    handleSearchedItems() {
        const searchedItem = this.props.searchedItems;
        const filteredData = data.productData.filter(dataItem => {
            return Object.values(dataItem).includes(searchedItem);
        });
        this.setState(prevState => ({
            products: [...prevState.products, ...filteredData]
        }));
    }

    addToCart = (productItem) => {
        // this.setState((prevState) => ({
        //     cartItems: [...prevState.cartItems, productItem]
        // }), () => {
        //     this.props.setCartItems([...this.props.cartItems, productItem]);
        // });

        this.props.setCartItems([...this.props.cartItems, productItem]);
    };

    render() {
        const { diseaseFilter } = this.state;
        return (
            <>
                <section class="py-1">
                    <ProductMenu />
                    <div class="row">
                        <div class="col-md-12">
                            <div class="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                {this.state.products.map((productItem, index) => (
                                    <div className="col">
                                        <div class="product-item">
                                            <a href="#" class="btn-wishlist">
                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                            </a>
                                            <Link to={`/product/${productItem.ProductId}`}
                                                style={{ textDecoration: 'none' }}>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={process.env.PUBLIC_URL + '/' + productItem.ImgUrl}
                                                            class="tab-image" />
                                                    </a>
                                                </figure>
                                                <h3>{productItem.Name}</h3>
                                                {
                                                    !productItem.Seasons.some(season => Object.values(season).includes(this.state.selectedSeason)) &&
                                                    this.state.selectedSeason >= 0 && (
                                                        <div className="row">
                                                            <div className="col">
                                                                <span className="badge bg-danger me-1">
                                                                    Off Season
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                <div className="row">
                                                    <div className="col">
                                                        {productItem.Health.Good.map((healthItem, idx) => (
                                                            <span key={idx} className="badge bg-success me-1"> {healthItem}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        {productItem.Health.Bad.diseaseId.map((diseaseId, idx) => {
                                                            const disease = diseaseFilter.find(item => item.diseaseId === diseaseId);
                                                            return (
                                                                <span key={idx} className="badge bg-danger me-1">
                                                                    {disease ? disease.name : ''}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </Link>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="input-group product-qty">
                                                    <span class="input-group-btn"></span>
                                                    <span class="input-group-btn"></span>
                                                </div>
                                                <a href="#" class="nav-link"
                                                    onClick={() => this.addToCart(productItem)}>
                                                    <i class="fa fa-shopping-cart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ProductView;

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ProductMenu from "./productMenu";
import Pagination from "../../Components/Pagination";

class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
            diseaseFilter: [],
            searchedItem: [],
            selectedSeason: -1,
            cartItems: []
        };
    }

    componentDidMount() {
        this.props.getCatalog(1, 50, -1)
            .then(() => {
                this.setState({ products: this.props.catalog });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
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
        this.props.getCatalog(1, 50, selectedSeason)
            .then(() => {
                this.setState({ products: this.props.catalog, selectedSeason: selectedSeason });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    handleFiltersChange() {
        const filters = this.props.selectedFilters;
        this.setState({ diseaseFilter: filters });
    }

    handleSearchedItems() {
        const searchedItem = this.props.searchedItems;
        this.props.getCatalogById(searchedItem.ProductId).then(() => {
            this.setState((prevState) => {
                const updatedData = [...prevState.products.data, this.props.singleCatalog.data];
                return {
                    products: { ...prevState.products, data: updatedData },
                };
            });
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }

    addToCart = (productItem) => {
        this.props.setCartItems([...this.props.cartItems, productItem]);
    };

    addToWishList = (productItem) => {
        this.props.setWishListItems([...this.props.wishListItems, productItem]);
    }

    handleCallback = (data) => {
        this.props.getCatalog(data.currentPage, data.postPerPage, -1);
        this.props.getCatalog(data.currentPage, data.postPerPage, -1)
            .then(() => {
                this.setState({ products: this.props.catalog });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    render() {
        const { diseaseFilter } = this.state;

        return (
            <>
                <section class="py-1">
                    <ProductMenu />
                    <div class="row">
                        <div class="col-md-12">
                            <div class="product-grid row row-cols-1 row-cols-sm-2 
                            row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                {this.state.products && this.state.products.data.map((productItem, index) => (
                                    <div className="col">
                                        <div class="product-item">
                                            {
                                                <span className="offSeason">
                                                    {this.state.selectedSeason > 0 &&
                                                        !Object.values(productItem.Seasons).includes(this.state.selectedSeason) && (
                                                            <div className="row text-center">
                                                                <div className="col">
                                                                    <span className="badge bg-warning me-1">Off Season</span>
                                                                </div>
                                                            </div>
                                                        )}
                                                </span>
                                            }
                                            <a href="#" class="btn-wishlist">
                                                <i class="fa fa-heart" aria-hidden="true"
                                                    onClick={() => this.addToWishList(productItem)} />
                                            </a>
                                            <Link to={`/product/${productItem.ProductId}`}
                                                style={{ textDecoration: 'none' }}>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={productItem.ImgUrl}
                                                            class="tab-image" style={{ width: '200px', height: 'auto' }} />
                                                    </a>
                                                </figure>
                                                <div className="text-center">
                                                    <h3>{productItem.Name}</h3>
                                                </div>

                                                <div className="row text-center">
                                                    <div className="col">
                                                        <i class="fa fa-thumbs-up"
                                                            style={{
                                                                fontSize: "18px", color: "#006400",
                                                                paddingRight: '5px'
                                                            }}></i>
                                                        {productItem.Health.Good.map((healthItem, idx) => (
                                                            <span key={idx} className="badge bg-success me-1">
                                                                {healthItem}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="row text-center">
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
                    </div >
                    <div className="row">
                        {this.props && this.props.catalog && this.props.catalog.data && (
                            <Pagination
                                data={this.props.catalog.data}
                                totalElements={this.props.catalog.totalPages}
                                parentCallback={this.handleCallback}
                            />
                        )}
                    </div>
                </section >
            </>
        );
    }
}

export default ProductView;

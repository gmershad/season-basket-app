import React, { Component } from "react";
import diseaseCondition from "../../../assets/data/diseaseCondition.json"
import Nutrients from "../../../assets/data/nutrients.json";
import Products from "../../../assets/data/products";
import { Link } from 'react-router-dom';

class DiseaseNutritionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCondition: null,
            nutrientsData: [],
            suggestedFoods: []
        };
    }

    handleDiseaseConditionChange = (event) => {
        const selectedValue = event.target.value;
        const data = diseaseCondition.find(item => item.id === selectedValue);
        const nutrientsData = Nutrients.filter(obj => data.Nutrients.includes(obj.id));
        this.setState({ selectedCondition: data, nutrientsData: nutrientsData });
    };

    getProducts = () => {
        const targetIds = [10, 11, 12];
        const filteredProducts = Products.productData.filter(product => {
            return product.Nutrients.some(nutrientId => targetIds.includes(nutrientId));
        });
        if (filteredProducts && filteredProducts.length > 0) {
            this.setState({ suggestedFoods: filteredProducts });
        }
    }

    render() {
        const selectedCondition = this.state.selectedCondition;
        return (
            <>
                <section class="py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-auto">
                            <strong>Select Disease Condition:</strong>
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-select"
                                aria-label="Default select"

                                onChange={this.handleDiseaseConditionChange}
                            >
                                <option value="" disabled>Choose Disease Condition</option>
                                {diseaseCondition.map((disease, idx) => (
                                    <option key={idx} value={disease.id}>
                                        {disease.Condition}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {
                        selectedCondition && (
                            <div>
                                <div className="row mt-2">
                                    <h5>{selectedCondition.Condition}</h5>
                                    <h6>Nutrients</h6>
                                    <p>
                                        {
                                            this.state.nutrientsData.map((item, idx) => (
                                                <span key={idx} className="badge bg-success me-1 rounded-pill mt-2"
                                                    style={{ fontSize: 'medium' }}>
                                                    {item.name}
                                                </span>
                                            ))
                                        }
                                    </p>
                                    <p>
                                        {
                                            selectedCondition.OtherNutrients.map((item, idx) => (
                                                <span key={idx} className="badge bg-success me-1 rounded-pill mt-2"
                                                    style={{ fontSize: 'medium' }}>
                                                    {item}
                                                </span>
                                            ))
                                        }
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={this.getProducts}
                                        >
                                            Suggest Foods
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <div class="row">
                        <div class="col-md-12">
                            <div class="product-grid row row-cols-1 row-cols-sm-2 
                            row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                {this.state.suggestedFoods.map((productItem, index) => (
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
                                            </Link>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="input-group product-qty">
                                                    <span class="input-group-btn"></span>
                                                    <span class="input-group-btn"></span>
                                                </div>
                                                <a href="#" class="nav-link">
                                                    <i class="fa fa-shopping-cart"></i>
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

export default DiseaseNutritionView;

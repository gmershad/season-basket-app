import React, { Component } from "react";
import { Link } from 'react-router-dom';
import toxicFood from "../../assets/data/toxins_antinutrients_food.json";
import toxins from "../../assets/data/toxins_antinutrients.json";

class AntiNutrientsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFood: null
        };
    }

    componentDidUpdate() {
    }


    render() {
        const { selectedFood } = this.state;

        return (
            <>
                <div className="py-4">
                    <h5> Anti-Nutrients & Toxic Foods</h5>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="product-grid row row-cols-1 row-cols-sm-2 
                            row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                {toxicFood.map((productItem, index) => (
                                    <div className="col">
                                        <div class="product-item">
                                            <Link to={`/product/${productItem.ProductId}`}
                                                style={{ textDecoration: 'none' }}>
                                                <figure>
                                                    <a href="product-single.html" title="Product Title">
                                                        <img src={process.env.PUBLIC_URL + '/' + productItem.ImgUrl}
                                                            class="tab-image" />
                                                    </a>
                                                </figure>
                                                <h3>{productItem.Name}</h3>
                                                <div className="row">
                                                    <div className="col">
                                                        {productItem.toxins.map((toxinId, idx) => {
                                                            const toxin = toxins.find(item => item.id === toxinId);
                                                            return (
                                                                <>
                                                                    <span key={idx} className="badge bg-danger me-1">
                                                                        {toxin ? toxin.name : ''}
                                                                    </span>
                                                                    {
                                                                        toxin.problem.map((prob, idd) => (
                                                                            <span key={idd} className="badge bg-danger me-1">
                                                                                {prob}
                                                                            </span>
                                                                        ))
                                                                    }
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AntiNutrientsView;

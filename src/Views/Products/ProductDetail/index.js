import { React, Component } from "react";
import { useParams } from "react-router-dom";

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-4">
                        <img src={process.env.PUBLIC_URL + '/images/thumb-avocado.png'} class="tab-image" />
                    </div>
                    <div className="col-md-8">
                        <h3 class="page-title">Avacardo</h3>
                        <div class="post-description padding-medium">
                            <p>
                                <strong>
                                    Fresh Avacardo, Mukhi, Colocasia, Kochur mukhi, Desi Vegetables, Gemüse. Tukwila-ZaZu Tukwila online Grocery Store Shop, Desi Halal Market in Germany. Its reliable trusted and yours desi online Market.
                                </strong>
                            </p>
                            <h6> Food Values:</h6>
                            <p>Stolon of Taro(roots), kochur Mukhi contains (in 230 g) Calories: 165, Carbs: 26g, Fat: 6g, Protein: 6g.</p>
                            <h6>Nutrinoes</h6>
                            <p> in Kochur mukhi, Stolon of Taro vegetables (in 100 g) are Fiber: 6.7g, Manganese, Vitamin B6, Vitamin E. Potassium, Copper,Vitamin C, Phosphorus, Magnesium.</p>
                            <h6>Benefits:</h6>
                            <ul class="inner-list">
                                <li>Kochur mukhi-Stolon of Taro (roots) vegetables are rich in Fiber and Other Important Nutrients</li>
                                <li>It helps Control Blood Sugar.</li>
                                <li>It reduces Your Risk of Heart Disease.</li>
                                <li>It offers Anticancer Properties.</li>
                                <li>It helps You Lose Weight.</li>
                            </ul>
                            <h6>Allergen Info:</h6>
                            <p>Free from Does Not Contain Declaration Obligatory Allergens.</p>
                            <h6>Category:</h6>
                            <p>Fruits & Vegetables</p>
                            <div class="post-tags mt-5">
                                <div class="block-tag col-md-12">
                                    <ul class="list-unstyled d-flex">
                                        <li class="pe-3">
                                            <a href="#" class="btn btn-success btn-small text-uppercase btn-rounded">Early January</a>
                                        </li>
                                        <li class="pe-3">
                                            <a href="#" class="btn btn-success btn-small text-uppercase btn-rounded">Rich Fibre</a>
                                        </li>
                                        <li class="pe-3">
                                            <a href="#" class="btn btn-success btn-small text-uppercase btn-rounded">Good Skin</a>
                                        </li>
                                        <li class="pe-3">
                                            <a href="#" class="btn btn-danger btn-small text-uppercase btn-rounded">Uric Acid</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5>Related</h5>
                <div className="row">
                    <div class="card col-md-4">
                        <img src={process.env.PUBLIC_URL + '/images/thumb-cucumber.png'} class="tab-image" />
                        <div class="card-body">
                            <p class="card-text">
                                Kochur Loti(cleaned-froz.), Stolon of Taro, Arbi, Mukhi 400g</p>
                        </div>
                    </div>
                    <div class="card col-md-4">
                        <img src={process.env.PUBLIC_URL + '/images/thumb-tomatoes.png'} class="tab-image" />
                        <div class="card-body">
                            <p class="card-text">
                                Kochur Loti(cleaned-froz.), Stolon of Taro, Arbi, Mukhi 400g</p>
                        </div>
                    </div>
                    <div class="card col-md-4">
                        <img src={process.env.PUBLIC_URL + '/images/thumb-cucumber.png'} class="tab-image" />
                        <div class="card-body">
                            <p class="card-text">
                                Kochur Loti(cleaned-froz.), Stolon of Taro, Arbi, Mukhi 400g</p>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

const routerWrapper = (Component) => (props) => {
    const params = useParams();
    return <Component {...props} params={params} />;
};

export default routerWrapper(ProductDetail);

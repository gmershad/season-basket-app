import { React, Component } from "react";
import { useParams } from "react-router-dom";

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.getProductDetail(this.props.params.id);
    }

    render() {
        console.log(this.props.catalogDetail);
        const catalogDetil = this.props.catalogDetail;

        return (
            <>
                {
                    catalogDetil && (
                        <>
                            <div className="row py-5">
                                <div className="col-md-4">
                                    <img src={JSON.parse(catalogDetil.ProductImage.ImgUrls)[0]}
                                        class="tab-image" style={{ width: '300px', height: 'auto' }} />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="page-title">{catalogDetil.Name}</h3>
                                    <div className="post-description padding-medium">
                                        <p>
                                            <strong>
                                                {catalogDetil.Description}
                                            </strong>
                                        </p>
                                        <h6> Nutrients ({catalogDetil.ProductNutrition.Serving}):</h6>
                                        <p>
                                            <span className="me-2"><strong>Carbs:</strong>{catalogDetil.ProductNutrition.Carbs},</span>
                                            <span className="me-2"><strong>Calories:</strong>{catalogDetil.ProductNutrition.Calories},</span>
                                            <span className="me-2"><strong>Fat:</strong>{catalogDetil.ProductNutrition.Fat},</span>
                                            <span><strong>Protein:</strong>{catalogDetil.ProductNutrition.Protein}</span>
                                        </p>
                                        <h6>Benefits:</h6>
                                        <ul className="inner-list">
                                            {JSON.parse(catalogDetil.ProductHealth.Good).map((benefit, idx) => (
                                                <li key={idx}>{benefit}</li>
                                            ))}
                                        </ul>
                                        <h6>Allergy Info:</h6>
                                        <ul className="inner-list">
                                            {JSON.parse(catalogDetil.ProductHealth.AllergyInfo).map((allergy, idx) => (
                                                <li key={idx}>{allergy}</li>
                                            ))}
                                        </ul>
                                        <h6>Category:</h6>
                                        <p>{catalogDetil.Type}</p>
                                        {/* <div class="post-tags mt-5">
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <h5>Related</h5>
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
                            </div> */}
                        </>
                    )
                }
            </>
        );
    }
}

const routerWrapper = (Component) => (props) => {
    const params = useParams();
    return <Component {...props} params={params} />;
};

export default routerWrapper(ProductDetail);

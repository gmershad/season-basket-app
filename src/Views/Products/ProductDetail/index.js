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
                <div class="post-meta">
                    <span class="post-category">Vegetable</span> / <span class="meta-date">Jul 11, 2023</span>
                </div>
                <h3 class="page-title">Cauliflower</h3>
                <main class="post-grid">
                    <div class="row">
                        <article class="post-item">
                            <div class="post-content">
                                <div class="post-thumbnail mb-5">
                                    <img src={process.env.PUBLIC_URL + '/images/thumb-avocado.png'} class="tab-image" />
                                </div>
                                <div class="post-description padding-medium">
                                    <p>
                                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur facilisis vivamus massa magna. Blandit mauris libero condimentum commodo morbi consectetur sociis convallis sit. Magna diam amet justo sed vel dolor et volutpat integer. Iaculis sit sapien hac odio elementum egestas neque. Adipiscing purus euismod orci sem amet, et. Turpis erat ornare nisi laoreet est euismod.</strong>
                                    </p>
                                    <blockquote>“Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel.</blockquote>
                                    <ul class="inner-list">
                                        <li>Blandit mauris libero condimentum commodo sociis convallis sit.</li>
                                        <li>Magna diam amet justo sed vel dolor et volutpat integer.</li>
                                        <li>Laculis sit sapien hac odio elementum egestas neque.</li>
                                    </ul>
                                    <div class="post-tags mt-5">
                                        <div class="block-tag col-md-12">
                                            <ul class="list-unstyled d-flex">
                                                <li class="pe-3">
                                                    <a href="#" class="btn btn-warning btn-small text-uppercase btn-rounded">Early January</a>
                                                </li>
                                                <li class="pe-3">
                                                    <a href="#" class="btn btn-warning btn-small text-uppercase btn-rounded">Fibre</a>
                                                </li>
                                                <li class="pe-3">
                                                    <a href="#" class="btn btn-warning btn-small text-uppercase btn-rounded">Uric Acid</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </main>
            </>
        );
    }
}

const routerWrapper = (Component) => (props) => {
    const params = useParams();
    return <Component {...props} params={params} />;
};

export default routerWrapper(ProductDetail);

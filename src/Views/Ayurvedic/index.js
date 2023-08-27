import React, { Component } from "react";
import ayurvedicFood from "../../assets/data/ayurvedic_plants.json";

class AyurvedicFoodView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFood: null
        };
    }

    componentDidUpdate() {
    }

    handleFoodChange = (event) => {
        const selectedValue = event.target.value;
        const data = ayurvedicFood.find(item => item.id === selectedValue);
        this.setState({ selectedFood: data });
    };

    render() {
        const { selectedFood } = this.state;

        return (
            <>
                <section class="py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-auto">
                            <strong>Select Ayurvedic Food:</strong>
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-select"
                                aria-label="Default select"
                                onChange={this.handleFoodChange}
                            >
                                <option value="" disabled>Choose Ayurvedic Food</option>
                                {ayurvedicFood.map((foodItem, idx) => (
                                    <option key={idx} value={foodItem.id}>
                                        {foodItem.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {
                        selectedFood && (
                            <div className="row py-5">
                                <div className="col-md-4">
                                    <img src={process.env.PUBLIC_URL + selectedFood.ImgUrl} class="tab-image" />
                                </div>
                                <div className="col-md-8">
                                    <h3 class="page-title">{selectedFood.name}</h3>
                                    <div class="post-description padding-medium">
                                        <p>
                                            <strong>
                                                {selectedFood.description}
                                            </strong>
                                        </p>
                                        <h6>Usage:</h6>
                                        <ul className="inner-list">
                                            {selectedFood && selectedFood.usage.map((usageItem, idx) => (
                                                <li key={idx}>{usageItem}</li>
                                            ))}
                                        </ul>
                                        <h6>Category:</h6>
                                        <p>Ayurvedic Herbals</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section >
            </>
        );
    }
}

export default AyurvedicFoodView;

import React, { Component } from "react";
import diseaseCondition from "../../../assets/data/diseaseCondition.json"
class DiseaseNutritionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCondition: null
        };
    }

    handleDiseaseConditionChange = (event) => {
        const selectedValue = event.target.value;
        const data = diseaseCondition.find(item => item.id === selectedValue);
        this.setState({ selectedCondition: data });
    };

    render() {
        const selectedCondition = this.state.selectedCondition;
        const nutrients = selectedCondition && selectedCondition.Nutrients ? selectedCondition.Nutrients.split(',') : [];

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
                                            nutrients.map((item, idx) => (
                                                <span key={idx} className="badge bg-success me-1 
                                            rounded-pill mt-2"
                                                    style={{ fontSize: 'medium' }}>
                                                    {item}
                                                </span>
                                            ))
                                        }
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <button type="button" class="btn btn-primary">Suggest Foods</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
            </>
        );
    }
}

export default DiseaseNutritionView;

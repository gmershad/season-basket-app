import React, { Component } from "react";

class NutritionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <>
                <h4 class="page-title">Nutrition Details</h4>
                <div className="row">
                    <div className="col-md-3">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>+ Add Food</option>
                        </select>
                    </div>
                </div>
            </>
        );
    }
}

export default NutritionView;

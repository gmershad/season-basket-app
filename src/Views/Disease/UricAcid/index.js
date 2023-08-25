import React, { Component } from "react";
import foodUricAcid from "../../../assets/data/foods_uric_acid.json";

class UricAcidView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidUpdate() {
    }

    getColor(uricAcid) {
        let color = "";
        if (uricAcid > 300) color = "bg-dark";
        else if (uricAcid > 200) color = "bg-danger";
        else if (uricAcid > 100) color = "bg-danger";
        else if (uricAcid > 50) color = "bg-primary";
        else color = "bg-success";

        return color;
    }

    render() {

        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <span class="badge bg-secondary">Very Low: 0-50</span>
                            </div>
                            <div className="col-md-2">
                                <span class="badge bg-warning">Low: 50-100</span>
                            </div>
                            <div className="col-md-2">
                                <span class="badge bg-warning">Moderate: 100-200</span>
                            </div>
                            <div className="col-md-2">
                                <span class="badge bg-danger">High: 200-300</span>
                            </div>
                            <div className="col-md-2">
                                <span class="badge bg-dark">High: 200-300</span>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Icon</th>
                                    <th>Food</th>
                                    <th>Type</th>
                                    <th>Total Purines</th>
                                    <th>Uric Acid</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foodUricAcid.map(foodItem => (
                                    <tr>
                                        <td>{foodItem.icon}</td>
                                        <td>{foodItem.name}</td>
                                        <td>{foodItem.type}</td>
                                        <td>{foodItem.purines[0].total}</td>
                                        <td>
                                            <span class={`badge ${this.getColor(foodItem.purines[0].uricAcid)}`}>
                                                {foodItem.purines[0].uricAcid}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default UricAcidView;

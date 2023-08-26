import React, { Component } from "react";
import { from } from 'rxjs'
import { map } from 'rxjs/operators'
import foods from '../../assets/data/foods.json';
import nutrients from "../../assets/data/nutrients.json";
import { calculateMacroNutrients, calculateMicroNutrients } from "./calculations";
import { Progress } from 'antd'

class NutritionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFood: '',
            selectedFoods: [],
            macroNutrients: [],
            microNutrients: []
        };
        this.handleFoodChange = this.handleFoodChange.bind(this);
    }

    nutrientsLimited = from(nutrients).pipe(
        map(nutrient => ({
            name: nutrient.name,
            rda: nutrient.rda,
        })),
    )

    updateNutrients() {
        console.log(this.state.selectedFoods);
        const nutrientsLimited = nutrients.map(nutrient => ({
            name: nutrient.name,
            rda: nutrient.rda,
        }));

        this.setState({
            macroNutrients: calculateMacroNutrients(this.state.selectedFoods),
            microNutrients: calculateMicroNutrients(this.state.selectedFoods, nutrientsLimited),
        })
    }

    handleFoodChange = (event) => {
        const selectedFoodName = event.target.value;
        const foodItem = foods.find(f => f.name === selectedFoodName);
        this.setState(prevState => ({
            selectedFoodName,
            selectedFoods: [...prevState.selectedFoods,
                foodItem
            ]
        }), () => {
            console.log(this.state.selectedFoods);
            this.updateNutrients();
        });
    };


    handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const updatedSelectedFoods = [...this.state.selectedFoods];
        updatedSelectedFoods[index].amount = value;
        this.setState({ selectedFoods: updatedSelectedFoods });
        this.updateNutrients();
    };

    handleRemoveFood = (foodToRemove) => {
        this.setState(prevState => ({
            selectedFoods: prevState.selectedFoods.filter(food => food !== foodToRemove)
        }));
    };

    render() {
        return (
            <>
                <div class="container-fluid">
                    <h5 class="page-title">Nutrition Details</h5>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <select className="form-select" aria-label="Default"
                                        onChange={this.handleFoodChange} value={this.state.selectedFood}>
                                        <option value="">+ Add Food</option>
                                        {foods.map(food => (
                                            <option key={food.name} value={food.name}>{food.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {this.state.selectedFoods.map((item, index) => (
                                <div className="row mb-2" key={item.name}>
                                    <div className="col-md-3">
                                        {item.name}
                                    </div>
                                    <div className="col-3">
                                        <input type="number" className="form-control" id="count"
                                            key={index}
                                            min={item.serving}
                                            value={item.amount}
                                            name={item.name}
                                            onChange={(event) => this.handleInputChange(event, index)} />
                                    </div>
                                    <div className="col">
                                        <i className="fa fa-trash-o"
                                            onClick={() => this.handleRemoveFood(item)}></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-8">
                            <div className="row mb-4">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Calories</h5>
                                            {this.state.macroNutrients && this.state.macroNutrients['calories'] ? (
                                                <p className="card-text badge text-bg-secondary">
                                                    {this.state.macroNutrients['calories'].amount} {this.state.macroNutrients['calories'].unit}
                                                </p>
                                            ) : (
                                                <p className="card-text">No data available</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Protiens</h5>
                                            {this.state.macroNutrients && this.state.macroNutrients['proteins'] ? (
                                                <p className="card-text card-text badge text-bg-secondary">
                                                    {this.state.macroNutrients['proteins'].amount} {this.state.macroNutrients['proteins'].unit}
                                                </p>
                                            ) : (
                                                <p className="card-text">No data available</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Carbs</h5>
                                            {this.state.macroNutrients && this.state.macroNutrients['carbs'] ? (
                                                <p className="card-text card-text badge text-bg-secondary">
                                                    {this.state.macroNutrients['carbs'].amount} {this.state.macroNutrients['carbs'].unit}
                                                </p>
                                            ) : (
                                                <p className="card-text">No data available</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Fats</h5>
                                            {this.state.macroNutrients && this.state.macroNutrients['fats'] ? (
                                                <p className="card-text card-text badge text-bg-secondary">
                                                    {this.state.macroNutrients['fats'].amount} {this.state.macroNutrients['fats'].unit}
                                                </p>
                                            ) : (
                                                <p className="card-text">No data available</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                {Object.keys(this.state.microNutrients).map(nutrientName => (
                                    <div className="col-md-2" key={nutrientName}>
                                        <h6>{nutrientName}</h6>
                                        <p>
                                            {this.state.microNutrients[nutrientName].amount}
                                            {this.state.microNutrients[nutrientName].unit} - {this.state.microNutrients[nutrientName].percentage}%
                                            <Progress showInfo={false}
                                                status={this.state.microNutrients}
                                                percent={this.state.microNutrients[nutrientName].percentage}
                                                size="small" />
                                        </p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div >
            </>
        );
    }
}

export default NutritionView;

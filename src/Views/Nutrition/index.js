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
        foodItem.amount = 100;
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


    handleInputChange = (event) => {
        console.log(event);
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
                    <div class="row">
                        <div class="col-md-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <select class="form-select" aria-label="Default"
                                        onChange={this.handleFoodChange} value={this.state.selectedFood}>
                                        <option selected>+ Add Food</option>
                                        {foods.map(food => (
                                            <option key={food.name} value={food.name}>{food.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {
                                this.state.selectedFoods.map(item => (
                                    <div className="row">
                                        <div className="col-md-3">
                                            {item.name}
                                        </div>
                                        <div className="col-3">
                                            <input type="number" className="form-control" id="count"
                                                min={item.serving}
                                                value={item.serving}
                                                name={item.name}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="col" >
                                            <i class="fa fa-trash-o"
                                                onClick={() => this.handleRemoveFood(item)}></i>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="col-md-8">
                            <div class="row mb-4">
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Calories</h5>
                                            {this.state.macroNutrients && this.state.macroNutrients['calories'] ? (
                                                <p class="card-text">
                                                    {this.state.macroNutrients['calories'].amount} {this.state.macroNutrients['calories'].unit}
                                                </p>
                                            ) : (
                                                <p class="card-text">No data available</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Proteins</h5>
                                            {this.state.macroNutrients && this.state.macroNutrients['proteins'] ? (
                                                <p class="card-text">
                                                    {this.state.macroNutrients['proteins'].amount} {this.state.macroNutrients['proteins'].unit}
                                                </p>
                                            ) : (
                                                <p class="card-text">No data available</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Carbs</h5>
                                            {this.state.macroNutrients && this.state.macroNutrients['carbs'] ? (
                                                <p class="card-text">
                                                    {this.state.macroNutrients['carbs'].amount} {this.state.macroNutrients['carbs'].unit}
                                                </p>
                                            ) : (
                                                <p class="card-text">No data available</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Fats</h5>
                                            {this.state.macroNutrients && this.state.macroNutrients['fats'] ? (
                                                <p class="card-text">
                                                    {this.state.macroNutrients['fats'].amount} {this.state.macroNutrients['fats'].unit}
                                                </p>
                                            ) : (
                                                <p class="card-text">No data available</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {Object.keys(this.state.microNutrients).map(nutrientName => (
                                    <div className="col-md-2" key={nutrientName}>
                                        <h5>{nutrientName}</h5>
                                        <p>{this.state.microNutrients[nutrientName].amount}
                                            {this.state.microNutrients[nutrientName].unit}
                                            - {this.state.microNutrients[nutrientName].percentage}%
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

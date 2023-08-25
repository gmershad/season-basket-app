export const defaultMacroNutrients = {
    calories: {
        name: 'Calories',
        raw: 0,
        amount: 0,
        unit: 'kcal',
    },
    proteins: {
        name: 'Proteins',
        raw: 0,
        amount: 0,
        unit: 'μg',
    },
    carbs: {
        name: 'Carbs',
        raw: 0,
        amount: 0,
        unit: 'μg',
    },
    fats: {
        name: 'Fats',
        raw: 0,
        amount: 0,
        unit: 'μg',
    },
}
export const calculateMacroNutrients = (selectedFoods) => {
    const macroNutrients = { ...defaultMacroNutrients };
    selectedFoods.forEach((selectedFood) => {
        selectedFood.amount = selectedFood.amount || 0;
        macroNutrients.calories.raw += selectedFood.calories * selectedFood.serving;
        macroNutrients.proteins.raw += selectedFood.proteins * selectedFood.serving;
        macroNutrients.carbs.raw += selectedFood.carbohydrates * selectedFood.serving;
        macroNutrients.fats.raw += selectedFood.fat * selectedFood.serving;
    });

    macroNutrients.calories = formatMacroNutrient(macroNutrients.calories, ['kcal'])
    macroNutrients.proteins = formatMacroNutrient(macroNutrients.proteins, ['g', 'mg', 'μg'])
    macroNutrients.carbs = formatMacroNutrient(macroNutrients.carbs, ['g', 'mg', 'μg'])
    macroNutrients.fats = formatMacroNutrient(macroNutrients.fats, ['g', 'mg', 'μg'])

    return macroNutrients;
}

const formatMacroNutrient = (macroNutrient, units) =>
    Object.assign(macroNutrient, unitize(macroNutrient.raw, units))

export const unitize = (amount, units) => {
    let unit = units.pop()
    while (amount >= 1000) {
        if (units.length === 0) {
            return {
                amount: parseFloat(parseFloat(amount).toFixed(2)),
                unit,
            }
        }
        amount /= 1000
        unit = units.pop()
    }
    return {
        amount: parseFloat(parseFloat(amount).toFixed(2)),
        unit,
    }
}

const getMicroNutrientsDefaults = (nutrients) => {
    const microNutrients = {};

    nutrients.forEach(nutrient => {
        if (!microNutrients[nutrient.name]) {
            microNutrients[nutrient.name] = {
                rda: nutrient.rda,
                raw: 0,
                amount: 0,
                unit: 'μg',
                percentage: 0,
            };
        }
    });

    return microNutrients;
};


const percentage = (amount, total) => parseInt((amount * 100) / total, 10)

export const calculateMicroNutrients = (selectedFoods, nutrients) => {
    const microNutrients = getMicroNutrientsDefaults(nutrients);

    selectedFoods.forEach(selectedFood => {
        nutrients.forEach(nutrient => {
            const foodNutrients = selectedFood.nutrients[nutrient.name];
            microNutrients[nutrient.name].raw += (foodNutrients || 0) * selectedFood.amount;
        });

        nutrients.forEach(nutrient => {
            microNutrients[nutrient.name].percentage = percentage(
                microNutrients[nutrient.name].raw,
                nutrient.rda
            );
            microNutrients[nutrient.name].raw = parseInt(microNutrients[nutrient.name].raw, 10);
            const r = unitize(microNutrients[nutrient.name].raw, ['g', 'mg', 'μg']);
            microNutrients[nutrient.name].amount = r.amount;
            microNutrients[nutrient.name].unit = r.unit;
        });
    });

    return microNutrients;
}

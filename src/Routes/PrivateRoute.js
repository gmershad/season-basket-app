import React from "react";
import MainLayoutContainer from "../Views/Layout/MainLayoutContainer";
import ProductContainer from "../Views/Products/ProductContainer";
import ProductDetailContainer from "../Views/Products/ProductDetail/ProductDetailContainer";
import NutritionContainer from "../Views/Nutrition/NutritionContainer";
import UricAcidContainer from "../Views/Disease/UricAcid/UricAcidContainer";
import DiseaseNutritionContainer from "../Views/Nutrition/DiseaseNutrition/DiseaseNutritionContainer";
import AyurvedicFoodContainer from "../Views/Ayurvedic/AyurvedicFoodContainer";
import AntiNutrientsContainer from "../Views/AntiNutrients/AntiNutrientsContainer";
import CartContainer from "../Views/Cart/CartContainer";

const MainRoutes = [{
    path: '/',
    element: <MainLayoutContainer />,
    children: [
        {
            path: '/',
            element: <ProductContainer />
        },
        {
            path: '/',
            children: [
                {
                    path: "product/:id",
                    element: <ProductDetailContainer />
                }
            ]
        },
        {
            path: '/nutrition',
            element: <NutritionContainer />
        },
        {
            path: '/diseasenutrition',
            element: <DiseaseNutritionContainer />
        },
        {
            path: '/uricacid',
            element: <UricAcidContainer />
        },
        {
            path: '/ayurfood',
            element: <AyurvedicFoodContainer />
        },
        {
            path: '/toxin',
            element: <AntiNutrientsContainer />
        },
        {
            path: '/cart',
            element: <CartContainer />
        },
    ]
}];

export default MainRoutes;

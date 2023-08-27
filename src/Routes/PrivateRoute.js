import React from "react";
import MainLayoutContainer from "../Views/Layout/MainLayoutContainer";
import ProductContainer from "../Views/Products/ProductContainer";
import ProductDetailContainer from "../Views/Products/ProductDetail/ProductDetailContainer";
import NutritionContainer from "../Views/Nutrition/NutritionContainer";
import UricAcidContainer from "../Views/Disease/UricAcid/UricAcidContainer";
import DiseaseNutritionContainer from "../Views/Nutrition/DiseaseNutrition/DiseaseNutritionContainer";

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
    ]
}];

export default MainRoutes;

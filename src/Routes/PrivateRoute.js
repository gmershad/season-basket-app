// import React from "react";
// import MainLayoutContainer from "../Views/Layout/MainLayoutContainer";
// import ProductContainer from "../Views/Products/ProductContainer";
// import ProductDetailContainer from "../Views/Products/ProductDetail/ProductDetailContainer";
// import NutritionContainer from "../Views/Nutrition/NutritionContainer";
// import UricAcidContainer from "../Views/Disease/UricAcid/UricAcidContainer";
// import DiseaseNutritionContainer from "../Views/Nutrition/DiseaseNutrition/DiseaseNutritionContainer";
// import AyurvedicFoodContainer from "../Views/Ayurvedic/AyurvedicFoodContainer";
// import AntiNutrientsContainer from "../Views/AntiNutrients/AntiNutrientsContainer";
// import CartContainer from "../Views/Cart/CartContainer";
// import WishListContainer from "../Views/WishList/WishListContainer";

// const MainRoutes = [{
//     path: '/',
//     element: <MainLayoutContainer />,
//     children: [
//         {
//             path: '/',
//             element: <ProductContainer />
//         },
//         {
//             path: "/product/:id",
//             element: <ProductDetailContainer />
//         }
//         // {
//         //     path: '/nutrition',
//         //     element: <NutritionContainer />
//         // },
//         // {
//         //     path: '/diseasenutrition',
//         //     element: <DiseaseNutritionContainer />
//         // },
//         // {
//         //     path: '/uricacid',
//         //     element: <UricAcidContainer />
//         // },
//         // {
//         //     path: '/ayurfood',
//         //     element: <AyurvedicFoodContainer />
//         // },
//         // {
//         //     path: '/toxin',
//         //     element: <AntiNutrientsContainer />
//         // },
//         // {
//         //     path: '/cart',
//         //     element: <CartContainer />
//         // },
//         // {
//         //     path: '/wish',
//         //     element: <WishListContainer />
//         // },
//     ],
// },
//     // {
//     //     path: "/product/:id",
//     //     element: <ProductDetailContainer />
//     // }
// ];

// export default MainRoutes;

import React, { lazy, Suspense } from 'react';
const LazyMainLayoutContainer = lazy(() => import('../Views/Layout/MainLayoutContainer'));
const LazyProductContainer = lazy(() => import('../Views/Products/ProductContainer'));
const LazyProductDetailContainer = lazy(() => import('../Views/Products/ProductDetail/ProductDetailContainer'));
const CartContainer = lazy(() => import('../Views/Cart/CartContainer'));
const WishListContainer = lazy(() => import('../Views/WishList/WishListContainer'));

const MainRoutes = [
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <LazyMainLayoutContainer />
            </Suspense>
        ),
        children: [
            {
                path: '/',
                element: <LazyProductContainer />
            },
            {
                path: "/product/:id",
                element: <LazyProductDetailContainer />
            },
            {
                path: "/cart",
                element: <CartContainer />
            },
            {
                path: "/wish",
                element: <WishListContainer />
            }
        ]
    }
];

export default MainRoutes;
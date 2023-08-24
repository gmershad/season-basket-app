import React from "react";
import MainLayoutContainer from "../Views/Layout/MainLayoutContainer";
import ProductContainer from "../Views/Products/ProductContainer";
import ProductDetailContainer from "../Views/Products/ProductDetail/ProductDetailContainer";

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
        }
    ]
}];

export default MainRoutes;

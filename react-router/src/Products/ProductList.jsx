
import ProductItem from "./ProductItem";
import { products } from "../assets/data";
import styled from "styled-components"
import { useState } from "react";

function ProductList({array,setArray, basket,setBasket}){
    return (
        <ProductsSection>
            <Products>
                {array.map((item)=>
                <ProductItem
                key = {item.id}
                //active = {item.active}
                // ProductName = {item.ProductName}
                // ProductDesc = {item.ProductDesc}
                // ProductPrice = {item.ProductPrice}
                array = {array}
                setArray = {setArray} 
                obj = {item}
                basket={basket} 
                setBasket={setBasket} />)}
            </Products>
        </ProductsSection>
    )
}

export default ProductList

const ProductsSection = styled.section`
    padding: 20px;
    display: flex;
    justify-content: center;
`;

const Products = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0;
    margin: 0;
`;
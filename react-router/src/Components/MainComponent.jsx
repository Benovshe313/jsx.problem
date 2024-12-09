import { useState } from "react"
import { products } from "../assets/data"

import styled from "styled-components"

import ProductsPage from "../Pages/ProductsPage"
import Home from "../Pages/Home"
import About from "../Pages/About"

function MainComponent() {
    const [array, setArray] = useState([...products])

   
    return (
        <PageMain>
            <Home/>
            <About/>
            <ProductsPage
                array={array}
                setArray={setArray}
                 />
            
        </PageMain>
    )
}

export default MainComponent

const PageMain = styled.main`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

import styled from "styled-components"

function ProductItem({ obj, array, setArray, basket, setBasket }) {
    function handleDelete() {
      let newArr = [...array]
      let index = newArr.findIndex((item) => item.id === obj.id)
      newArr.splice(index, 1)
      setArray(newArr)
    }
  
    function handleAdd() {
      let index = basket.findIndex((item) => item.id === obj.id)
      if (index === -1) {
        setBasket([...basket, obj])
        alert("Product added to basket")
      } else {
        alert("Product is already in basket")
      }
    }
  
    return (
      <ProductsLi>
        <ProductName>{obj.ProductName}</ProductName>
        <ProductDesc>{obj.ProductDesc}</ProductDesc>
        <ProductPrice>{obj.ProductPrice + " AZN"}</ProductPrice>
        <button onClick={handleDelete}>DELETE</button>
        <button onClick={handleAdd}>ADD TO BASKET</button>
      </ProductsLi>
    );
  }
  
  export default ProductItem;
  

const ProductsLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 8px;
`;

const ProductName = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 520;
  line-height: 29.26px;
  text-align: left;
`;

const ProductDesc = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 17.07px;
  text-align: left;
  color: black;
  margin-top: 0;
`;

const ProductPrice = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 520;
  line-height: 29.26px;
  text-align: left;
`;
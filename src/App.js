import styled from "styled-components";
import { Router, Link,useParams } from "@reach/router";
import { ShopProvider } from "./ShopContext";
import Products from "./Products";
import Cart from "./Cart";
import { shopData } from './ShopData';
import useShop from "./ShopContext";

const App = () => {
  return (
    <ShopProvider>
      <Wrapper>
       
       Taxigo test for oludayo
        
        <LinksWrapper>
        <nav style={{display:"flex" , padding:"1em", justifyContent:"space-around", background:"red", width:"100%"}}>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          </nav>
        </LinksWrapper>
        <Router>
          <Products path="/" />
          <Cart path="/cart" />
          <ProductsDetails path ="/:index"/>
          <ProductsNotFound path ="*"/>
        </Router>
      </Wrapper>
    </ShopProvider>
  );
};

export default App;

function ProductsNotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}
function ProductsDetails() {


   
  const { index } = useParams();
  const meal = shopData[index];

  if (!meal) {
    return <h2> Meal Not Found!</h2>;
  }

  const { name, image,description,rating,price } = meal;

  return (
    <div style={{background:"yellow", borderRadius:"10%",
   margin:"10rem" ,display:"flexbox", flexWrap:"wrap"
    
    }}>
     <article>
      <img src={image} alt={name} style={{borderRadius:"20%" ,padding:"2em auto", maxHeight:"500px", flex: "center", paddingBlock:"1em auto"}} />

      </article>
      <h3 style={{textAlign:"right" ,padding:"2em"}}>Highest Rating: {rating}</h3>
      <h2 style={{textAlign:"center"}}>{name}</h2>
      <article style={{textAlign:"center"}}>Best description{description}</article>
      <h1 style={{textAlign:"center"}}>${price}.00</h1>
     
  </div>


  );
}

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
const Subtitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0px;
`;
const TextContainer = styled.div`
  display: grid;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  width: 100%;
  padding: 20px;
`;

const AddButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isInCart ? "#E55336" : "#60c95d")};
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;`
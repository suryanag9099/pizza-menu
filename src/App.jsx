import React from 'react'
import "./App.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },

  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },

  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


export default function App() {
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}

function Header(){

  // const style ={color: "red", fontSize:"39px",textTransform:"uppercase"};
  let style = {};
  return ( <header className ="header">
    <h1 style={{style}}> Fast react pizza co.</h1>
  </header>
  );
}

function Menu(){
  let pizzas = pizzaData;
  return(
    <main className="menu">
    <h2> Our Menu</h2>
    {/* conditional rendering  */}
    {/* {pizzas.length >0 &&(
    <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      )} */}

{/* conditional rendering with ternary opator */}


{pizzas.length > 0 ? (
  <>
<p>Authentic Italian cuisine 6 creative dishes to choose from all from our stone oven all organic and delicious!</p>
  
  <ul className="pizzas">
    {pizzaData.map((pizza) => (
      <Pizza pizzaObj={pizza} key={pizza.name} />
    ))}
  </ul>
  </>
) : (
  <p>We are working on the menu. Come back later!</p>
)}



      

{/* 
    // name={pizza.name}
    // ingredients={pizza.ingredients}
    // photoName={pizza.photoName}
    // price={pizza.price}
    />
   ))} */}
    {/* <Pizza name="Pizza spinaci"
    ingredients="Tomatoes, mozarella,sipnach and ricotta cheese"
    photoName="pizzas/spinaci.jpg"
    price={10}
    />

<Pizza name="Pizza Funghi"
    ingredients="Tomato, mozarella, mushrooms, and onion"
    photoName="pizzas/funghi.jpg"
    price={12}
    /> */}
    </main>
  );
}

function Footer (){
  const hour = new Date().getHours();
  console.log(hour);
  const openHour =12;
  const closeHour =23;
  // if(hour >= openHour && hour <= closeHour){
  //   alert("we are open");
  // }else{
  //   alert("we are closed");
  // }

  let isopen = hour >= openHour && hour <= closeHour;
  console.log(isopen);

  return ( 
    <footer className="footer">
      {/* {isopen &&  (
    <div className="order"><p>open until {closeHour}:00, come Vist us or Order online</p>
      <button className="btn">order</button>
      </div>
    )} */}

{isopen ? (
  <Order closeHour={closeHour} openHour={openHour}/>
) : (
  <p>we are happy to welcome you {openHour} :00 and {closeHour}:00 </p>
)}
    </footer>
  );
}


function Order({closeHour, openHour}){
  return (
    <div className="order">
    <p>Open from {openHour}:00 until {closeHour}:00, come visit us or order online</p>
    <button className="btn">Order</button>
   </div>
  )
}

function Pizza({pizzaObj}){
  // console.log(props)

  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out":""}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name} />
    <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </div>
  </li>
  );
}
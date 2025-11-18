//penamaan file ini harus index.js karena react itu refer awal itu ke src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  ); //return disini hanya boleh 1 element saja, kecuali pakai div diluarnya
}
function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };//cara masukin css ke javascript
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          {/*ini namanya react fragment berguna agar return tetap 1 element, meski didalamnya banyak. kalau mau diberi key harus gini <React.Fragment key=''></React.Fragment> */}
          <ul className="pizzas">
            {/*luar ul dalam li*/}
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} /> //key disini itu harus ada, lalu disini key juga harus beda semua yang ditentukan dari variable yang memilki value beda semua di object
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      {/*kita tidak dapat menggunakan if diatas karena if tidak didalam return value, tapi kita harus pakai ?: (itenary operator). Ini lebih better dari && karena ada lanjutannya kalau syarat tidak terpenuhi. */}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}
function Pizza(props) {
  //props disini akan ambil pizzaObj dan key sehingga dibawah harus ada define pizzaObj
  //props untuk menerima input, props itu juga immutable dengan kata lain tidak bisa dirubah
  console.log(props);

  if (props.pizzaObj.soldOut) return null; //ini itu bisa return sendiri karena proses dari Menu memasukkan Pizza itu satu2 dibaca di json dalam map, kalau sudah return disini maka tidak akan return lagi dibawahnya

  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  console.log(hour);

  // if (hour >= openHour && hour <= closeHour) alert("We are currently open!");
  // else alert("Sorry we are closed!");

  // if (!isOpen) return <p>We are closed!</p>;

  return (
    <footer className="footer">
      {isOpen && <Order closeHour={closeHour} openHour={openHour} />}
      {/* && disitu layaknya if, kalau true maka dia akan return sampingnya(string, int, dsb kecuali undefined dan false) karena sifat && itu harus true dua2nya*/}
      {/* kalau di && awalnya sudah false, maka dia tidak akan return apapun karena keduanya harus true, definisi true bisa apa aja asal tidak falsy yaitu undefined atau false*/}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  //ini namanya destructuring props yaitu kita tinggal pakai nama argument yang dimasukkan. Nama hyperparameter harus sama dengan nama argumentnya.
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); //ini itu ambil id root yang ada di public/index.html untuk nantinya dimasukin App()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); //App di dalam itu berarti dia panggil fungsi App() mengenai apa yang di render, strict mode itu menghalangi kalau ada error

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

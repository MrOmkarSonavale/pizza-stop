import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';


const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizza/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizza/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizza/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizza/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizza/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizza/prosciutto.jpg",
		soldOut: false,
	},
];


function App() {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	)
}

function Header() {
	return <div className='header'>
		<h1>French Restureant</h1>
	</div>
}

function Menu() {

	const pizzas = pizzaData;
	// const pizzas = [];
	const pizzasLength = pizzas.length;
	// if (pizzas.soldOut) return null;

	if (pizzasLength <= 0) {
		return (< Description />
		)
	}

	return (
		<div className='menu'>
			<h2>Our Menu</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi nemo cum fugit aspernatur esse nisi
				quibusdam necessitatibus facilis blanditiis eos quis ipsum iure quidem, in eum perferendis ratione praesentium.</p>

			{pizzasLength > 0 && (
				<Order pizzas={pizzas} />
			)
			}
		</div>
	)
}

function Description() {
	return (<div>
		<p>We are still Working on our menu. Plesae come back later</p>
	</div>)
}

function Order({ pizzas }) {
	return (
		<ul className="pizzas">
			{
				pizzas.map((pizza) => {
					return (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					)

				})
			}

		</ul>
	)
}

function Pizza({ pizzaObj }) {
	return (
		<li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>

			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>

				{pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>}
				{/* <span>{pizzaObj.price}</span> */}
			</div>

		</li >)
}

function Footer() {
	const time = new Date().getHours();
	const date = new Date().toLocaleDateString();
	const open = 8;
	const close = 20;

	const isOpen = time >= open && time <= close;
	return (
		<footer className='footer'>
			{isOpen ? (
				<div className='order'>
					<p>We are open until {close}:00.come to visit us</p>
					<button className='btn'>Order</button>
				</div>
			) : <p>We are close {date}</p>}
		</footer>
	)
}


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>

);

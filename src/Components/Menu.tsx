import React, { Component } from "react";
import menuItems, { DeluxeBurger, BasicBurger } from "../Menu/menuItems";
import './Menu.css';

const comboOptions = [
    {
        desc: "With regular fries and fountain drink",
        addedCost: <text>Add &nbsp;&#36; 3.29</text>
    },
    {
        desc: "With large fries and fountain drink",
        addedCost: <text>Add &nbsp;&#36; 4.29</text>
    },
    {
        desc: "Substitue sweet potato fries or onion rings",
        addedCost: <text>Add &nbsp;&#36; 1.69</text>
    }
];

class Menu extends Component {
    
    deluxeBurgers = menuItems.deluxeBurgers.map( (burger: DeluxeBurger) => {
        const {name, desc, price, heatIndex} = burger;
       return (
        <div className="deluxeBurger menuItem">
            <div className="inline-wrapper">
                <div className="name-and-icon">
                    <div className="name">{name}</div>
                    <div className={`heat-icon heat-icon-${heatIndex}`}/>
                </div>
                <div className="price">	&#36;{price}</div>
            </div>
            <div className="desc">{desc}</div>
        </div>
       )
    });

    basicBurgers = menuItems.basicBurgers.map( (burger: BasicBurger) => {
        const {name, desc, price, doublePrice} = burger;
       return (
        <div className="basicBurger menuItem">
            <div className="inline-wrapper">
                <div className="name">{name}</div>
                <div className="price">	Single &nbsp;&nbsp;&nbsp;&#36;{price}</div>
                <div className="price">	Double &nbsp;&nbsp;&nbsp;&#36;{doublePrice}</div>
            </div>
        </div>
       )
    });

    combos = comboOptions.map(option => {
        const {desc, addedCost} = option;
        return (
            <div className="menuItem inline-wrapper">
                <div className="title">{desc}</div>
                <div className="price">{addedCost}</div>
            </div>
        )
    });

    render(){
        return (
            <div className="menuContainer">
                <div className="deluxeBurgers category">
                    <h3>Deluxe Burgers</h3>
                    {this.deluxeBurgers}
                </div>
                <div className="basicBurgers category">
                    <h3>Basic Burgers</h3>
                    {this.basicBurgers}
                </div>
                <div className="combos category">
                    <h3>Combos</h3>
                    {this.combos}
                </div>
            </div>
        )
    }
}

export default Menu;
import { Component } from "react";
import menu, { DeluxeBurger, BasicBurger } from "./data/menuItems";
import './Menu.css';
import {v4 as uuid} from 'uuid';

const comboOptions = [
    {
        desc: "With regular fries and fountain drink",
        addedCost: <p>Add &nbsp;&#36; 3.29</p>
    },
    {
        desc: "With large fries and fountain drink",
        addedCost: <p>Add &nbsp;&#36; 4.29</p>
    },
    {
        desc: "Substitue sweet potato fries or onion rings",
        addedCost: <p>Add &nbsp;&#36; 1.69</p>
    }
];

class Burgers extends Component {
    
    deluxeBurgers = menu.deluxeBurgers.map( (burger: DeluxeBurger) => {
        const {name, desc, price, heatIndex} = burger;
       return (
        <div className="deluxeBurger menuItem" key={uuid()}>
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

    basicBurgers = menu.basicBurgers.map( (burger: BasicBurger) => {
        const {name, price, doublePrice} = burger;
       return (
        <div className="basicBurger menuItem" key={uuid()}>
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
            <div className="menuItem inline-wrapper" key={uuid()}>
                <div className="title">{desc}</div>
                <div className="price">{addedCost}</div>
            </div>
        )
    });

    render(){
        return (
            <>
                <div className="deluxeBurgers category">
                    <div className="section-title">Deluxe Burgers</div>
                    {this.deluxeBurgers}
                </div>
                <div className="basic-combo-wrapper">
                    <div className="basicBurgers category">
                    <div className="section-title">Basic Burgers</div>
                        {this.basicBurgers}
                    </div>
                    <div className="combos pcategory">
                        <div className="section-title">Combos</div>
                        {this.combos}
                    </div>                    
                </div>
            </>
        )
    }
}

export default Burgers;
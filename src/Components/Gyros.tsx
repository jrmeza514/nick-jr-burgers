import React, { Component } from "react";
import menuItems, { DeluxeBurger, MenuItem } from "../Menu/menuItems";
import './Menu.css';

class Gyros extends Component {
    
    gyros = menuItems.gyros.map( (gyro: MenuItem) => {
        const {name, desc, price} = gyro;
       return (
        <div className="gyro menuItem">
            <div className="inline-wrapper">
                <div className="name-and-icon">
                    <div className="name">{name}</div>
                </div>
                <div className="price">	&#36;{price}</div>
            </div>
            <div className="desc">{desc}</div>
        </div>
       )
    });


    render(){
        return (
            <>
                <div className="gyros category">
                    <h3>Deluxe Burgers</h3>
                    {this.gyros}
                </div>
            </>
        )
    }
}

export default Gyros;
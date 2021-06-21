import { Component } from "react";
import menuItems, {  MenuItem } from "../Menu/menuItems";
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
                    <div className="section-title">Deluxe Burgers</div>
                    {this.gyros}
                </div>
            </>
        )
    }
}

export default Gyros;
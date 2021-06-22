import { Component } from "react";
import menu, { MenuItem } from "./data/menuItems";

class MenuExtras extends Component {

    drinks = menu.extras.Drinks.map( (item: MenuItem) => {
        const {name, desc, price} = item;
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

    sides = menu.extras.Sides.map( (item: MenuItem) => {
        const {name, desc, price} = item;
       return (
        <div className="side menuItem">
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

    sauces = menu.extras.Sauces.map( (item: MenuItem) => {
        const {name, desc, price} = item;
       return (
        <div className="sauces menuItem">
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
                <div className="extras category">
                    <div className="section-title">Sides</div>
                    {this.sides}
                    <div className="section-title">Sauces</div>
                    {this.sauces}
                    <div className="section-title">Drinks</div>
                    {this.drinks}
                </div>
            </>
        )
    }

}

export default MenuExtras;
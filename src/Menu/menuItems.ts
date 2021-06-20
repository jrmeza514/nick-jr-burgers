import deluxeBurgers from './deluxeBurgers.json'

class MenuItem {    
    public name:string;
    public desc:string;
    public price:number;

    constructor(name: string, desc:string, price: number){
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
}

export class DeluxeBurger extends MenuItem {
    public heatIndex:number;

    constructor(name:string, desc:string, price:number, heatIndex:number){
        super(name, desc, price);
        this.heatIndex = heatIndex;
    }
}

export class BasicBurger extends MenuItem {

    public doublePrice; 
    constructor(name:string, price:number, doublePrice:number){
        super(name, '', price);
        this.doublePrice = doublePrice;
    }
}

/*
    Create All Deluxe Burgers
*/

const Hamburger = new BasicBurger("Hamburger", 2.79, 4.49);
const CheeseBurger = new BasicBurger("Cheeseburger", 3.99, 4.99);
const BaconCheeseBurger = new BasicBurger("Bacon Cheeseburger", 5.29, 6.49);

export default {
    deluxeBurgers: deluxeBurgers.map((item:DeluxeBurger) => item ),
    basicBurgers: [
        Hamburger,
        CheeseBurger,
        BaconCheeseBurger
    ]
};
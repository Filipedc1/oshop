import { CartItem } from './cartitem';
import * as moment from 'moment';

export class Order { 
    datePlaced: string;
    shipping: any = {};
    items: CartItem[] = [];
    username: string;

    constructor(public userName: string, public shippingInfo: any, cartItems: CartItem[]) {
        this.datePlaced = moment().format('LLL'); 
        this.items = cartItems;
        this.shipping = shippingInfo;
        this.userName = userName;
    }
}
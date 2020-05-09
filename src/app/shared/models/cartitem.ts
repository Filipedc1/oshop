import { Product } from './product';

export class CartItem { 
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    imageUrl: string;
    categoryId: number;
    shoppingCartId: number;
    _totalPrice: number = 0;

    constructor(init?: Partial<CartItem>) {
        Object.assign(this, init);
        this._totalPrice = this.price * this.quantity
    }

    get totalPrice() {
        this._totalPrice = this.price * this.quantity;
        return this.price * this.quantity;
    }
}
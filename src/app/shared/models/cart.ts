import { IProduct } from 'shared/interfaces/iproduct';
import { ICartItem } from 'shared/interfaces/icartitem';
import { CartItem } from './cartitem';

export class Cart { 
    shoppingCartId: number;
    dateCreatedUtc: string;
    shoppingCartItems: CartItem[] = [];

    constructor(c: Cart) {
        this.shoppingCartId = c.shoppingCartId;
        this.dateCreatedUtc = c.dateCreatedUtc;

        for (let it of c.shoppingCartItems)
            this.shoppingCartItems.push(new CartItem({...it}));
    }

    get totalItemsCount() {
        let count = 0;
        for (let item of this.shoppingCartItems)
            count += this.shoppingCartItems.find(x => x.productId === item.productId).quantity;
        return count;
    }
    
    get totalPrice() {
        let sum = 0;
        for (let item of this.shoppingCartItems)
            sum += item._totalPrice;
        return sum;
    }

    getQuantity(product: IProduct) {
        let item = this.shoppingCartItems.find(x => x.productId === product.productId);
        return item ? item.quantity : 0;
    }
}
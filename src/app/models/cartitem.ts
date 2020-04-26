export class CartItem { 
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    imageUrl: string;
    categoryId: number;
    shoppingCartId: number;
    _totalPrice: number = 0;

    constructor(c?: CartItem) {
        this.productId = c.productId;
        this.productName = c.productName;
        this.price = c.price;
        this.quantity = c.quantity;
        this.imageUrl = c.imageUrl;
        this.categoryId = c.categoryId;
        this.shoppingCartId = c.shoppingCartId;

        this._totalPrice = this.price * this.quantity
    }

    // get totalPrice() {
    //     console.log('test');
    //     return this.price * this.quantity;
    // }
}
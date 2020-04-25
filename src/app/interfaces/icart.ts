import { ICartItem } from './icartitem';

export interface ICart { 
    shoppingCartId: number;
    dateCreatedUtc: string;
    shoppingCartItems: ICartItem[];
}
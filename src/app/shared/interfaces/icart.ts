import { ICartItem } from 'shared/interfaces/icartitem';

export interface ICart { 
    shoppingCartId: number;
    dateCreatedUtc: string;
    shoppingCartItems: ICartItem[];
}
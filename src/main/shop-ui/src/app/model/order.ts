import { Customer } from './customer';
import { CartItem } from './cart-item';

export class Order{
    id: number;
    customer: Customer;
    items: CartItem[];
}
import { Customer } from './customer';
import { CartItem } from './cart-item';

export class OrderRequest{
    customer: Customer;
    items: CartItem[];
}
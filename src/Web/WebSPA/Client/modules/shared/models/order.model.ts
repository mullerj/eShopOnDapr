import {IOrderItem} from './orderItem.model';

export interface IOrder {
    email: string;
    city: number;
    street: string;
    state: string;
    country: number;
    zipcode: string;
    cardnumber: string;
    cardexpiration: Date;
    expiration: string;
    cardsecuritynumber: string;
    cardholdername: string;
    cardtypeid: number;
    buyer: string;
    ordernumber: string;
    subtotal: number,
    total: number;
    orderItems: IOrderItem[];
}

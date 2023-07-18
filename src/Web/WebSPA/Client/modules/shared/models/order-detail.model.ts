import { IAddress } from './address.model';
import {IOrderItem} from './orderItem.model';

export interface IOrderDetail {
    orderNumber: number;
    orderStatus: string;
    description: string;
    orderDate: Date;
    subtotal: number;
    total: number;
    orderItems: IOrderItem[];
    address: IAddress;
}

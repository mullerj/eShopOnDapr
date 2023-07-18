import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { IOrderDetail } from '../../shared/models/order-detail.model';
import { ActivatedRoute } from '@angular/router';
import { IOrderItem } from '../../shared/models/orderItem.model';
import { ConfigurationService } from '../../shared/services/configuration.service';

@Component({
    selector: 'esh-orders_detail .esh-orders_detail .mb-5',
    styleUrls: ['./orders-detail.component.scss'],
    templateUrl: './orders-detail.component.html'
})
export class OrdersDetailComponent implements OnInit {
    public order: IOrderDetail = <IOrderDetail>{};

    constructor(private service: OrdersService, private configurationService: ConfigurationService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getOrder(id);
        });
    }

    getOrder(id: number) {
        this.service.getOrder(id).subscribe(order => {
            this.order = order;
            console.log('order retrieved: ' + order.orderNumber);
            console.log(this.order);
        });
    }

    getTotal(): number {
        if (this.order == undefined || this.order.orderItems == undefined) {
            return 0;
        }
        return this.order.orderItems.reduce((total, orderItem) => total + (orderItem.units * orderItem.unitPrice), 0);
    }

    public getPictureUrl(orderItem: IOrderItem) {
        return `${this.configurationService.serverSettings.purchaseUrl}/c/pics/${orderItem.pictureFileName}`;
    }
}
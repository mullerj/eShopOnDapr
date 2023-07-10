import {ICatalogItem} from './catalogItem.model';

export interface ICatalog {
    pageIndex: number;
    items: ICatalogItem[];
    pageSize: number;
    count: number;
}

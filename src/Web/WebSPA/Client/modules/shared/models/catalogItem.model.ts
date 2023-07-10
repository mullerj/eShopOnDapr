export interface ICatalogItem {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureFileName: string;
    catalogBrandId: number;
    catalogBrand: string;
    catalogTypeId: number;
    catalogType: string;
    units: number;
}

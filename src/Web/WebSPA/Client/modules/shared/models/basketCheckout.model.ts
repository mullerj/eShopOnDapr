export interface IBasketCheckout {
    useremail: string;
    city: number;
    street: string;
    state: string;
    country: number;
    cardnumber: string;
    cardexpirationdate: Date;
    cardsecuritycode: string;
    cardholdername: string;
}
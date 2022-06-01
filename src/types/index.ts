export interface Product {
    name: string;
    _id: string;
    category: string;
    cost: number;
    img: {
        hdUrl: string;
        url: string;
    }
}

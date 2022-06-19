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

export interface User {
    createDate: string
    name: string
    points: number
    redeemHistory: []
    __v: number
    _id: string
}

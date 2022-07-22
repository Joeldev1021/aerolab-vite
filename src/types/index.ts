export interface Product {
    name: string;
    _id: string;
    productId?: string;
    category: string;
    cost: number;
    createDate?: number;
    img: {
        hdUrl: string;
        url: string;
    }
}

export interface User {
    createDate: string
    name: string
    points: number
    redeemHistory: Product[]
    __v: number
    _id: string
}

export interface ProductState {
    products: Product[]
    productsFilter: Product[]
}

export interface UserState {
    user: User
    loading: boolean
}

export interface HistoryRedeemState {
    historyRedeems: Product[]
    isLoading:boolean
    isError:boolean
}

export interface optionDate {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
}

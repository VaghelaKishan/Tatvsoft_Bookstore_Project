import { BookModel } from "./BookModel";

export class CartModel {
 id?: number;
 userId!: number;
 bookId!: number;
 quantity!: number;
}

export class CartList {
 id!: number;
 userId!: number;
 book!: BookModel;
 quantity!: number;
 name!: string;
 price!: number;
}

export class GetCart {
 results!: CartList[];
 totalresults!: number;
}

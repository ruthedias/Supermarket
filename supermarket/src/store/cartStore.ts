import { action, makeObservable, observable } from "mobx"
import { Product } from "../types/product";

class CartStoreMbx {
    cartItems = observable.array<{product: Product; quantity: number}>([]);

    constructor(){
        makeObservable(this, {
            cartItems: observable,
            addItem: action,
            removeUndItem: action,
            removeItemCompletely: action,
            getTotal: action,
        });
    }
    addItem(product: Product){
        const existingItem = this.cartItems.find(item => item.product.id === product.id);
        if (existingItem){
            existingItem.quantity += 1;
        } else {
            this.cartItems.push({ product, quantity: 1});
        } 
    }
    removeUndItem(product: Product){
        const existingItem = this.cartItems.find((item) => item.product.id === product.id);
        if(existingItem){
            existingItem.quantity -= 1;
            if(existingItem.quantity === 0){
                this.cartItems.remove(existingItem);
            }
        }
    }
    removeItemCompletely(product: Product){
        const existingItem = this.cartItems.find((item) => item.product.id === product.id);
        if(existingItem){
            this.cartItems.remove(existingItem);
        }
    }
    getTotal(){
        return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
    
};

let singleton: CartStoreMbx | null = null;

export const CartStore = () => {
    if (singleton === null) {
        singleton = new CartStoreMbx();
    }
    return singleton;
}
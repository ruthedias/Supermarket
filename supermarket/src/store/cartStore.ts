import { action, makeObservable, observable } from "mobx"
import { Product } from "../types/product";

class CartStoreMbx {
    cartItems = observable.array<{product: Product; quantity: number}>([]); // Lista observável dos itens do carrinho

    constructor(){
        makeObservable(this, {
            cartItems: observable, //Define a lista de itens como observável
            //marca as funções como ações
            addItem: action,
            removeUndItem: action,
            removeItemCompletely: action,
            getTotal: action,
        });
    }

    //função para adicionar um item ao carrinnho ou aumentar sua quantidade
    addItem(product: Product){
        const existingItem = this.cartItems.find(item => item.product.id === product.id);
        if (existingItem){ //Verifica se o item já esta no carrinho
            existingItem.quantity += 1; //Incrementa a quantidade
        } else {
            this.cartItems.push({ product, quantity: 1}); //adiciona o item
        } 
    }

    //Reduz a quantidade do item ou remove se a quantidade for 0
    removeUndItem(product: Product){
        const existingItem = this.cartItems.find((item) => item.product.id === product.id);
        if(existingItem){
            existingItem.quantity -= 1; //Diminui a quantidade
            if(existingItem.quantity === 0){
                this.cartItems.remove(existingItem); //remove
            }
        }
    }

    // função para remover completamente o item do carrinho
    removeItemCompletely(product: Product){
        const existingItem = this.cartItems.find((item) => item.product.id === product.id);
        if(existingItem){
            this.cartItems.remove(existingItem);//remove o item
        }
    }
    //Calcula o valor total dos itens do carrinho
    getTotal(){
        return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
    
};

//Implementa a função singleton para garantir que o carrinho seja uma única instância
let singleton: CartStoreMbx | null = null;

export const CartStore = () => {
    if (singleton === null) {
        singleton = new CartStoreMbx(); // cria a instância única
    }
    return singleton; // Retorna a instância do carrinho
}
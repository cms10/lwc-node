import { LightningElement, api } from "lwc";

export default class ProductItem extends LightningElement {
    
    @api product;

    constructor() {
        super()
    }
    
    addProduct(product) {
        this.product = product;
    }
    
    getProduct() {
        return this.product;
    }

    addToCart(e) {
        e.preventDefault();
        const product = this.getProduct();
        const addToCartEvent = new CustomEvent('addtocart', {
            detail: {
                product: product
            }
        });
        this.dispatchEvent(addToCartEvent);
    }
    
}

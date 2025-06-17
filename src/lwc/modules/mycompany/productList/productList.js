import { LightningElement, track } from "lwc";

export default class ProductList extends LightningElement {

    products = [
        { id: 1, name: "Product 1", price: 100, description: "Description of Product 1" },
        { id: 2, name: "Product 2", price: 200, description: "Description of Product 1" },
        { id: 3, name: "Product 3", price: 300, description: "Description of Product 1" },
    ];

    @track cart = [];

    constructor() {
        super()
    }
    
    addProduct(product) {
        this.products.push(product);
    }
    
    getProducts() {
        return this.products;
    }

    handleAddToCart(e) {
        let productId = e.detail.product.id;
        this.cart.push(productId)
    }

    get cartItems() {
        return this.cart.length;
    }
    
}
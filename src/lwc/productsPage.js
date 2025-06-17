import '@lwc/synthetic-shadow';

import { createElement } from "lwc";
import ProductList from "mycompany/productList";

const elm = createElement("mycompany-product-list", { is: ProductList });
document.body.appendChild(elm);
import '@lwc/synthetic-shadow';

import { createElement } from 'lwc';
import App from 'mycompany/app';

const elm = createElement('mycompany-app', { is: App });
document.body.appendChild(elm);

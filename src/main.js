import $ from "jquery";
import image from './assets/kitty.png';

import './main.css';

const picture = document.createElement('img');

picture.setAttribute('src', image);
document.querySelector('body').appendChild(picture);
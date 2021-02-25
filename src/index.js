import '@shoelace-style/shoelace/dist/themes/base.css';
import { setBasePath, SlButton, SlIcon, SlInput, SlRating } from '@shoelace-style/shoelace';

// Set the pase path to the folder you copied Shoelace's assets to
setBasePath('/dist/shoelace');

SlButton.register();
SlIcon.register();
SlInput.register();
SlRating.register();

// <sl-button>, <sl-icon>, <sl-input>, and <sl-rating> are ready to use!

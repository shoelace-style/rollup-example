// Default stylesheet
import '@shoelace-style/shoelace/dist/shoelace.css';

// For tree shaking to work, import components and utilities from their own module
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button';
import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input';
import SlRating from '@shoelace-style/shoelace/dist/components/rating/rating';
//
// ...and any other components you want
//

// Set the pase path to the folder you copied Shoelace's assets to
setBasePath('/assets');

// <sl-button>, <sl-icon>, <sl-input>, and <sl-rating> are ready to use!
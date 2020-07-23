import '@shoelace-style/shoelace/dist/shoelace/shoelace.css';
import { defineCustomElements, setAssetPath } from '@shoelace-style/shoelace/dist/custom-elements';

setAssetPath(document.currentScript.src);
defineCustomElements();

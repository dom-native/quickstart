import { BaseHTMLElement, customElement, html } from 'dom-native';

@customElement('v-main')
class MainView extends BaseHTMLElement {

	// Note: called on once on first HTMLElement connectedCallback
	//       Good place to innitialize content for non shadowdom elements
	init() {

		this.append(html`<div class="hello-box"><c-ico href="svg/sprite.svg#ico-check"></c-ico>Hello <strong>World</strong></div>`);

		// same as:
		// const tmpl = document.createElement('template');
		// tmpl.innerHTML = `<div class="hello-box">Hello <strong>World</strong></div>`;
		// this.append(tmpl.content);

		// equivalent of:  
		// this.innerHTML = `<div class="hello-box">Hello <strong>World</strong></div>`;

	}


}
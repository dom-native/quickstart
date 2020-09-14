import { BaseHTMLElement, customElement, html } from 'dom-native';

@customElement('v-main')
class MainView extends BaseHTMLElement {

	// Note: called on once on first HTMLElement connectedCallback
	//       Good place to innitialize content for non shadowdom elements
	init() {

		this.append(html`<div class="hello-box">Hello <strong>World</strong></div>`);

		// same as:
		// const tmpl = document.createElement('template');
		// tmpl.innerHTML = `<div class="hello-box">Hello <strong>World</strong></div>`;
		// this.append(tmpl.content);

		// or same as:  
		// this.innerHTML = `<div class="hello-box">Hello <strong>World</strong></div>`;

	}


}
import { BaseHTMLElement, customElement, html } from 'dom-native';

@customElement('v-main')
class MainView extends BaseHTMLElement {

	// Note: called once on frist HTMLElement connectedCallback
	//       Good place to innitialize content for non shadowdom elements
	init() {

		this.append(html`<h2>Hello World from ${this.constructor.name} HTMLElement!</h2>`);

		// same as:
		// const tmpl = document.createElement('template');
		// tmpl.innerHTML = `<h2>Hello World from ${this.constructor.name} HTMLElement!</h2>`;
		// this.append(tmpl.content);

		// or same as:  
		// this.innerHTML = `<h2>Hello World from ${this.constructor.name} HTMLElement!</h2>`;

	}


}
import { BaseHTMLElement, customElement, first, html, onEvent } from 'dom-native';

@customElement('v-main') // same as customElements.define('v-main', IcoElement) 
class MainView extends BaseHTMLElement { // extends native HTMLElement

	#clickCount = 0; // private, transpiled by TypeScript.

	@onEvent('pointerup', '.hello-box')
	onHelloClick(evt: PointerEvent) {
		first(this, '.hello-box strong')!.textContent = `CLICKED ${++this.#clickCount}`;
	}

	init() { // called once on the first connectedCallback

		this.append(html`
			<div class="hello-box">
				<c-ico href="#ico-thumb"></c-ico>
				Hello <strong>World</strong>
			</div>`);

	}

}
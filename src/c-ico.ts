import { adoptStyleSheets, css, customElement, html } from 'dom-native';


const _shadowCss = css`
	:host{
		display: inline-block;
		--fill: var(--clr-txt);
		width: 1rem;
		height: 1rem;
		user-select: none;
	}
	svg{
		fill: var(--fill);
		width: 100%;
		height: 100%;

	}
`

@customElement('c-ico') // same as customElements.define('c-ico', IcoElement) 
class IcoElement extends HTMLElement {

	constructor() {
		super();

		const href = this.getAttribute('href');

		this.attachShadow({ mode: 'open' }).append(html`
			<svg> <use xlink:href="${href}" aria-hidden='true'></use></svg>
		`);


		adoptStyleSheets(this, _shadowCss);
	}

}
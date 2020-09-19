import { adoptStyleSheets, css, customElement, html } from 'dom-native';


const _shadowCss = css`
	:host{
		--fill: var(--clr-txt);

		display: inline-block;
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
	static BASE_URL = '/svg/sprite.svg'

	constructor() {
		super();

		let href = this.getAttribute('href');
		if (href?.startsWith('#')) {
			href = IcoElement.BASE_URL + href;
		}

		this.attachShadow({ mode: 'open' }).append(html`
			<svg> <use xlink:href="${href}" aria-hidden='true'></use></svg>
		`);


		adoptStyleSheets(this, _shadowCss);
	}

}
import { adoptStyleSheets, css, customElement, html } from 'dom-native';


// css`...` is a dom-native shorthand to create a css object containing a style or CSSStyleSheet to be adopted
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

@customElement('c-ico') // dom-native shorthand for customElements.define('c-ico', IcoElement) 
class IcoElement extends HTMLElement {

	constructor() {
		super();

		const href = this.getAttribute('href');

		// html`...` is a dom-native shorthand to create a new document fragment (nothing more, nothing less)
		this.attachShadow({ mode: 'open' }).append(html`
			<svg> <use xlink:href="${href}" aria-hidden='true'></use></svg>
		`);

		// dom-native shorthand for this.shadowRoot.adoptedStyleSheets = [... , _shadowCss.sheet] when supported.
		//            or this.shadowRoot.append(_shadowCss.newStyle)
		adoptStyleSheets(this, _shadowCss);
	}

}




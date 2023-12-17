import { LitElement, html, css } from 'lit'

export class Stack extends LitElement {
	static styles = css`
		:host {
			display: flex;
			gap: var(--lf-stack-gap, 16px);
		}

		:host([direction='horizontal']) {
			flex-direction: row;
		}

		:host([direction='vertical']) {
			flex-direction: column;
		}

		:host([align-items='start']) {
			align-items: start;
		}

		:host([align-items='center']) {
			align-items: center;
		}

		:host([align-items='end']) {
			align-items: end;
		}

		:host([align-items='stretch']) {
			align-items: stretch;
		}

		:host([justify-content='start']) {
			justify-content: start;
		}

		:host([justify-content='end']) {
			justify-content: end;
		}

		:host([wrap]) {
			flex-wrap: wrap;
		}
	`

	static properties = {
		direction: { type: String, reflect: true },
		wrap: { type: Boolean, reflect: true },
		label: { type: String, reflect: true },
		alignItems: {
			attribute: 'align-items',
			type: String,
			reflect: true,
		},
		justifyContent: {
			attribute: 'justify-content',
			type: String,
			reflect: true,
		},
	}

	constructor() {
		super()

		this.direction = 'horizontal'
		this.alignItems = 'start'
		this.justifyContent = 'start'
		this.wrap = false
	}

	connectedCallback() {
		super.connectedCallback()

		if (this.label) {
			this.setAttribute('aria-label', this.label)
		}
	}

	render() {
		return html`<slot />`
	}
}

customElements.define('lf-stack', Stack)

import { LitElement, css, html } from 'lit'

export class Slider extends LitElement {
	static properties = {
		title: { type: String },
		value: { type: Number, reflect: true },
		min: { type: Number },
		max: { type: Number },
		step: { type: Number },
	}

	constructor() {
		super()
		this.title = null
		this.value = 0
		this.min = 0
		this.max = 100
		this.step = 1
	}

	#me = Math.random()

	render() {
		return html`
			${this.title
				? html`<legend for="slider_${this.#me}">${this.title}</legend>`
				: ''}
			<span>
				<input
					@input=${this.#updateValue}
					type="range"
					value=${this.value}
					min=${this.min}
					max=${this.max}
					step=${this.step}
				/>
				<input
					name="slider_${this.#me}"
					@input=${this.#updateValue}
					type="number"
					value=${this.value}
					min=${this.min}
					max=${this.max}
					step=${this.step}
				/>
			</span>
		`
	}
	attributeChangedCallback(a, b, c) {
		console.log(a, b, c)
	}

	#updateValue(e) {
		this.value = Math.max(this.min, Math.min(e.target.value, this.max))
	}

	static styles = css`
		span {
			display: flex;
			align-items: center;
			gap: var(--lf-stack-gap, 1rem);
		}

		input[type='range'] {
			flex: 1 1 100%;
		}

		input[type='number'] {
			-moz-appearance: textfield;
			flex: 0 0 4ch;
			border: none;
			text-align: left;
		}
	`
}

window.customElements.define('lf-slider', Slider)

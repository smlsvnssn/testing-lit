<script>
	export let title = 'Title'
	export let value = 0
	export let min = 0
	export let max = 100
	export let step = 1

	// sanitize
	$: value = Math.max(min, Math.min(value, max))
</script>

<div>
	<legend> {title} </legend>
	<span>
		<input type="range" bind:value {min} {max} {step} />
		<input type="number" bind:value {min} {max} {step} />
	</span>
</div>

<style>
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
</style>

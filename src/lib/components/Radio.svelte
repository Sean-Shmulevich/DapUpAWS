<script lang="ts">
	// based on suggestions from:
	// Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
	// and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/

	//create a type for options
	export let options: string[];
	// export let userSelected = options[0].value;
	export const fontSize = 16;
	export let justify = 'center';
	export let flexDirection = 'column';
	export let inputName: string;

	export let selected: unknown;

	function onChange(event: { currentTarget: { value: unknown } }) {
		selected = event.currentTarget.value;
	}
</script>

<div class="flex {flexDirection !== 'row' ? 'flex-col' : 'flex-row '}">
	{#each options as option}
		<label class="flex items-center w-full {justify === 'left' ? '' : ' justify-center'}">
			<input
				class="form-radio h-4 text-blue-500"
				checked={selected === option}
				on:change={onChange}
				type="radio"
				name={inputName}
				value={option}
			/>
			<span class="ml-3">{option}</span>
		</label>
	{/each}
</div>

<style style="postcss">
</style>

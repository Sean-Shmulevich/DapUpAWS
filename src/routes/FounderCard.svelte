<script lang="ts">
	// your script goes here
	export let textActive: boolean;

	export let founderName: string;

	let founderMap = {
		Ayden: {
			name: 'Ayden Owens-Delerme, MBA',
			title: 'Founder & Chief Executive Officer ',
			subtitle: '3x NCAA Champion',
			img: 'https://slimecars.com/assets/ayden.png',
			bio: `Ayden is a former Arkansas student-athlete, 3x NCAA champion, and a World Championship
					competitor in track and field with a highly monetized NIL portfolio. He possesses a
					Bachelor's degree from the University of Michigan and a Master’s in Business
					Administration with a focus in Entrepreneurship from the Sam M. Walton College of Business
					at the University of Arkansas. Leveraging his unique experience in college athletics
					before and after NIL’s legalization, Ayden was driven to create DapUp to eliminate the friction
					and ambiguity around brand-athlete partnerships. Ayden’s passion lies at the intersection of
					business and sport, where two industries join to drive the world forward. He is also invested
					in social justice and promoting sports opportunities to underserved communities by providing
					coaching services for youth athletes. Ayden’s mission is to create an equitable and more accessible
					market for NIL allowing all businesses and athletes to benefit.`
		},
		Quintin: {
			name: 'Quintin Smith',
			title: 'Chief Sales Officer',
			img: 'https://slimecars.com/assets/quintin.png',
			bio: `Quintin is an entrepreneur, former athlete, and a sales professional at SAE International.
					He holds a breadth of experience in understanding the needs of companies worldwide as he
					ensures they are suited with up-to-date standards for business operation. As a
					small business operator and founder of an apparel company, Quintin was drawn to DapUp for the
					impact it has on helping brands like his reach the right audience. His objective is to promote
					the growth of businesses at all levels through the DapUp platform.`
		}
	};

	//	console.log(founderName);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="p-2 mb-5 mx-5 text-center bg-transparent text-red-900 rounded-xl border border-white w-[80%] md:w-[40%] lg:w-[33.33%]"
	on:click|preventDefault={() => {
		textActive = !textActive;
	}}
>
	<div class="h-[406px] max-h-[406px] flex items-center justify-center overflow-hidden">
		{#if !textActive}
			<img src={founderMap[founderName].img} alt="founder Ayden Owens-Delerme" />
		{:else}
			<p class="h-[406px] text-left p-3 text-gray-200 overflow-y-auto">
				{founderMap[founderName].bio}
			</p>
		{/if}
	</div>
	<p class="text-lg text-white">{founderMap[founderName].name}</p>
	<p class="text-sm text-white">{founderMap[founderName].title}</p>
	{#if founderMap[founderName].subtitle}
		<p class="text-sm text-white">{founderMap[founderName].subtitle}</p>
	{:else}
		<p class="text-sm text-white">&nbsp;</p>
	{/if}
	<p
		class="text-[15px] hidden md:block text-right text-gray-500"
		style="transform: translateY(9px)"
	>
		click for more info >
	</p>
	<p
		class="text-[15px] lg:hidden md:hidden text-right text-gray-500"
		style="transform: translateY(9px)"
	>
		tap for more info
	</p>
</div>

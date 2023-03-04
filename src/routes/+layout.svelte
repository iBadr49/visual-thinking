<script>
	import { Footer, Branding, Wrapper, Nav } from '@fdnd/components';

	const nav = {
		Menu: {
			Home: '/',
			Docs: '/docs'
		}
	};
</script>

<Branding>
	<Wrapper>
		<Nav data={nav} />

		<slot />

	</Wrapper>
</Branding>

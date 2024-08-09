import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		{
			name: "astro-material-design",
			hooks: {
				"astro:config:setup": () => {}
			}
		}
	]
});

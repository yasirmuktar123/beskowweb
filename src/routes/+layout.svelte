<a href="{base}/">Home</a>
<a href="{base}/photoapp">Photoapp</a>
<a href="{base}/register">Register</a>
<a href="{base}/login">Login</a>
<a href="{base}/about">About</a>
<a href="{base}/shoppinglist">shoppinglist</a>
<a href="{base}/memory">memory</a>
<a href="{base}/chat">chat</a>
<a href="{base}/search">search</a>

<script>
	import '../app.postcss';
	import { base } from '$app/paths';
	
	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<slot />

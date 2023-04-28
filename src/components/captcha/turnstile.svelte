<script lang="ts">
  import { onMount } from 'svelte';
  import { loadScript } from '../../utils/load-script';
  import { v4 as uuidv4 } from 'uuid';

  export let siteKey: string;

  onMount(() => {
    loadScript({
      src: 'https://challenges.cloudflare.com/turnstile/v0/api.js',
      id: uuidv4(),
      async: true,
      defer: true,
    });
  });
</script>

<div class="cf-turnstile" data-sitekey={siteKey} />

<script lang="ts">
  export let as: 'p' | 'span' = 'p';
  export let color: string = '';
  export let size: string = 'text-lg';
  export { className as class };
</script>

<svelte:element this={as} class={`${size} ${color}`}>
  <slot />
</svelte:element>

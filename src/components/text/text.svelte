<script lang='ts'>
  export let as: 'p' | 'span' = 'p';
  export let color: string = 'text-gray-900 dark:text-gray-300';
  export let size: string = 'text-lg';
  export { className as class };
</script>

<svelte:element class={`${size} ${color}`} this={as}>
  <slot />
</svelte:element>
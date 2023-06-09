<script lang="ts">
  export let icon: any;
  export let size: 'sm' | 'md' | 'lg' | 'xl' | number = 'lg';

  const sizes = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  };

  const newSize = typeof size === 'number' ? size : sizes[size];
</script>

<svelte:component this={icon} size={newSize} />

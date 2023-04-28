<script lang="ts">
  export let icon: any;
  export let size: 'sm' | 'md' | 'lg' | 'xl';

  const sizes = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  };
</script>

<svelte:component this={icon} size={sizes[size]} />

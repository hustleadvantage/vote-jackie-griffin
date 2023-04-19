<script lang="ts">
  export let spacing: string = 'grid gap-5';
</script>

<div class={`${spacing}`}>
  <slot />
</div>

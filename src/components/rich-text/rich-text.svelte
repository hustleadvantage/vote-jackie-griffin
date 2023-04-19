<script lang='ts'>
  export let value: string;
</script>

<div class='rich-text'>
  {@html value}
</div>

<style lang='scss'>
  .rich-text > :global(p) {
    margin-bottom: 1rem;
  }
</style>
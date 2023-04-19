<script lang='ts'>
  export let forHtml: string;
  export { forHtml as for };
  export let required: boolean = false;
</script>

<label for={forHtml}>
  <div class='flex items-center gap-2'>
    <slot />
    {#if !required}
      (optional)
    {/if}
  </div>
</label>
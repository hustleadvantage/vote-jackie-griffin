<script lang="ts">
  export let forHtml: string;
  export { forHtml as for };
  export let optional: boolean = false;
</script>

<label for={forHtml}>
  <div class="flex items-center gap-1">
    <slot />
    {#if optional}
      <span class="text-neutral-500">- optional</span>
    {/if}
  </div>
</label>

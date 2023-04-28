<script lang="ts">
  export let name: string;
  export let optional: boolean = false;
</script>

<textarea
  {name}
  class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
  rows="4"
  required={!optional}
/>

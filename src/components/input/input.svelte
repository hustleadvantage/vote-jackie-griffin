<script lang="ts">
  export let name: string;
  export let optional: boolean = false;
  export let type: 'email' | 'text';
</script>

<input
  {type}
  {name}
  required={!optional}
  class="py-3 px-4 block w-full border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500"
/>

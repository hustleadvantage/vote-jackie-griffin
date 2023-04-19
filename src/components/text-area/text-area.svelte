<script lang='ts'>
  export let name: string;
  export let required: boolean = false;
</script>


<textarea {name} class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200" rows="4" {required}></textarea>
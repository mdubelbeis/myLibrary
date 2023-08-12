<script lang="ts">
    import type { LayoutData } from './$types';
    import '$lib/app.css';    
    export let data: LayoutData;
</script>

<header class="bg-oxford-blue flex justify-between text-silver-lake-blue p-3 shadow-lg">
  <div>
    myLibrary
  </div>
  <nav class="mr-2">
    <ul class="flex gap-2">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/library">Library</a>
      </li>
    </ul>
  </nav>
</header>

<slot />

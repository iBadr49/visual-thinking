<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  export let data;

  let filter = $page.url.searchParams.getAll("categorie") || [];

  function updateFilter(event) {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      filter = [...filter, checkboxValue];
    } else {
      filter = filter.filter((category) => category !== checkboxValue);
    }
    const params = new URLSearchParams();
    filter.forEach((cat) => params.append("categorie", cat));
    window.history.pushState({}, "", `${window.location.pathname}?${params}`);
    location.reload();
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.target.checked = !event.target.checked;
      updateFilter(event);
    }
  }
 
</script>

<section>
  <h2 id="methodes">Filter op categorie</h2>

  <form>
    {#each data.categories as category}
      <label for={category.slug}>
        <input
          type="checkbox"
          id={category.slug}
          value={category.slug}
          checked={filter.includes(category.slug)}
          on:change={updateFilter}
          on:keydown={handleKeyDown}
          tabindex="0"
        />
        {category.title}
      </label>
    {/each}
  </form>
</section>

<style>


</style>
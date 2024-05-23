<script>
  import { page } from "$app/stores"
  export let data

  let filter = $page.url.searchParams.getAll("categorie") || []
</script>

<section>
  <h2 id="methodes">Filter op categorie</h2>

  <form method="GET" action="/tekenmethodes#methodes">
    {#each data.categories as category}
      <label for={category.slug}>
        <input
          type="checkbox"
          id={category.slug}
          value={category.slug}
          checked={filter.includes(category.slug)}
          name="categorie"
          tabindex="0"
        />
        {category.title}
      </label>
    {/each}
    <button type="submit">
      Pas filters toe
    </button>
  </form>
</section>

<style>
  h2 {
    font-size: 1em;
  }

#methodes {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

section form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

 label {
  display: flex;
  align-items: center;
  margin: 5px 0;
}

section input[type="checkbox"] {
  margin-right: 8px;
}

section button {
  background-color: var(--vtYellow);
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

section button:hover {
  background-color: var(--vtYellow-80);
}






</style>


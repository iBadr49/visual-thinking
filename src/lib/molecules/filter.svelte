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

  onMount(() => {
    let showJs = document.querySelector("section");

    showJs.classList.add("js-active");
  });
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

<span class="js-active"></span>

<style>
  section {
    display: none;
  }

  .js-active {
    display: block;
  }

  h2 {
    font-size: 1em;
  }

  /* CSS voor de form */
  section form {
    display: flex;
    gap: 0.3rem;
    overflow-x: auto;
  }

  label input {
    margin-right: 5px;
  }

  /* CSS voor de form label */
  section form label {
    display: flex;
    white-space: nowrap;
    padding: 7px;
    border: 1px solid transparent;
    align-items: center;
    transition: 0.25s;
    cursor: pointer;
  }

  section form label:hover,
  section form label:focus-visible,
  section form label:active {
    border-color: var(--vtGrey);
    background: var(--vtGrey-10);
  }

  @media screen and (min-width: 36em) {
    section form {
      flex-wrap: wrap;
    }
  }
</style>

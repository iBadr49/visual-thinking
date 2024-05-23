<script>
  export let data;
</script>

<section class="grid">
  <h2>Alle methodes <small>({data.length})</small></h2>
  {#if data && data.length > 0}
    {#each data as method, index}
      <article class="methods-container" data-index={index}>
        <a href="/tekenmethodes/{method.slug}">
          {#if method.template && method.template.url}
            <picture>
              <img
                src={method.template.url.replace(":webp", ":jpg")}
                alt={"Voorbeeld van " + method.title}
                class={method.categories[0].title.replaceAll(" ", "-")}
              />
            </picture>
          {:else}
            <img
              class={method.categories[0].title.replaceAll(" ", "-")}
              src="/placeholder.webp"
              alt="Placeholder"
            />
          {/if}
          <h3>{method.title}</h3>
        </a>
      </article>
    {/each}
  {/if}
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1rem 0;
    text-wrap: balance;
    hyphens: auto;
  }

  h2 {
    grid-column: 1 / -1;
    display:flex;
    align-items:baseline;
    gap:.5rem;
  }
  h2 small {
    font-size: 1rem;
    translate: 0 -3px
  }
  h3 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-weight: 400;
    margin: 0;
    width: 100%;
    padding: 0 0.5em ;
  }

  a {
    text-decoration: none;
    color: black;
    margin-bottom: 5px;
  }

  article {
    display: flex;
    flex-direction: column;
    transition: 0.25s;
    border: 1px solid #ccc;
  }

  article:hover,
  article:focus-visible {
    border-color: var(--vtYellow);
    outline: none;
  }

  article a {
    display: block;
  }

  article picture {
    display: block;
  }

  article img {
    width: 100%;
  }

  article picture img {
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    object-fit: contain;
  }

  @media screen and (min-width: 36em) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 60em) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

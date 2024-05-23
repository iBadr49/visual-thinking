<script>
  import Breadcrumb from "$lib/atoms/breadcrumb.svelte";
  import MethodsHeader from "$lib/organisms/methodsHeader.svelte";

  export let data;
</script>

<Breadcrumb
  titel="Overzicht"
  url="/tekenmethodes"
  bgc="var(--vtYellow)"
/>

<MethodsHeader {data} />

<section class="grid">
  <div class="tags-container">
   
    <div class="tags-group">
        <img class="icon" src="/images/category.svg" alt="icon" />
        {#each data.methods as method}
          {#each method.categories as category}
            <p class="tag">{@html category.title}</p>
          {/each}
        {/each}
    </div>

    <div class="tags-group">
      <img class="icon" src="/images/materials.svg" alt="icon" />
      {#each data.methods as method}
        <p class="tag">{method.material}</p>
      {/each}
    </div>

    <div class="tags-group">
      <img class="icon" src="/images/duration.svg" alt="icon" />
      {#each data.methods as method}
        <p class="tag">{method.duration}</p>
      {/each}
    </div>

    <div class="tags-group">
      <img class="icon" src="/images/author.svg" alt="icon" />
      <p class="tag">Charley Muhren</p>
    </div>
  </div>
  

  <div class="steps">
    {#each data.methods as method}
      {#each method.steps as step}
        <details class="accordion-item">
          <summary class="step-title">{step.title}</summary>
          <div class="accordion-content">
            {#if step.visual[0]}
              <img src={step.visual[0].url} alt="image_voorbeeld" />
            {/if}
            {#if typeof step.description === "object"}
              <p>{@html step.description.html}</p>
            {:else}
              <p>{step.description}</p>
            {/if}
          </div>
        </details>
      {/each}
    {/each}
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 20px;
    max-width: 80%;
    margin: 0 auto;
    width: 100%;
  }

  .tags-container {
    display: flex;
    flex-direction: column;
  }

  .tags-group {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }


  .tag {
    background-color: var(--vtYellow-80);
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.1rem 0.4rem;
    margin-left: 0.8rem;
    max-width: fit-content;
  }

  .icon {
    width: 50px;
    height: 55px;
  }

  .accordion-item {
    margin-bottom: 5px;
    width: 100%;
    overflow: hidden;
  }

  .step-title {
    font-family: var(--vtPrimaryFont);
    background-color: var(--vtDarkBlue);
    color: var(--vtWhite);
    padding: 10px;
    cursor: pointer;
    user-select: none;
  }

  .step-title:hover {
    background-color: var(--vtYellow-80);
    color: black;
  }

  .accordion-content {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
  }

  .accordion-content img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 74em) {
    .grid {
      grid-template-columns: 1fr 1fr;
      max-width: 80%;
    }


  }
</style>


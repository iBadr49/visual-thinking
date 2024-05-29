<script>
  export let data;
</script>

<div class="tags-container">

    <!-- Categories Section -->
    <div class="tags-group">
      <img class="icon" src="/images/category.svg" alt="icon-category" />
      <div class="tags">
        {#each data.methods as method}
          {#each method.categories as category}
            <p class="tag">{category.title}</p>
          {/each}
        {/each}
      </div>
    </div>
  
    <!-- Materials Section -->
    <div class="tags-group">
      <img class="icon" src="/images/materials.svg" alt="icon-material" />
      <div class="tags">
        {#each data.methods[0].material as material}
          <p>{material}</p>
        {/each}
      </div>
    </div>
  
    <!-- Duration Section -->
    <div class="tags-group">
      <img class="icon" src="/images/duration.svg" alt="icon-duration" />
      <div class="tags">
        {#each data.methods as method}
          <p>{method.duration}</p>
        {/each}
      </div>
    </div>
  
    <!-- Author Section -->
    <div class="tags-group">
    
      <img class="icon" src="/images/author.svg" alt="icon-author" />
      <div class="tags">
        <p>Charley Muhren</p>
      </div>
    </div>
</div>
  
<style>
  .tags-container {
    display: flex;
    flex-direction: column;
  }

  .tags-group {
    display: flex;
    margin-bottom: 10px;
  }

  .tags p {
    background-color: var(--vtYellow-80);
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.1rem 0.4rem;
    margin-left: 0.8rem;
    margin-top: 0.7rem;
    max-width: fit-content;
    display: inline-flex;
  }

  .icon {
    width: 50px;
    height: 55px;
  }

  @media (min-width: 1186px) {
    .tags-container {
    
    position: -webkit-sticky; /* Voor Safari */
    position: sticky;
    top: 0;
    z-index: 1; 
  }
  }
</style>

<script>
  export let data;
  // Functie om underscores te verwijderen en de eerste letter van het eerste woord hoofdletter te maken
  function formatMaterial(material) {
    // Verwijder underscores
    let formatted = material.replace(/_/g, " ");
    // Zet de eerste letter van de string in hoofdletters
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }
</script>

<ul class="tags-container">
  <!-- Categories Section -->
  <li class="tags-group">
    <svg
      width="50"
      height="55"
      viewBox="0 0 32 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="responsive-svg"
    >
      <path
        d="M0 9.25V27.75L15.6 37L31.2 27.75V9.25L15.6 0L0 9.25Z"
        fill="#FBC5B4"
      />
      <path
        d="M25.0001 17.0001H23.9C23.3999 13.4 20.6 10.4999 16.9999 10.1V8.99995C16.9999 8.39995 16.6 8 16 8C15.4 8 15.0001 8.39995 15.0001 8.99995V10.1C11.4 10.5 8.49987 13.4 8.10001 17.0001H6.99995C6.39995 17.0001 6 17.4 6 18C6 18.6 6.39995 18.9999 6.99995 18.9999H8.10001C8.60007 22.6 11.4 25.5001 15.0001 25.9V27.0001C15.0001 27.6001 15.4 28 16 28C16.6 28 16.9999 27.6001 16.9999 27.0001V25.9C20.6 25.3999 23.5001 22.6 23.9 18.9999H25.0001C25.6001 18.9999 26 18.6 26 18C26 17.4 25.6001 17.0001 25.0001 17.0001ZM21.9001 17.0001H18.8001C18.5001 16.2 17.8002 15.5 17.0001 15.2L17 12.0999C19.5001 12.5 21.5 14.4999 21.9003 17.0002L21.9001 17.0001ZM15.9999 18.9999C15.3999 18.9999 15 18.6 15 18C15 17.4 15.3999 17.0001 15.9999 17.0001C16.5999 17.0001 16.9999 17.4 16.9999 18C16.9999 18.6 16.5999 18.9999 15.9999 18.9999ZM15 12.0999V15.1999C14.1999 15.4999 13.5 16.1998 13.2 16.9999L10.0998 17C10.4999 14.4999 12.4998 12.5 15.0001 12.0997L15 12.0999ZM10.0997 18.9999H13.1996C13.4996 19.8 14.1996 20.5 14.9996 20.8V23.8999C12.4997 23.5 10.4996 21.5001 10.0997 19L10.0997 18.9999ZM16.9997 23.9003V20.8003C17.7998 20.5003 18.4997 19.8004 18.7997 19.0003H21.8997C21.4997 21.5002 19.4998 23.5003 16.9998 23.9002L16.9997 23.9003Z"
        fill="#090940"
      />
    </svg>
    <div class="span-box">
      {#each data.methods as method}
        {#each method.categories as category}
          <p>{category.title}</p>
        {/each}
      {/each}
    </div>
  </li>
  <!-- Materials Section -->
  <li class="tags-group">
    <svg
      width="50"
      height="55"
      viewBox="0 0 32 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9.25V27.75L15.6 37L31.2 27.75V9.25L15.6 0L0 9.25Z"
        fill="#FBC5B4"
      />
      <path
        d="M18.33 22.1243C18.33 22.9052 17.6725 23.5627 16.8916 23.5627H14.8365C14.0557 23.5627 13.3981 22.9052 13.3981 22.1243L13.398 21.0967H6.00024V24.3846C6.00024 25.0833 6.53454 25.6176 7.23329 25.6176H24.4953C25.1528 25.6176 25.7283 25.0833 25.7283 24.3846V21.0967H18.3302L18.33 22.1243Z"
        fill="#090940"
      />
      <path
        d="M24.4948 12.4661H19.1518V11.233C19.1518 10.5343 18.5764 10 17.9188 10H13.8089C13.48 10 13.1513 10.1233 12.9457 10.3699C12.6993 10.6166 12.576 10.9043 12.576 11.233V12.4661H7.23304C6.5343 12.4661 6 13.0004 6 13.6991V20.2751H13.3981V19.2477C13.3981 18.4668 14.0557 17.8093 14.8365 17.8093H16.8916C17.6725 17.8093 18.33 18.4668 18.33 19.2477V20.2751H25.7281L25.728 13.6991C25.728 13.0004 25.1525 12.4661 24.4949 12.4661L24.4948 12.4661ZM13.3978 11.233C13.3978 11.1098 13.439 11.0276 13.5211 10.9453C13.6034 10.8632 13.6855 10.822 13.8088 10.822H17.9187C18.1241 10.822 18.3297 11.0275 18.3297 11.2331V12.4661H13.3978L13.3978 11.233Z"
        fill="#090940"
      />
      <path
        d="M16.8915 22.7408C17.2203 22.7408 17.5079 22.4531 17.5079 22.1244L17.508 21.0968V19.2473C17.508 18.9184 17.2203 18.6309 16.8916 18.6309H14.8365C14.5077 18.6309 14.2201 18.9186 14.2201 19.2473L14.22 20.2749V22.1244C14.22 22.4532 14.5077 22.7408 14.8364 22.7408H16.8915Z"
        fill="#090940"
      />
    </svg>

    {#each data.methods[0].material as material}
      <div class="span-box">
        <p>{formatMaterial(material)}</p>
      </div>
    {/each}
  </li>
  <!-- Duration Section -->
  <li class="tags-group">
    <svg
      width="50"
      height="55"
      viewBox="0 0 32 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9.25V27.75L15.6 37L31.2 27.75V9.25L15.6 0L0 9.25Z"
        fill="#FBC5B4"
      />
      <path
        d="M15.834 10C13.4911 10 11.244 10.9308 9.58742 12.5874C7.93077 14.2442 7 16.4911 7 18.834C7 21.1768 7.93077 23.424 9.58742 25.0805C11.2442 26.7372 13.4911 27.668 15.834 27.668C18.1768 27.668 20.424 26.7372 22.0805 25.0805C23.7372 23.4238 24.668 21.1768 24.668 18.834C24.6651 16.4919 23.7336 14.2464 22.0774 12.5905C20.4213 10.9344 18.1758 10.0028 15.834 10ZM15.834 26.0619C13.9171 26.0619 12.0786 25.3004 10.7232 23.9449C9.36773 22.5895 8.60623 20.751 8.60623 18.8342C8.60623 16.9173 9.36773 15.0788 10.7232 13.7234C12.0787 12.3679 13.9171 11.6064 15.834 11.6064C17.7508 11.6064 19.5894 12.3679 20.9447 13.7234C22.3002 15.0789 23.0617 16.9173 23.0617 18.8342C23.0595 20.7505 22.2971 22.5875 20.9422 23.9425C19.5873 25.2975 17.7502 26.0598 15.8338 26.0621L15.834 26.0619Z"
        fill="#090940"
      />
      <path
        d="M16.6371 18.502V14.016C16.6371 13.7291 16.4841 13.4639 16.2356 13.3205C15.9872 13.177 15.6809 13.177 15.4325 13.3205C15.184 13.4639 15.031 13.7291 15.031 14.016V18.8345C15.031 19.0475 15.1157 19.2517 15.2663 19.4023L17.6756 21.8116C17.8795 22.0087 18.1724 22.0834 18.4458 22.0084C18.7193 21.9335 18.933 21.7197 19.0079 21.4463C19.0829 21.1728 19.0082 20.88 18.8111 20.676L16.6371 18.502Z"
        fill="#090940"
      />
    </svg>

    {#each data.methods as method}
      <div class="span-box">
        <p>{method.duration}</p>
      </div>
    {/each}
  </li>
  <!-- Author Section -->
  <li class="tags-group">
    <svg
      width="50"
      height="55"
      viewBox="0 0 32 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9.25V27.75L15.6 37L31.2 27.75V9.25L15.6 0L0 9.25Z"
        fill="#FBC5B4"
      />
      <path
        d="M15.1613 18.3369C17.571 18.3369 19.531 15.7796 19.531 13.3701C19.531 10.9607 17.571 9 15.1613 9C12.7516 9 10.7913 10.9607 10.7913 13.3701C10.7917 15.7793 12.7517 18.3369 15.1613 18.3369Z"
        fill="#090940"
      />
      <path
        d="M18.442 18.3818C17.5943 19.0276 16.537 19.4119 15.3916 19.4119H14.9315C13.7858 19.4119 12.7282 19.0275 11.8808 18.3818C9.11332 18.8292 7 21.2281 7 24.1216C7 25.7112 10.654 27.0003 15.1616 27.0003C19.6691 27.0003 23.3231 25.7112 23.3231 24.1216C23.3231 21.228 21.2095 18.829 18.442 18.3818H18.442Z"
        fill="#090940"
      />
    </svg>

    <div class="span-box">
      <p>Charley Muhren</p>
    </div>
  </li>
</ul>

<style>
  .tags-container {
    display: flex;
    flex-direction: column;

    padding: 0;
  }

  .tags-group {
    display: flex;

    margin-bottom: 10px;
  }

  .span-box {
    display: flex;
    flex-flow: row wrap;
  }

  p {
    background-color: var(--vtYellow-80);
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.1rem 0.4rem;
    margin-right: 0;
    margin: 0.7rem -0.3rem 0.7rem 0.7rem;
    max-width: fit-content;
  }

  svg {
    flex-shrink: 0;
  }

  @media (min-width: 1186px) {
    .tags-container {
      position: -webkit-sticky; /* Voor Safari */
      position: sticky;
      padding: 0;
      top: 0;
      z-index: 1;
    }
  }
</style>

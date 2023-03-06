<h2>Methods</h2>

<h3>GET</h3>

<p>Een gepagineerd overzicht van alle <em>methods</em> in api.visualthinking.fdnd.nl met een aantal in te stellen opties welke als url parameter meegestuurd kunnen worden. Standaard worden de laatst toegevoegde tien <em>methods</em> ingeladen maar dit aantal, het aantal <em>methods</em> dat geskipt worden, de volgorde en de kolom waarop gesorteerd wordt kunnen worden ingesteld.</p>

<h4>Url parameters:</h4>

<ul>
  <li>first, een getal tussen 0-100 waarmee het aantal op te halen <em>methods</em> wordt ingesteld.</li>
  <li>skip, een getal waarmee een aantal <em>methods</em> in de selectie worden overgeslagen. Dit is handig voor het instellen van paginering.</li>
  <li>direction, bepaalt de volgorde van de selectie. Standaard is DESC (aflopend) maar je kunt deze parameter ASC (oplopend) meegeven om de richting te veranderen.</li>
  <li>orderBy, bepaalt de sortering van de selectie. Standaard is publishedAt, de datum dat het record is toegevoegd. Alle eigenschappen van members kunnen gebruikt worden als sortering.</li>
</ul>

<h4>Voorbeeld Requests:</h4>

<ul>
  <li><a href="/api/v1/methods">/api/v1/methods</a></li>
</ul>
<h2>Method</h2>

<h3>GET</h3>

<p>
	Selecteer één <em>method</em> op basis van een meegestuurde url parameter met het
	id.
</p>

<h4>Url parameters:</h4>
<ul>
	<li>
		<strong>id</strong>, het id van de te selecteren <em>smart zone</em>.
		<br />(Vind jouw id door de lijst met methods te gebruiken!)
	</li>
</ul>

<h4>Voorbeeld Request:</h4>

<ul>
	<li>
		<a href="/api/v1/method?id=clfflt1kf3r7y0buupwnxqdad"
			>/api/v1/method?id=clfflt1kf3r7y0buupwnxqdad</a
		>
	</li>
</ul>

<h3>[slug]</h3>

<p>
	Selecteer één <em>method</em> op basis van de ingestelde [slug] welke als onderdeel
	van de url wordt meegestuurd.
</p>

<h4>Voorbeeld Request:</h4>

<ul>
	<li>
		<a href="/api/v1/method/[slug]">/api/v1/method/[slug]</a>
	</li>
</ul>


<h4>Voorbeeld requests:</h4>
<ul>
  <li>
    <a href="/api/v1/methods">/api/v1/methods</a>
  </li>
</ul>

<style>
	h4,
	ul {
		margin-top: 1rem;
	}
	ul {
		padding: 0;
		list-style: none;
	}
	li {
		margin-bottom: 0.4rem;
	}
</style>






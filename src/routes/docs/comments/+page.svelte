<h2>Comments</h2>

<h3>GET</h3>

<p>Een overzicht van alle <em>comments</em> bij een <em>method</em>. Een selectie zonder <em>method</em> id resulteert in een lege selectie.</p>

<ul>
  <li><a href="/api/v1/comments">/api/v1/comments</a></li>
  <li><a href="/api/v1/comments?id=clbm2lst10kxy0aw1lnu15898">/api/v1/comments/?id=clbm2lst10kxy0aw1lnu15898</a></li>
</ul>

<h3>POST</h3>

<p>Voeg een nieuwe <em>comment</em> toe bij een bestaande <em>method</em>. Deze
route verwacht een als payload meegestuurd JSON object met de volgende structuur:</p>

<pre><code>
&lbrace;
	"author": "De naam van de auteur",
	"text": "De tekst van de comment",
	"methodId": "clbm2lst10kxy0aw1lnu15898" // De roadmap methode
&rbrace;
</code></pre>

<ul>
  <li><a href="/api/v1/comments">/api/v1/comments</a></li>
</ul>
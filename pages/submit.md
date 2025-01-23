---
permalink: "/submit/"
layout: layout.html
--- 
<div class="section-gallery-submit" id="section-gallery-submit">
{% include "gallery.html" %}
</div>
<section id="section-submission">
    <div class="container-submission">
    <h1 class="title-subpage">Einreichen</h1>
    <form name="submission" method="POST" data-netlify="true" onSubmit="submit" action="/success/">
        <input type="text" id="name" name="name" placeholder="Gebäude-/Raumname" required><br><br>
        <input type="text" id="plz" name="plz" placeholder="Postleitzahl" required><br><br>
        <input type="text" id="ort" name="ort" placeholder="Ort" required><br><br>
        <input type="email" id="email" name="email" placeholder="E-Mail" required><br><br>
        <textarea id="description" name="description" placeholder="Beschreibung und Tipps für Kontaktmöglichkeiten" rows="10" cols="30" required></textarea><br>
        <div class="container-img-upload">
            <label for="file" class="btn-upload-file">Bilder hochladen</label><br>
            <input type="file" id="file" name="file" accept="image/*" multiple required><br>
        </div>
        <button class="btn-submit" type="submit" value="Send Message">Einreichen</button>
    </form>
    </div>
</section>

<a href="/index.html" class="container-link-landing-page">
<div class="link-landing-page"></div>
<div class="link-landing-page"></div>
<div class="link-landing-page"></div>
</a> 

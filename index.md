---
layout: layout.html
---
<section class="section-gallery">
    <div class="carousel">
        {% for post in collections.posts %}
        <div class="container-img">
            {% if post.data.preview-image %}
            <a class="img-link" target="_blank" href="{{ post.url }}">
                <img class="carousel-item" src="{{ post.data.preview-image }}" alt="{{ post.data.title }}">
            <p class="text-on-img invisible">{{ post.data.plz }}</p>
            {% endif %}
        </div>
        {% endfor %}
    </div>
</section>
<section class="section-text-on-top" id="section-to-toggle">
    <div class="menu">
        <h1>Leerräume</h1>
        <h2 class="subheading">Sichtbarmachen von potenziellen Veranstaltungsorten im ländlichen Raum</h2>
        <a href="/submit/">
            <h2 class="subheading link-submit">Leerraum einreichen</h2>
        </a>
    </div>
</section> 
<script>
    if (window.netlifyIdentity) {         
      window.netlifyIdentity.on("init", user => {          
        if (!user) {          
          window.netlifyIdentity.on("login", () => {          
            document.location.href = "/admin/";          
          });          
        }
      });
    }
</script>
<script src="/assets/js/main.js"></script>


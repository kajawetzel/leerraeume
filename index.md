---
layout: layout.html
---
{% include "gallery.njk" %}
<section class="section-text-on-top" id="section-to-toggle">
    <div class="menu">
        <h1>Leerräume</h1>
        <h2 class="subheading">
          Sichtbarmachen von potenziellen Räumen für kreative Zwischennutzung im ländlichen Raum
        </h2>
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



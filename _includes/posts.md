---
layout: layout.html
---
<section class="section-img-posts">
  <div 
    class="container-img-posts scrollable" 
    data-images='{{ images | jsonify }}'>
  </div>
<div class="container-btn">
    <button class="btn btn-left">←</button>
    <button class="btn btn-right">→</button>
</div>
</section>
<button class="details-text-posts">
  <div class="summary-text-posts">
    <p class="summary-btn">?</p>
  </div>
</button>
<section class="section-text-posts">
    <h1 class="text-subpage title-subpage">{{ title }}</h1>
    <div class="container-text-posts">
        <p class="text-subpage details-text-subpage description-text-subpage">
        <strong>
        {{ ort }}.
        </strong>
        {{ description }}</p>
    </div>
</section> 


<a href="/index.html" class="container-link-landing-page">
<div class="link-landing-page"></div>
<div class="link-landing-page"></div>
<div class="link-landing-page"></div>
</a>
<script src="/assets/js/posts.js"></script>

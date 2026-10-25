---
title: Germany
---

<div class="masonry-gallery">
  <img src="/photography/germany/1.jpg" alt="" loading="lazy" />
  <img src="/photography/germany/2.jpg" alt="" loading="lazy" />
  <img src="/photography/germany/3.jpg" alt="" loading="lazy" />
  <img src="/photography/germany/4.jpg" alt="" loading="lazy" />
  <img src="/photography/germany/5.jpg" alt="" loading="lazy" />
</div>

<style>
  .masonry-gallery {
    column-count: 2;
    column-gap: 1rem;
  }

  .masonry-gallery img {
    width: 100%;
    break-inside: avoid;
    margin-bottom: 1rem;
    border-radius: 8px;
    display: block;
  }

  @media (max-width: 768px) {
    .masonry-gallery {
      column-count: 2;
    }
  }
  @media (max-width: 480px) {
    .masonry-gallery {
      column-count: 1;
    }
  }
</style>

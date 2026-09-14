---
title: Valencia
---


<div class="masonry-gallery">
  <img src="/photography/valencia/1.jpg" alt="" loading="lazy" />
  <img src="/photography/valencia/2.jpg" alt="" loading="lazy" />
  <img src="/photography/valencia/3.jpg" alt="" loading="lazy" />
  <img src="/photography/valencia/4.jpg" alt="" loading="lazy" />
  <img src="/photography/valencia/5.jpg" alt="" loading="lazy" />
  <img src="/photography/valencia/6.jpg" alt="" loading="lazy" />
  <img src="/photography/valencia/7.jpg" alt="" loading="lazy" />
  <img src="/photography/valencia/8.jpg" alt="" loading="lazy" />
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

  /* Mobile Responsive */
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
---
title: Turkey
---

<div class="masonry-gallery">
  <img src="/photography/turkey/turkey-1.jpeg" alt="" loading="lazy" />
  <img src="/photography/turkey/turkey-2.jpeg" alt="" loading="lazy" />
  <!-- <img src="/photography/turkey/turkey-3.jpeg" alt="" loading="lazy" /> -->
  <img src="/photography/turkey/turkey-4.jpeg" alt="" loading="lazy" />
  <img src="/photography/turkey/turkey-5.jpeg" alt="" loading="lazy" />
  <img src="/photography/turkey/turkey-6.jpeg" alt="" loading="lazy" />
  <img src="/photography/turkey/turkey-7.jpeg" alt="" loading="lazy" />
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
---
title: Spain
---


<div class="masonry-gallery">
  <img src="/photography/spain/spain-1.png" alt="" loading="lazy" />
  <img src="/photography/spain/spain-2.png" alt="" loading="lazy" />
  <img src="/photography/spain/spain-3.png" alt="" loading="lazy" />
  <img src="/photography/spain/spain-4.png" alt="" loading="lazy" />
  <img src="/photography/spain/spain-5.png" alt="" loading="lazy" />
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
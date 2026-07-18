---
layout: default
title: insights
permalink: /insights/
---

<section class="insights-grid">
  {% for post in site.insights %}
  <a class="card" href="{{ post.url }}">
    {% if post.thumbnail %}
      <img src="{{ post.thumbnail }}" alt="{{ post.title }}">
    {% else %}
      <div class="card-placeholder"></div>
    {% endif %}
    <div class="card-body">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
  </a>
  {% endfor %}
</section>
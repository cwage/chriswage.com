---
layout: default
title: Home
---

<h2 id="about">Who Am I?</h2>

<img src="{{ '/assets/images/chris.jpg' | relative_url }}" alt="Chris Wage" class="bio-photo">

I'm Chris Wage. You can call me `cwage`, most people do. Professionally, I'm a systems and security engineer with 25 years in the industry, most recently at GitHub. Personally, I'm a chronic autodidact with a long roster of hobbies and a love of figuring things out.

<h2 id="now">What I'm Up To</h2>

A current sample of whatever bullshit I'm on:

<div class="now-carousel" data-now-carousel>
{% if site.data.now.size > 1 %}
<div class="now-controls" role="group" aria-label="Now carousel navigation">
<button type="button" class="now-nav now-prev" data-now-prev aria-label="Previous item">&lsaquo;</button>
<div class="now-dots" data-now-dots>{%- for item in site.data.now reversed %}<button type="button" class="now-dot{% if forloop.first %} is-active{% endif %}" data-now-dot="{{ forloop.index0 }}" aria-label="Go to item {{ forloop.index }}"{% if forloop.first %} aria-current="true"{% endif %}></button>{%- endfor %}</div>
<button type="button" class="now-nav now-next" data-now-next aria-label="Next item">&rsaquo;</button>
</div>
{% endif %}
<div class="now-slides">
{% for item in site.data.now reversed %}
<div class="now-item{% if forloop.first %} is-active{% endif %}" data-now-slide>
<p><strong><a href="{{ item.url | uri_escape }}">{{ item.title | escape }}</a></strong> <span class="now-meta">{{ item.type | escape }}{% if item.date %} &middot; {{ item.date | date: "%Y-%m-%d" }}{% endif %}</span><br>{{ item.blurb | escape }}</p>
{% if item.image %}<a href="{{ item.url | uri_escape }}"><img src="{{ item.image | uri_escape }}" alt="{{ item.title | escape }}" class="now-image"></a>{% endif %}
</div>
{% endfor %}
</div>
</div>
{% if site.data.now.size > 1 %}
<script src="{{ '/assets/js/now-carousel.js' | relative_url }}" defer></script>
{% endif %}

<h2 id="elsewhere">Elsewhere</h2>

**[quietlife.net](https://quietlife.net)**: Personal blog. 25 years of opinions: some embarrassing, some objectively correct.

**[photos.chriswage.com](https://photos.chriswage.com)**: Photoblog. A curated place for photos I thought were good.

**[astro.chriswage.com](https://astro.chriswage.com)**: Astrophotography journal. Detailing my successes and failures as I learn how to photograph space.

**[resume.quietlife.net](https://resume.quietlife.net)**: Resume. "What would you say ... you do here?"

<h2 id="infra">Infrastructure</h2>

**[homelab](https://github.com/cwage/homelab)**: IaC monorepo for my home network. Proxmox VE, OpenTofu for provisioning, Ansible, NixOS etc. An ever-evolving project for both my personal infrastructure and keeping my skills sharp.

**[dotfiles](https://github.com/cwage/dotfiles)**: Personal dotfiles. 10 years of history in this repo, now cleaned up and organized for use in the above nix setup. Don't look too closely at the git history.

<h2 id="projects">Things I've Built</h2>

A collection of side projects, most built quickly with AI-assisted development to scratch a specific itch. A lot of these were rapidly prototyped as a proof of concept, both of random ideas/needs and also the LLM tools themselves.

**[staticomment](https://github.com/cwage/staticomment)**: Lightweight comment server for static sites (e.g. jekyll). Accepts form submissions, writes YAML, and commits them to your site's git repo.

**[nash-services](https://nash-services.quietlife.net)**: Web app for browsing Nashville open data (police dispatches, 311 requests, road closures, fire incidents), searchable by location on a map.

**[mnpd-dispatch](https://github.com/cwage/mnpd-dispatch)**: CLI tool and API for querying active Metro Nashville police and fire dispatches by address proximity.

**[trash-pickup](https://github.com/cwage/trash-pickup)**: CLI tool and API for Nashville trash and recycling pickup schedules by address.

**[nesoutage](https://github.com/cwage/nesoutage)**: CLI tool and API for querying Nashville Electric Service power outage data.

**[anchor](https://github.com/cwage/anchor)**: Android app for monitoring and interacting with remote tmux sessions over SSH. Chat-like interface, built with Kotlin.

**[radio](https://github.com/cwage/radio)**: Playground for software-defined radio scripts and configs. ADS-B aircraft tracking, HD radio, pager decoding, ACARS aviation data.

**[kobo-notes](https://github.com/cwage/kobo-notes)**: Export highlights and annotations from a Kobo eReader's SQLite database to markdown, plain text, or JSON.

<h2 id="contact">Contact</h2>

<div class="contact-icons">
  <a href="https://github.com/cwage" title="GitHub" aria-label="GitHub"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
  <a href="https://www.linkedin.com/in/chris-wage-5054b6153/" title="LinkedIn" aria-label="LinkedIn"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
  <a href="https://x.com/cwage" title="X" aria-label="X"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></a>
  <a href="https://www.flickr.com/photos/cwage" title="Flickr" aria-label="Flickr"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 12c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6zm12 0c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z"/></svg></a>
  <a href="mailto:cwage@quietlife.net" title="Email" aria-label="Email"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1.5 3h21c.83 0 1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5h-21C.67 21 0 20.33 0 19.5v-15C0 3.67.67 3 1.5 3zm10.5 11.25L2.4 6.6l-.9.75L12 15.75l10.5-8.4-.9-.75L12 14.25z"/></svg></a>
  <a href="tel:+16152944128" title="(615) 294-4128" aria-label="Call (615) 294-4128"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></a>
</div>

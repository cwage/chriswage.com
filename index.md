---
layout: default
title: Home
---

## Who Am I?

I'm Chris Wage. You can call me `cwage`, most people do. Professionally, I'm a systems and security engineer with 25 years in the industry, most recently at GitHub. Personally, I'm a chronic autodidact with a long roster of hobbies and a love of figuring things out.

## What I'm Up To

{% for item in site.data.now %}
<div class="now-item">
{% if item.image %}<a href="{{ item.url }}"><img src="{{ item.image }}" alt="{{ item.title }}" class="now-image"></a>{% endif %}
<p><strong><a href="{{ item.url }}">{{ item.title }}</a></strong> <span class="now-type">{{ item.type }}</span><br>{{ item.blurb }}</p>
</div>
{% endfor %}

## Elsewhere

**[quietlife.net](https://quietlife.net)**: Personal blog. 25 years of opinions: some embarrassing, some objectively correct.

**[photos.chriswage.com](https://photos.chriswage.com)**: Photoblog. A curated place for photos I thought were good.

**[astro.chriswage.com](https://astro.chriswage.com)**: Astrophotography journal. Detailing my successes and failures as I learn how to photograph space.

**[resume.quietlife.net](https://resume.quietlife.net)**: Resume. "What would you say ... you do here?"

## Infrastructure

**[homelab](https://github.com/cwage/homelab)**: IaC monorepo for my home network. Proxmox VE, OpenTofu for provisioning, Ansible, NixOS etc. An ever-evolving project for both my personal infrastructure and keeping my skills sharp.

**[dotfiles](https://github.com/cwage/dotfiles)**: Personal dotfiles. 10 years of history in this repo, now cleaned up and organized for use in the above nix setup. Don't look too closely at the git history.

## Things I've Built

A collection of side projects, most built quickly with AI-assisted development to scratch a specific itch. A lot of these were rapidly prototyped as a proof of concept, both of random ideas/needs and also the LLM tools themselves.

**[staticomment](https://github.com/cwage/staticomment)**: Lightweight comment server for static sites (e.g. jekyll). Accepts form submissions, writes YAML, and commits them to your site's git repo.

**[nash-services](https://nash-services.quietlife.net)**: Web app for browsing Nashville open data (police dispatches, 311 requests, road closures, fire incidents), searchable by location on a map.

**[mnpd-dispatch](https://github.com/cwage/mnpd-dispatch)**: CLI tool and API for querying active Metro Nashville police and fire dispatches by address proximity.

**[trash-pickup](https://github.com/cwage/trash-pickup)**: CLI tool and API for Nashville trash and recycling pickup schedules by address.

**[nesoutage](https://github.com/cwage/nesoutage)**: CLI tool and API for querying Nashville Electric Service power outage data.

**[anchor](https://github.com/cwage/anchor)**: Android app for monitoring and interacting with remote tmux sessions over SSH. Chat-like interface, built with Kotlin.

**[radio](https://github.com/cwage/radio)**: Playground for software-defined radio scripts and configs. ADS-B aircraft tracking, HD radio, pager decoding, ACARS aviation data.

**[kobo-notes](https://github.com/cwage/kobo-notes)**: Export highlights and annotations from a Kobo eReader's SQLite database to markdown, plain text, or JSON.

## Contact

[GitHub](https://github.com/cwage) · [LinkedIn](https://www.linkedin.com/in/chris-wage-5054b6153/) · [X](https://x.com/cwage) · [Flickr](https://www.flickr.com/photos/cwage)

[cwage@quietlife.net](mailto:cwage@quietlife.net) · [(615) 294-4128](tel:+16152944128)

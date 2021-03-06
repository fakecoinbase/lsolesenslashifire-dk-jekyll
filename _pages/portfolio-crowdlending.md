---
created_at: 2019-05-15T10:00:00+08:00
layout: single
title: Crowdlending, crowdfunding og P2P-investeringer siden 2017
permalink: /crowdlending/
excerpt: "Her kan du se min samlede portefølje for crowdlending, crowdfunding og P2P-investeringer - med intern rente, totalt investeret og indkomst."
author_profile: true
toc: true
toc_sticky: true
tags:
  - overblik
last_modified_at: 2020-05-12T10:00:00+08:00
header:
  teaser: https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: Photo by Christine Roy on Unsplash
feature_row:
  - image_path: https://www.opheliainvest.dk/wp-content/uploads/2020/05/Screenshot-2020-05-04-at-18.36.12.png
    alt: "Den lille guide til Crowdlending"
    title: "Den lille guide til Crowdlending"
    excerpt: "I denne bog får du en grundig og lettilgængelig indføring i emnet crowdlending, som er en passiv investeringsform. Formålet er at skabe et fast, løbende afkast. Guiden introducerer dig for lånemarkedet, og giver svar på alle de gængse spørgsmål vedrørende risikostyring, skat, valg af investeringsplatform og meget mere."
    url: https://www.opheliainvest.dk/vare/den-lille-guide-til-crowdlending/?ref=507
    btn_label: "Læs mere*"
    btn_class: "btn--success"
---

{% include disclosure.html %}

I februar 2017 investerede jeg første gang i udlån gennem crowdlending. Jeg sammenfatter mine erfaringer med [præcise opdateringer om, hvordan det går med den enkelte platform](/platforme/), og der er et fast afsnit om crowdlending, crowdfunding og P2P-investeringer under mine [månedsopdateringer](/opdateringer/). 

Jeg har investeret en del penge i crowdlending. Følg udviklingen, mine erfaringer og afkastet herunder.

## Udvikling i værdi af crowdlending

Selvom der tilskrives renter løbende på de enkelte platforme, skal du være opmærksom på, at tallene er urealiseret indkomst indtil pengene er hævet fra platformen. I crowdlending har historien vist, at en platform kan gå ned eller være svindel, hvilket jeg ogås har været ramt af. Crowdlending er en højrisiko investeringsform.
{: .notice .notice--info }

{% include figure image_path="/assets/images/status/p2p-value.jpg" caption="Samlede værdi af crowdlending"  %}

## Fordeling på crowdlending platforme

{% include figure image_path="/assets/images/status/p2p-allocation.jpg" caption="Allokering mellem forskellige crowdlending platforme" %}

### Total indkomst fra crowdlending

{% include figure image_path="/assets/images/status/p2p-year-income-april-2020.jpg" caption="Income in crowdlending - status april 2020" %}

{% include figure image_path="/assets/images/status/p2p-income-april-2020.jpg" caption="Income in crowdlending - status april 2020" %}

### XIRR for crowdlending

Crowdlending har været udfordret i 2020, og jeg har haft nogle relativt store tab på Envestio og Agrikaab. Det fremgår tydeligt at nedenstående performancegraf, at der er udfordringer.

{% include figure image_path="/assets/images/status/p2p-performance.jpg" caption="Crowdlending ser voldsomt ud, når man mister hele indskuddet." %}

[Få 10 EUR Trine\*](/go/trine/){: .btn .btn--large .btn--warning }

#### Status april 2020

Herunder er et øjebliksbillede fra april 2020.

{% include figure image_path="/assets/images/status/p2p-xirr-april-2020.jpg" caption="Øjebliksbillede fra april 2020 på mine crowdlendingplatforme" %}

[Kom i gang med crowdlending på Mintos\*](/go/mintos/){: .btn .btn--large .btn--info }

## Forskellige typer crowdlending og crowdfunding

Jeg har forsøgt at dele mine crowdlending investeringer op i almindelige forbrugslån, lån til projekter og endelig lån til ejendomsinvesteringer, som giver huslejeudbytte.

{% include figure image_path="/assets/images/status/p2p-allocation-groups.jpg" caption="Crowdlending fordelt på typer" %}

[Opret dig på Mintos\*](/go/mintos/){: .btn .btn--large .btn--info } eller [Bondora\*](/go/bondora/){: .btn .btn--large .btn--success }

## Deals

{% assign deals = site.platforms | where: "tags", "crowdlending" | where_exp: "item", "item.deal != ''" %}
{% for d in deals %}
  {% if everything.size > 0 %}
    {% assign everything = d.deal | concat: everything %}
  {% else %}
    {% assign everything = d.deal %}
  {% endif %}
{% endfor %}
{% include feature_row array=everything %}

## Crowdlending platforme

<div class="feature__wrapper">

{% assign site_posts = site.platforms | where: "tags", "crowdlending" | sort: "title" %}

{% for post in site_posts %}
  {% include archive-teaser-images.html type="grid" %}
{% endfor %}

</div>

{% include feature_row type="left" %}

## Historik for signups

{% assign site_posts = site.platforms | where: "tags", "crowdlending" | sort: "first_investment_at" %}

{% for post in site_posts %}- {{ post.first_investment_at | date: "%b %-d, %Y"}} - Oprettede konto hos [{{ post.title }}\*]({{ post.cta_url }}) {% if post.exit_message %}({{ post.exit_message }}){% endif %}
{% endfor %}

{% include disclaimer.md %}

---
layout: default
title: "The Right Amount of CRM"
description: "Most CRM decisions aren't really about capability. A small team needed a digital rolodex but was quoted for a fully custom build. Reconfiguring an existing platform down to size saved most of the cost, but stripping down a sophisticated system still leaves complexity buried underneath. Sometimes the more direct fix is building small from scratch, as an offline-first proof of concept shows."
permalink: /insights/right-amount-of-crm
thumbnail: /assets/img/right-amount-of-crm.jpg
date: 2026-09-16
---
# The Right Amount of CRM
<br>
<div style="text-align: center;">
  <img src="/assets/img/right-amount-of-crm.jpg" alt="the right amount of crm" style="max-width: 700px; width: 100%;">
</div>
<br>
I once worked with a small team that needed a CRM, something simple: a handful of users and a modest list of contacts. Basically, what they wanted was a digital rolodex.

They were already in conversation with a vendor, that had promised them some custom builds, etc. They had provided a quote for the system plus an annual subscription.

From my perspective, the obvious move was one of the well-known platforms. Capable, well-supported, free for small nonprofits. The basic setup would have been a few days.

The challenge was that part of the team had used that platform before, at other organisations. In those organisations, the platform had been configured for hundreds of users across multiple departments. It had lots of custom objects, complicated permission sets, and tens of reports on fields nobody on this new team would ever touch. So, team members that had seen the platform in that capacity couldn't imagine it as a rolodex. They were worried that it would make their lives harder.

My approach was to listen first. Their worries were valid but had obvious solutions: simplify, simplify, simplify.

So I did the opposite of what the sales page assumes you'll do with all that capability. I turned most parts of the system off. I hid every object the team didn't need from ever appearing in their view. I renamed the ones they kept to the words they already used every day, not the platform's default terminology. By the time I presented the first demo, a system built for hundreds of users behaved like it was built for six.

And by the time I delivered the final product, its cost was a fraction of the alternative they were considering. On top of that, they didn't need to pay any subscription fees at all.

There was still a maintenance question with either option. The vendor's custom-built alternative depended entirely on the vendor: nobody inside the org could get into the backend to fix something or add a report without going back to them. The reconfigured platform had the same underlying problem in a different shape — all its original complexity was still sitting underneath the surface I'd built for the team, and someone would eventually need to go behind the curtain to make a change. But between the two, the reconfigured platform still won. There are far more people who know that platform, and a lot of good documentation and training material to draw on if the org ever needed outside help.

Yet, there's a more direct version of the same idea, one that avoids that tradeoff entirely: if you're confident about how small your needs actually are, and that it's very unlikely for them to grow significantly, there's no need to dumb down a big, sophisticated system. It is possible to build a simple, small one from scratch, especially in these days of AI.

I've actually been in this place myself. Sometimes as a solo consultant, working entirely off my own laptop. Sometimes as a solo researcher, working in remote areas with patchy or no internet at all. In both cases, what I actually needed was something offline-first: no server, no subscription, no login screen: just a small tool on my own machine, backed up like any other file.

That's what sits behind [**Offline CRM**](https://github.com/pooya-karambakhsh/offline-crm-demo), a proof-of-concept I built for exactly that scenario. It has a simple, relational structure for people, organisations, and interactions, running locally in Python and SQLite, with nothing to configure and nothing to hide.

At this stage, it's just meant for one person working alone. It can potentially grow to serve more people but would potentially lose part of the reason it exists.

Most of the time, the question isn't which CRM is the most capable. It's which one matches how many people are actually going to use it, which makes their jobs easier. Sometimes that means switching off half of what you paid for. Sometimes it means not paying for it at all.


## **Photo credit**
Photo by [BoliviaInteligente](https://unsplash.com/@boliviainteligente) on [Unsplash](https://unsplash.com/)
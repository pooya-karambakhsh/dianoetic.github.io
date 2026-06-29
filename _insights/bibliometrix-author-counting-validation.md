---
layout: default
title: "When Bibliometrix Author Counts Don't Add Up"
description: "Bibliometrix's `biblioAnalysis()` is a reliable workhorse — but its author count metrics can silently misfire on certain Web of Science exports. A semicolon count in R and a Power Query split both told a different story. Here's what the discrepancy reveals about parsing transparency, and why a second method should be routine."
permalink: /insights/bibliometrix-author-counting-validation
thumbnail: /assets/img/bibliometrixx_authors.jpg
---

# When Bibliometrix Author Counts Don't Add Up

Bibliometric tools promise quick insights, but their shortcuts can hide important details. When I checked the distribution of single- versus co-authored articles in a Web of Science dataset, the default output from Bibliometrix didn't match reality. A simple delimiter count revealed the discrepancy — and a useful reminder about validation.

## The problem

Author counts matter. They're used as proxies for collaboration trends, disciplinary norms, and productivity patterns. A parsing error upstream can quietly distort all of it.

Bibliometrix is a strong tool for bibliometric analysis — networks, visualisations, summary metrics. Its `biblioAnalysis()` command generates several key measures, including:

- `AuSingleAuthoredArt`: number of solo-authored articles
- `AuMultiAuthoredArt`: number of co-authored articles
- `nAUperPaper`: author count per article

The numbers it returned didn't align with what I expected, and the gap was large enough to matter.

## A solution

In Web of Science exports, authors are delimited by semicolons. Counting semicolons per row is a direct, unambiguous author count: zero semicolons means single-authored; one or more means co-authored.

I implemented this in R first, then cross-checked in Power Query by splitting the author column on ";" to get a column-per-author layout — a quick visual sanity check. Both methods agreed with each other, but not with Bibliometrix.

The most likely cause is that `biblioAnalysis()` handles certain author field formats — hidden characters, variant separators, metadata encoding differences — in a way that doesn't generalise cleanly across all WoS exports. The parsing logic isn't transparent, which makes it hard to diagnose without an independent check.

## BiblioPy

This is one of the problems BiblioPy is being designed to address. By keeping parsing logic explicit and modular, it makes discrepancies like this traceable and fixable — rather than something you only catch if you happen to validate against a second method.

More on BiblioPy and related work at [Dianoetic](https://dianoetic.com.au).
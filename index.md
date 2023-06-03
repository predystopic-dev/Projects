---
title: List of Projects
layout: default
heading: List of Projects
---

# {{ page.heading }}

{% for repo in site.github.public_repositories %}

{% if repo.fork == false %}

{% if repo.name == "Projects" %}
## [{{ repo.name }}]({{ repo.html_url }}) <- You're here
[Blogpost](./blogs/{{ repo.name }})
{% endif %}

{% unless repo.name == "Projects" %}
## [{{ repo.name }}]({{ repo.html_url }})
[Blogpost](./blogs/{{ repo.name }})
{% endunless %}

{{ repo.description }}

Language: {{ repo.language }}

Last updated: {{ repo.pushed_at | date_to_string }}

{% endif %}

{% endfor %}

<!--
You can use HTML elements in Markdown, such as the comment element, and they won't
be affected by a markdown parser. However, if you create an HTML element in your
markdown file, you cannot use markdown syntax within that element's contents.
-->
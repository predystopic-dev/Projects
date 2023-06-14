---
title: List of Projects
layout: default
heading: List of Projects
---

# {{ page.heading }}

{% for repo in site.github.public_repositories %}

{% if repo.fork == false %}

{% if repo.name == "Projects" %}
<h2 style="color: orange"> <a href="{{ repo.html_url }}">{{ repo.name }}</a> <- You're here </h2>
[Blogpost](https://predystopic-dev.github.io/blogs/{{ repo.name }})
{% endif %}

{% unless repo.name == "Projects" %}
## [{{ repo.name }}]({{ repo.html_url }})
[Blogpost](https://predystopic-dev.github.io/blogs/{{ repo.name }})
{% endunless %}

{{ repo.description }}

Language: {{ repo.language }}

Last updated: {{ repo.pushed_at | date_to_string }}

{% endif %}

{% endfor %}
# Contact Me

<div style="align-content=left;" id="formkeep-embed" data-formkeep-url="https://formkeep.com/p/c986acdbddded0d5ecf7542d04ea2986?embedded=1"></div>

<script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script type="text/javascript" src="https://formkeep-production-herokuapp-com.global.ssl.fastly.net/formkeep-embed.js"></script>

<!-- Get notified when the form is submitted, add your own code below: -->
<script>
const formkeepEmbed = document.querySelector('#formkeep-embed')

formkeepEmbed.addEventListener('formkeep-embed:submitting', _event => {
  console.log('Submitting form...')
})

formkeepEmbed.addEventListener('formkeep-embed:submitted', _event => {
  console.log('Submitted form...')
})
</script>

<!--
You can use HTML elements in Markdown, such as the comment element, and they won't
be affected by a markdown parser. However, if you create an HTML element in your
markdown file, you cannot use markdown syntax within that element's contents.
-->
# jQuery Archival

Add this script to the bottom of a page containing at least one `<article>` element which contains a) a `<time>` element with `itemprop="datePublished"` and `datetime` attributes, and b) an element with an `itemprop="articleBody"` attribute.

It will add an extra icon to each link, visible on hover, which links to the Wayback Machine's closest archive of the linked page.

Note that the archive may be from a later date than the date the article was published, if that date is closer than an earlier date.

[Demonstration](http://git.macropus.org/jquery-archival/)
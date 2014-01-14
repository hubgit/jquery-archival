(function($) {
	var css = {
		display: 'none',
		position: 'absolute',
		top: '-1em',
		right: 0,
		width: '16px',
		height: '18px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top left',
		backgroundImage: 'url(https://archive.org/images/glogo.jpg)',
		backgroundSize: 'contain',
		filter: 'invert(100%)',
		'-webkit-filter': 'invert(100%)' /* temporary */
	};

	$('article').each(function() {
		var published = $(this).find('time[datetime][itemprop=datePublished]').attr('datetime');
		var datetime = published ? published.replace(/\D/g, '') : '*';
		var prefix = 'https://web.archive.org/web/' + datetime + '/';

		$('a[href]', this).each(function() {
			var archiveLink = $('<a/>', { href: prefix + this.href }).css(css);

			$(this)
				.css('position', 'relative')
				.append(archiveLink)
				.on('mouseenter', function() { archiveLink.css('display', 'inline-block') })
				.on('mouseleave', function() { archiveLink.css('display', 'none') });
		});
	});
})(jQuery)
(function($) {
	var css = {
		display: 'inline-block',
		position: 'absolute',
		width: '16px',
		height: '18px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top left',
		backgroundImage: 'url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%10%00%00%00%10%08%00%00%00%00%3A%98%A0%BD%00%00%00%04gAMA%00%00%B1%8F%0B%FCa%05%00%00%00%20cHRM%00%00z%26%00%00%80%84%00%00%FA%00%00%00%80%E8%00%00u0%00%00%EA%60%00%00%3A%98%00%00%17p%9C%BAQ%3C%00%00%00%02bKGD%00%FF%87%8F%CC%BF%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%FEIDAT%18%D3c%F8%FB%EF%EF%7F8%F8%F7%F7%0F%C3%DF%3F%BF%9F%9C%9B%97c%E0%DB%B3%E9%F6%8F%7F%7F~3%FC%FF%B2%AA%20%C2R%CFP%DF%D0%3Di%E6%9B%FF%40%81%C7%96%8Aj%A6V%06%96V%9Aj%AAG%FF%FF%60%F8%FF%AD2%BC%3F9abvD%7Fj%D2%D3%FF%BF%18%BE%FF%2F%D7%FE%1F%E0%F6%BFV%F9%7F%88%FB%FF%DF%7F%18%FE%FC%8Fb%7Bk%AC%F6%3F%8E%F9%AD%A9%FA%FF%FF%7F%81%02%C9%82_l%0D%FF%A7%F3%7D%B63%04Z%0C%14H%E4%FFj%AD%F7%3F%95%FB%A3%8D%3ET%40%E0%13%90%99%C6%FB%D1%CE%00%24%F0%FB%7F4%FBGc%F5%FF%F1%CC%1FL5%FE%03%5D%FA%FB%7F%85%C9%DFp%BF%FFuz%FF%A2%FC%40%02%FF%BF7%24%D5fg%D7%15d%D6e%E5%3C%039%EC%B0%8D%B5%85%B5%8D%A9%95%AD%99%AD%C9%A2%FF%3F%19%FE%9F%9B0o%FE%EC%D9%F3%E7%CE%993g%D2%9E%FF%20%87%21%83%BF%7F%00%7B%7B%A4%C2-%D9%D0%D8%00%00%00%00IEND%AEB%60%82")',
		backgroundSize: 'contain'
	};

	var link = $('<a/>').css(css);
	var mouseEnterTimer, mouseLeaveTimer;

	$('article').each(function() {
		var article = $(this);

		var published = article.find('time[datetime][itemprop=datePublished]').attr('datetime');

		article.find('[itemprop=articleBody] a[href]').each(function() {
			var node = $(this);

			node.on('mouseenter', function() {
				if (mouseLeaveTimer) {
					window.clearTimeout(mouseLeaveTimer);
				}

				mouseEnterTimer = window.setTimeout(function() {
					var datetime = node.closest('ins[datetime]').attr('datetime') || published || '*';
					var prefix = 'https://web.archive.org/web/' + datetime.replace(/\D/g, '') + '/';
					var url = prefix + node.get(0).href;
					var position = node.position();
				
					link.attr('href', url).css({
						top: (position.top - 15) + 'px',
						left: position.left + 'px'
					}).appendTo(node).show();
				}, 250);
			}).on('mouseleave', function() {
				if (mouseEnterTimer) {
					window.clearTimeout(mouseEnterTimer);
				}

				mouseLeaveTimer = window.setTimeout(function() {
					link.hide();
				}, 500);
			});
		});
	});
})(jQuery)

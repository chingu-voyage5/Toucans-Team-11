//https://forismatic.com/en/api/

function populate(text) {
	console.log(text.quoteText);
	// FIXME put the text on the page
}
function newQuoteGenerator() {
  var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=populate"

  var getSettings = {
  	url: quoteUrl,
  	dataType: "jsonp",
  	crossDomain: true
  };

  $.get(getSettings);
}

newQuoteGenerator();
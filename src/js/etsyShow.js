app.etsyShow = function() {
  var api = app.EtsyApi({ apiKey: 'j4t40f6swvekws6carlvptkh' });
  var listTemplate = _.template($('#etsyShow').html(), { variable: 'm' });
  api.listings()
    .done(function (data) {
      // Let's put the data in the console so we can
      // explore it...
      $.get('views/listings.html').done(function (html) {
        var template = _.template(html, { variable: 'm' });
        $('.etsy-content').html(template({ items: data.results }));
      });
    })
    .fail(function (req, status, err) {
      $('.etsy-content').text(err.error);
    });
};

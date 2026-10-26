// English: helpers that attach the English version to articles already loaded.
// Each file in data/en/ calls EN(id, { t, s, box, b }) with the same mini-markdown as the Spanish and Russian texts.
window.ARTICLES = window.ARTICLES || [];
window.EN = function (id, en) {
  var a = window.ARTICLES.filter(function (x) { return x.id === id; })[0];
  if (a) a.en = en;
  else if (window.console) console.warn('EN: no article ' + id);
};

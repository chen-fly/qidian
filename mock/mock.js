module.exports = {
  rules: [
    {
      pattern: /\/api\/getBooklist.php\?rtype=origin$/,
      respondwith: './bookList.json'
    },
    {
      pattern: /\/api\/getBooklist.php\?rtype=refresh$/,
      respondwith: './bookList-refresh.json'
    },
    {
      pattern: /\/api\/getBooklist.php\?rtype=more$/,
      respondwith: './bookList-more.json'
    },
    {
      pattern: /\/api\/getThematic.php\?rtype=man$/,
      respondwith: './thematicMan.json'
    },
    {
      pattern: /\/api\/getThematic.php\?rtype=woman$/,
      respondwith: './thematicWoman.json'
    },
    {
      pattern: /\/api\/getBookMore.php\?rtype=origin$/,
      respondwith: './bookMore1.json'
    }
  ]
};

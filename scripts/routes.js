page('/',
  articlesController.loadAll,
  articlesController.index);

// when the URL slug contains '/about', trigger the about controller
page('/about', aboutController.index);

// when the URL slug contains '/article/[id]', run the loadById function and trigger the article controller
page('/article/:id',
  articlesController.loadById,
  articlesController.index);

// Redirect home if the default filter option is selected:
page('/category', '/');
page('/author', '/');

// when the URL slug contains '/author/[author name]', run the loadByAuthor function and trigger the article controller
page('/author/:authorName',
  articlesController.loadByAuthor,
  articlesController.index);

// when the URL slug contains '/category/[category name]', run the loadByCategory function and trigger the article controller
page('/category/:categoryName',
  articlesController.loadByCategory,
  articlesController.index);

page();

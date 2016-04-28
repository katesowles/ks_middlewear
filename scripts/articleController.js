(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // The load by ID method is a function that first calls Article.findWhere which is a function that takes 3 paramters. In this case we are passing 'id', ctx.params.id and our call back which is articleData. The findWhere method selects any article that matches the params.Id. Once it matches that article it performs a call back which is our article data call back. In article data we pass a function a parameter which is equal to that article that findwhere just got for us then calls the next() function that then calls the next item in the page command which is after our loadBYId which is articlesController.index.

  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // The load by Author method is a function that first calls Article.findWhere which is a function that takes 3 paramters. In this case we are passing 'author', ctx.params.authorname and our call back which is authorData. The findWhere method selects any article that matches the author param. Once it matches that article it performs a call back which is our article data call back. In article data we pass a function a parameter which is equal to that article that findwhere just got for us then calls the next() function that then calls the next item in the page command which is after our loadBYId which is articlesController.index.
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
    // The load by Author method is a function that first calls Article.findWhere which is a function that takes 3 paramters. In this case we are passing 'category', ctx.params.catname and our call back which is categorydata. The findWhere method selects any article that matches the category param. Once it matches that article it performs a call back which is our categorydata call back. In article data we pass a function a parameter which is equal to that article that findwhere just got for us then calls the next() function that then calls the next item in the page command which is after our loadBYId which is articlesController.index.
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // The loadall method is a function that first checks if it has a article... If it doesnt it runs fetchAll and grabs those articles. If it does have articles it runs the next call back then calls the next() function that then calls the next item in the page command which is after our loadBYId which is articlesController.index. 
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };


  module.articlesController = articlesController;
})(window);

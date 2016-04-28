(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about'); // this assigns the jQuery selector of $('#about'), which is a container with an id of about in the DOM, as a simpler $about variable
    // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty(); // finds all instances of a ul in $about and empties out it's contents but leaves the ul itself intact
    $about.show().siblings().hide(); // shows the $about element, then locates it's siblings and hides them
  };

  var render = function(repo) {
    return $('<li>') // locates the li's in a given container and inserts a link tag into them with the html_url from the github api as the link destination and the full_name of the repo as the link text.
      .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>');
  };

  repoView.index = function() {
    ui(); // runs the ui function above

    $('#about ul').append( // finds the ul element(s) in the $about element and appends the results of the repos.with function that DO have a truthy fork_count value (has at least one fork), then for each of those array items, they're rendered into the page.
      repos.with('forks_count').map(render)
    );
  };

  module.repoView = repoView; // make moddule.repoView accessible by the keyword "repoView"
})(window);

(function(module) {
  var repos = {}; // sets an empty object called repos

  repos.all = []; // sets an empty array in the repos object constructor called all

  // the two chained .done() callbacks will both run, in the order they're added to the preceeding function. That order doesn't change.
  repos.requestRepos = function(callback) {
    // $.get loads data from server with HTTP GET request; $.ajax performs an asynchronous HTTP request; $.getJSON loads JSON data specifically from a server  with HTTP GET request.
    $.get('/github/user/repos' + '?per_page=100' + '&sort=updated') // accesses the github user's repos (user defined by token), pulls in the first 100 results, and sorts them by updated_at date/time.
    .done(function(data, message, xhr) { repos.all = data; }) // when the information is returned, that data is inserted into repos.all where each piece of data is it's own data object
    .done(callback); // when that second function is complete, run the callback
  };

  // as this function cycles through all of the repos in the repos.all array, the attribute that's passed as an argument will be returned (or, more clearly, it's value) and will be pushed into a new array.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) { return repo[attr]; }); // return the specific attribute value of all repos (each one being passed as the argument "repo" as they cycle) in the repos.all array and push them into a new array.
    // in general, .filter() cycles through an array and returns only the array items that match the parameters it's given.
  };

  module.repos = repos; // make moddule.repos accessible by the keyword "repos"
})(window);

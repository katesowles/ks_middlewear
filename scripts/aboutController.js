(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    repos.requestRepos(repoView.index); // when aboutController is triggered, the requestRepos function is run, and repoView is then run as a callback once requestRepos is done
  };

  module.aboutController = aboutController; // make moddule.aboutController accessible by the keyword "aboutController"
})(window);

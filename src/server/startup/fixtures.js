function loadFixtures () {
  var projects = JSON.parse(Assets.getText('fixtures/projects.json'));
  var milestones = JSON.parse(Assets.getText('fixtures/milestones.json'));
  if (!Projects.findOne())
    _.each(projects, function (index, elem) {
      Projects.insert(elem);
    });

  if (!ProjectMilestones.findOne())
    _.each(milestones, function (index, elem) {
      ProjectMilestones.insert(elem);
  });
}

Meteor.startup(function () {
  loadFixtures(); 
});

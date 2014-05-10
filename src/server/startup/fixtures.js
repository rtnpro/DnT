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

loadWorldBankFixtures () {
  var projects = JSON.parse(Assets.getText('fixtures/world_bank_projects.json'));
  if (!WorldBankProjects.findOne()) {
    _.each(projects, function (index, elem) {
      if (!WorldBankProject.findOne({id: elem.project_id})) {
        WorldBankProject.insert({
          id: elem.project_id,
          title: elem.project_title,
          status: elem.project_status,
          approval_date: new Date(elem.project_approval_date),
          closing_date: new Date(elem.project_closing_date),
          total_cost: elem.project_total_cost,
          commitment_amount: elem.project_commitment_amount,
          team_leader: elem.project_team_leader,
          abstact: elem.project_abstract
        });
      }
      WorldBankProjectProcurements.insert({
        uniq_id: elem.uniq_id,
        url: elem.url,
        id: elem.procurement_id,
        project_id: elem.project_id,
        title: elem.procurement_title,
        country: elem.country,
        notice_type: elem.notice_type,
        notice_status: elem.notice_status,
        method: elem.procurement_method,
        contact_award_type: elem.contact_award_type,
        submission_deadline: new Date(elem.submission_deadline),
        published_date: new Date(elem.published_date),
        contact_organization: elem.contact_organization,
        contact_name: elem.contact_name,
        contact_address: elem.commitment_address,
        contact_city: elem.contact_city,
        contact_postal_code: elem.contact_postal_code,
        contact_email: elem.contact_email,
        contact_website: elem.contact_website,
        geocode: elem.geocode.split(', ')
      });
    });
  }
}

Meteor.startup(function () {
  loadFixtures();
  try {
    loadWorldBankFixtures();
  } catch (err) {}
});

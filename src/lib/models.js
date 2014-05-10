/*
Projects: {
  name: String,
  description: String,
  website: String,
  thumbnail: String(URL),
  total_funds: float,
  self_funds: float,
  donations: float,
  expenditure: float,
  progress: float (percentage),
  organisation_id: String (organisation id),
  organisation_name: String,
  status: String (open/work_in_progress),
  creator_user_id: String,
  creator_username: String,
  owner_user_id: String,
  owner_username: String,
  created: Datetime,
  last_updated: Datetime
}
*/
Projects = new Meteor.Collection('projects');


/*
ProjectMilestones: {
  name: String,
  description: String,
  project_id: String,
  project_name: String,
  progress: String,
  total_funds: float,
  expenditure: float,
  progress: float,
  status: String,
  created: Datetime,
  last_updated: Datetime,
  creator_user_id: String,
  creator_user_name: String
}
*/
ProjectMilestones = new Meteor.Collection('project_milestones');


/*
  WorldBankProjects: {
    id: String,
    title: String,
    status: String,
    approval_date: Datetime,
    closing_date: Datetime,
    total_cost: float,
    commitment_amount: float,
    team_leader: String,
    abstract: String
  }
*/

WorldBankProjects = new Meteor.Collection('world_bank_projects');

/*
  WorldBankProjectProcurements: {
    uniq_id: String,
    url: String,
    id: String,
    title: String,
    country: String,
    notice_type: String,
    notice_status: String,
    method: String,
    contact_award_type: String,
    submission_deadline: Datetime,
    published_date: Datetime,
    contact_organization: String,
    contact_name: String,
    contact_address: String,
    contact_city: String,
    contact_postal_code: String,
    contact_email: String,
    contact_website: String,
    geocode: Array [lat, long],
  }
*/
WorldBankProjectProcurements = new Meteor.Collection('world_bank_project_procurements');


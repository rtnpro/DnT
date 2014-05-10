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

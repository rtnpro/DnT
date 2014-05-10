import pymongo
client = pymongo.MongoClient("localhost", 3001)
db = client.meteor

import seed_projects
for i in seed_projects.projects:
    db.projects.insert(i)

import seed_milestones
for i in seed_milestones.milestones:
    db.project_milestones.insert(i)

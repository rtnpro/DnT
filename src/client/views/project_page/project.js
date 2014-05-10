Template.project.helpers({
    projects: function(){
        return Projects.find().fetch()
    }
})

Template.project.events({
    'click #upvote' : function(event){
        target = event.target;
        record_id = target.attr('rid')
        if(record_id){
            Projects.update(
                {'_id':record_id},
                {$set: {'rank': rank}});
        }
    },
    'click #downvote' : function(event){
    }
})

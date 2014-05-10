Template.project.helpers({
    projects: function(){
        return Projects.find().fetch()
    }
})

Template.project.events({
    'click #upvote' : function(event){
        var $target = $(event.target);
        var record_id = $target.attr('rid');
        if(record_id){
            Projects.update(
                {'_id': record_id},
                {$inc: {'rank': 1}});
        }
    },
    'click #downvote' : function(event){
        var $target = $(event.target);
        var record_id = $target.attr('rid');
        if(record_id){
            Projects.update(
                {'_id': record_id},
                {$inc: {'rank': -1}});
        }
    }
})

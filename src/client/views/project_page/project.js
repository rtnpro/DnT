Template.project.helpers({
    projects: function(){
        return WorldBankProjects.find();
    }
})

Template.projects.helpers({
    projects: function () {
        return WorldBankProjects.find();
    },
    filters: function () {
        return [
            {name: 'Active'}
        ];
    }
});

Template.projects.created = function () {
    Meteor.setTimeout(function () {
        $('select').chosen();
    }, 10);
}

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

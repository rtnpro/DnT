Template.temp.helpers({
    projects: function(){
        return Projects.find().fetch();
    }
})

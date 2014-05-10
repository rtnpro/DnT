Template.index.events({
    'click #submit': function(event){
        name = $('#name').val()
        console.log(name)
        Projects.insert({
            title: name,
            data: Date.now()
        })
        name.value = ''
    }
})

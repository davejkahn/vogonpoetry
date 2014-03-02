Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    //routes "/" to home
    this.route('home', {
        path: '/',
        template: 'home'
    });

    //redirect all other urls to app ("/")
    this.route('notFound', {
        path: '*',
        action: function () {
            this.redirect("/");
        }
    });
});
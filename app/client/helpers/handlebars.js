Handlebars.registerHelper("sessionAmpContains", function (name, item) {
    var array = SessionAmplify.get(name);
    return _.contains(array, item);
});

Handlebars.registerHelper("sessionAmpEquals", function (name, item) {
    var value = SessionAmplify.get(name);
    return (value === item);
});

Handlebars.registerHelper("getSessionAmp", function (name) {
    return SessionAmplify.get(name);
});
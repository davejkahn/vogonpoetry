(function () {
    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    describe("Utils", function () {
        describe("Utils.removeByAttr", function () {
            it("returns inputted array without objects that contain the inputted value for inputted attribute", function () {
                var array = [{title: "test", value: 2}, {name: "example", value: 5}, {data: "other", value: 8}];
                expect(Utils.removeByAttr(array, "value", 2)).toEqual([{name: "example", value: 5}, {data: "other", value: 8}]);
            });
        });
    });
}());

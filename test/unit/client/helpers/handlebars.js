(function () {
    "use strict";

    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.getEnv().defaultTimeoutInterval = 20000;

    describe("Handlebars sessionAmpContains helper", function () {
        it("returns true if the amplified session variable selected contains the inputted item", function () {
            SessionAmplify.set("diet", ["organic"]);
            expect(Handlebars.helpers.sessionAmpContains("diet", "organic")).toBe(true);
        });

        it("returns false if the amplified session variable selected doesn't contain the inputted item", function () {
            SessionAmplify.set("discounts", ["all"]);
            expect(Handlebars.helpers.sessionAmpContains("discounts", "2")).toBe(false);
        });
    });

    describe("Handlebars sessionAmpEquals helper", function () {
        it("returns true if the amplified session variable selected equals the inputted item", function () {
            SessionAmplify.set("name", "valueHere");
            expect(Handlebars.helpers.sessionAmpEquals("name", "valueHere")).toBe(true);
        });

        it("returns false if the amplified session variable selected doesn't equal the inputted item", function () {
            SessionAmplify.set("name", "valueHere2");
            expect(Handlebars.helpers.sessionAmpEquals("name", "valueHere")).toBe(false);
        });
    });

    describe("Handlebars getSessionAmp helper", function () {
        it("returns selected amplified session variable", function () {
            SessionAmplify.set("openItems", ["sidenav"]);
            expect(Handlebars.helpers.getSessionAmp("openItems")).toEqual(["sidenav"]);
        });
    });
}());

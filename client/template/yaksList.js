Template.yaksList.helpers({
    yaks: function () {
        return Yaks.find({}, {sort: [["score", "desc"]], limit: 8});
    }
});
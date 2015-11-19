/**
 * Created by bin on 2015/11/19.
 */
Meteor.methods({
    yakInsert: function (yak) {
        var postId = Yaks.insert({
            yak: yak,
            score: 0,
            submitted: new Date()
        });
    }
});
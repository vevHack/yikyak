Template.yakItem.events({
    'click': function () {
        Session.set("selected_yak", this._id);
    },
    'click a.yes': function () {
        var yakId = Session.get("selected_yak");
        Yaks.update(yakId, {$inc: {'score': 1}});
    },
    'click a.no': function () {
        var yakId = Session.get("selected_yak");
        Yaks.update(yakId, {$inc: {'score': -1}});
        var postId = Yaks.findOne({_id: this._id});
        if (postId.score <= -3) {
            Yaks.remove({_id: this._id});
        }
    }
});
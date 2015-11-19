/**
 * Created by bin on 2015/11/19.
 */

if (Yaks.find().count() < 1000) {
    for (var i = 0; i < 1000; i++) {
        var postId = Yaks.insert({
            yak: 'jack' + i,
            score: Math.floor(Math.random() * 1000 + 1),
            submitted: new Date()
        });
    }
}
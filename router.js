/**
 * Created by bin on 2015/11/19.
 */
Router.route('/', function () {
    this.render('yaksList');
});
Router.route('/submit', function () {
    this.render('yaksSubmit');
});
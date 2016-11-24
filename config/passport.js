var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports.init = function () {
    console.log('password.local.init');

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function(email, password, done) {
        console.log('password.local.find: ', email);

        User.findOne({ email: email }, function (err, user) {
            console.log('password.local.find: ', user, err);

            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (!user.verifyPassword(password)) {
                return done(null, false);
            }

            return done(null, user);
        });
    }));

    passport.serializeUser(function(user, done) {
        console.log('password.local.serializeUser: ', user);

        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        console.log('password.local.deserializeUser: ', id);

        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};

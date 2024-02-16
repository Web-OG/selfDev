import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/User.js';
import CryptService from '../../../services/CryptService.js';

export const authenticateMiddleware = () => {
  passport.use(new LocalStrategy(
    async (username, password, done) => {
      try {
        const user = await User.findOne({username});
        if (!user) return done(null, false, {message: 'Incorrect username.'});

        const isPasswordValid = await CryptService.compare(password, user.password);

        if (!isPasswordValid) return done(null, false, {message: 'Incorrect password.'});
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  ));

  passport.serializeUser((user, cb) => {
    process.nextTick(() => {
      return cb(null, {
        id: user._id,
        username: user.username,
        roles: user.roles
      });
    });
  });

  passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
      return cb(null, user);
    });
  });
};



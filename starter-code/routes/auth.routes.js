const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const passport = require('passport');
const secure = require('../configs/passport.config');

router.get('/signup', authController.signup);
router.post('/signup', authController.doSignup);

router.get('/', authController.login);
router.post('/login', secure.checkRole("BOSS"), authController.doLogin);

router.post('/auth/fb', passport.authenticate('fb-auth', { scope: ['email'] }));
router.post('/auth/google', passport.authenticate('google-auth', { scope: ['openid', 'profile', 'email']}));
router.get('/auth/:provider/cb', authController.loginWithProviderCallback)

router.get('/logout', authController.logout);

module.exports = router;
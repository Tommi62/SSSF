'use strict';
import express from 'express';
import passport from '../utils/pass';

const router = express.Router();

router.post('/login',
    passport.authenticate('local', {failureRedirect: 'https://google.fi'}),
    (req, res) => {
      console.log('success');
      res.json({message: 'Welcome'});
    });

router.get('/logout', (req, res) => {
    req.logout();
    res.json({message: 'Logout'});
});

export default router;
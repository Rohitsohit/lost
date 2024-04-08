import express from 'express'
 
import {getUser, signin,signup} from '../controller/user.js'
 const router = express.Router();

 router.post('/signin',signin);
 router.post('/signup',signup);
router.get('/:userId',getUser);
 export default router;
 
 
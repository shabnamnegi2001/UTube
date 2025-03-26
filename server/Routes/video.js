import express from 'express';
import likevideocontroller from '../Controllers/like.js';
import  viewscontroller from '../Controllers/views.js';
import {uploadvideo,getallvideos} from '../Controllers/video.js';
import upload from '../Helper/filehelper.jsx';
import auth from '../middleware/auth.js'
const routes = express.Router();

routes.get("/getvideos", getallvideos);
routes.patch("/like/:id", auth, likevideocontroller);
routes.patch("/views/:id", viewscontroller);

export default routes;



import express from 'express'
import {login} from '../Controllers/Auth.js'
import { updatechaneldata } from '../Controllers/channel.js'
import { getallchanels } from '../Controllers/channel.js'

const routes = express.Router();

routes.post('/login', login) 
routes.patch('/update/:id', updatechaneldata)
routes.get('/getallchannel', getallchanels)
// routes.get('/aayu', (req, res) => {
//     res.send("beeeeeeeeeeeee found");
// })

export default routes;
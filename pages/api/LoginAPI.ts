import { createDBConnection } from '../../utils/database'
import { NextApiRequest, NextApiResponse } from 'next'
import {sha256} from "js-sha256";
const db = createDBConnection()

export default async function loginAPI(req: NextApiRequest, res: NextApiResponse) {
  const { ID, Password } = JSON.parse(req.body)
  const [user] = await db.select('*').from('user').where({ ID })
  if (user) {
    if (user.Password === sha256.hmac('jhk', Password)) {
      res.send({ success: true })
    } else {
      res.send({ success: false })
    }
  }else {
    res.send({ success: false })
  }
}
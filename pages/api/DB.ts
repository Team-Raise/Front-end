import { createDBConnection } from '../../utils/database'
import { NextApiRequest, NextApiResponse } from 'next'
const db = createDBConnection()

export default async function DB(req: NextApiRequest, res: NextApiResponse) {
  const dht11 = await db.select('*').from('dht11').orderBy('date', 'desc').limit(1)
  return res.send({ values: dht11 })
}
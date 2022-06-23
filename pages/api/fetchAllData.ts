import { createDBConnection } from '../../utils/database'
import { NextApiRequest, NextApiResponse } from 'next'
const db = createDBConnection()

export default async function fetchAllData(req: NextApiRequest, res: NextApiResponse) {
  const dht11 = await db.select('*').from('dht11').orderBy('date', 'asc')
  return res.send({ fetchData: dht11 })
}
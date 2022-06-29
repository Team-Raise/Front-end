import { createDBConnection } from '../../utils/database'
import { NextApiRequest, NextApiResponse } from 'next'
const db = createDBConnection()

export default async function DeleteData(req: NextApiRequest, res: NextApiResponse) {
  return db.raw('truncate dht11')
}
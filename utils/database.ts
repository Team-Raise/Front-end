import knex, { Knex } from 'knex'

let cachedConnection: Knex | undefined

export const createDBConnection = () => {
  if (cachedConnection) {
    return cachedConnection
  }

  const db = knex({
    client: 'mysql',
    connection: {
      host: '158.247.211.247',
      port: 3306,
      user: 'jinhyo',
      database: 'panel',
    }
  })

  cachedConnection = db
  return db
}
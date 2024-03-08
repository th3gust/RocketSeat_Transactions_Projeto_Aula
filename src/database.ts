import env from './env'
import { knex as setup, Knex } from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('Lascou!')
}

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setup(config)

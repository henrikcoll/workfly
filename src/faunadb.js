import faunadb from 'faunadb';

export { query as q } from 'faunadb';

export const fauna = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});
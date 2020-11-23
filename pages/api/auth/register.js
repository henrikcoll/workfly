import { fauna, q } from '../../../src/faunadb'
import bcrypt from 'bcrypt'

export default async (req, res) => {
  const { email, password, name } = req.body
  console.log(req.body)
  await fauna.query(
    q.Create(
      q.Collection('users'),
      {  data: { name, email, password: await bcrypt.hash(password, 12) } }
    )
  )
}
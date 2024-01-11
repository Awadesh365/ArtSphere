import { g, config } from '@grafbase/sdk'

const user = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  github: g.url().optional(),
  linkedin: g.url().optional(),
  project: g.relation(),

})




export default config({
  schema: g
})

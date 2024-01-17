import { g, auth, config } from '@grafbase/sdk'

const user = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  github: g.url().optional(),
  linkedin: g.url().optional(),
  projects: g.relation(() => project).optional(),

})


const project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  category: g.string().search(),
  createdBy: g.relation(() => user),
})

export default config({
  schema: g
})

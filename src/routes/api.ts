import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const apiRouter = new Hono();


// Database
type Post = {
  id: number
  title: string
  content: string
}

let posts: Post[] = [
  { id: 1, title: 'First Post', content: 'Hihi' },
  { id: 2, title: 'Second Post', content: 'Another post' }
];

let nextId = 3;

// Get all
apiRouter.get('/posts', (c) => {
  return c.json(posts)
});

// Get 1 pot
apiRouter.get('/posts/:id', (c) => {
  const id = Number(c.req.param('id'))
  const post = posts.find(p => p.id === id)

  if (!post) {
    return c.json({ error: 'Post not found' }, 404)
  }

  return c.json(post)
});

// Post crete post
apiRouter.post('/posts', async (c) => {
  const body = await c.req.json()

  if (!body.title || !body.content) {
    return c.json({ error: 'Set title' }, 400)
  }

  const newPost: Post = {
    id: nextId++,
    title: body.title,
    content: body.content
  }

  posts.push(newPost)
  return c.json(newPost, 201)

});

// Put update post
apiRouter.put('/posts/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const body = await c.req.json()

  const post = posts.find(p => p.id === id)

  if (!post) {
    return c.json({ error: 'Post not found' }, 404)
  }

  post.title = body.title ?? post.title
  post.content = body.content ?? post.content

  return c.json(post)
})

// Delete a post
apiRouter.delete('/posts/:id', (c) => {
  const id = Number(c.req.param('id'))
  const index = posts.findIndex(p => p.id === id)

  if (index === -1) {
    return c.json({ error: 'Post not found' }, 404)
  }

  posts.splice(index, 1)
  return c.json({ message: 'Post deleted' })
})

// Root route
apiRouter.get('/', (c) => {
  return c.json({ message: 'Blog API is running' })
});

// Everithing else
apiRouter.all('*', (c) => {
  return c.json({ error: 'Not Found' }, 404)
})

export default apiRouter
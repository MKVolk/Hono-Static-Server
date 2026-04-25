import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'

const staticRouter = new Hono()

// Serve static assets (CSS, JS, images, etc.)
staticRouter.use('/*', serveStatic({ root: './public' }))

// Individual pages
staticRouter.get('/', serveStatic({ path: './public/index.html' }))

staticRouter.get('/blog', serveStatic({ path: './public/blog.html' }))

staticRouter.get('/gallery', serveStatic({ path: './public/gallery.html' }))

staticRouter.get('/projects', serveStatic({ path: './public/projects.html' }))

export default staticRouter
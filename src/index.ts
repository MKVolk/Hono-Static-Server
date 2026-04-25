import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import staticRouter from './routes/static.js'

const app = new Hono()

/*
app.use('/static/*', serveStatic({ root: './public' }));

app.get('/static/', serveStatic({ path: './public/index.html' }));

app.get('/static/blog', serveStatic({ path: './public/blog.html' }));

app.get('/static/gallery', serveStatic({ path: './public/gallery.html' }));

app.get('/static/projects', serveStatic({ path: './public/projects.html' }));
*/

app.route('/static', staticRouter)

const port = 3000;

serve({
  fetch: app.fetch,
  port
});

console.log(`Server at http://localhost:${port}`);
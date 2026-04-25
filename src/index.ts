import { serve } from '@hono/node-server'
import { Hono } from 'hono'
//import { serveStatic } from '@hono/node-server/serve-static'
import staticRouter from './routes/static.js'
import apiRouter from './routes/api.js'

const app = new Hono();


//app.use('/*', serveStatic({ root: './public' }))

app.route('/static', staticRouter);

app.route('/api', apiRouter);

const port = 3000;

serve({
  fetch: app.fetch,
  port
});

console.log(`Server at http://localhost:${port}`);
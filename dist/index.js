import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';
const app = new Hono();
app.use('/*', serveStatic({ root: './public' }));
app.get('/', serveStatic({ path: './public/index.html' }));
app.get('/blog', serveStatic({ path: './public/blog.html' }));
app.get('/gallery', serveStatic({ path: './public/gallery.html' }));
app.get('/projects', serveStatic({ path: './public/projects.html' }));
//app.get('/model-demo', serveStatic({ path: './public/model-demo.html' }));
const port = 3000;
serve({
    fetch: app.fetch,
    port
});
console.log(`Server at http://localhost:${port}`);

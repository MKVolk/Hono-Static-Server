import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';
const staticRouter = new Hono();
// Individual pages
staticRouter.get('/', serveStatic({ path: './public/index.html' }));
staticRouter.get('/blog', serveStatic({ path: './public/blog.html' }));
staticRouter.get('/gallery', serveStatic({ path: './public/gallery.html' }));
staticRouter.get('/projects', serveStatic({ path: './public/projects.html' }));
// Assets
// Serve static assets (CSS, JS, images, etc.)
//staticRouter.use('/*', serveStatic({ root: './public' }))
staticRouter.get('/css/neo.css', serveStatic({ path: './public/css/neo.css' }));
staticRouter.get('/css/glowy.css', serveStatic({ path: './public/css/glowy.css' }));
staticRouter.get('/javascript/index.js', serveStatic({ path: './public/javascript/index.js' }));
staticRouter.get('/javascript/mentos.js', serveStatic({ path: './public/javascript/mentos.js' }));
staticRouter.get('/media/KatIcon.ico', serveStatic({ path: './public/media/KatIcon.ico' }));
staticRouter.get('/media/vaporPC.gltf', serveStatic({ path: './public/media/vaporPC.gltf' }));
export default staticRouter;

import { Hono } from 'hono';
const apiRouter = new Hono();
// Individual pages
apiRouter.get('/');
export default apiRouter;

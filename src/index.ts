import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello from Bun + Hono + Cloudflare Worker!'));
app.get('/api/hello', (c) => c.json({ message: 'Hello from /api/hello' }));

export default app;

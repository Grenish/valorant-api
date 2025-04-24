import { Hono } from 'hono';
import { 
  getAllAgents, 
  getAgentByName, 
  getAgentById, 
  getAgentProfileImageByName,
  getAgentProfileIconByName,
  getAgentProfileImageById,
  getAgentProfileIconById
} from './controllers/agentController';

const app = new Hono();

app.get('/', (c) => c.text('Welcome to Valorant API - Access game agent data through our endpoints'));

app.get('/api/hello', (c) => c.json({ 
  message: 'Welcome to Valorant API',
  status: 'online',
  version: '1.0.0' 
}));

app.get('/api/ping', (c) => c.json({ 
  message: 'Pong!',
  status: 'online',
  version: '1.0.0' 
}));

app.get('/api/agents', getAllAgents);
app.get('/api/agents/:name', getAgentByName);
app.get('/api/agent/id/:id', getAgentById);

// New routes for profile images and icons
app.get('/api/agents/:name/profile-image', getAgentProfileImageByName);
app.get('/api/agents/:name/profile-icon', getAgentProfileIconByName);
app.get('/api/agent/id/:id/profile-image', getAgentProfileImageById);
app.get('/api/agent/id/:id/profile-icon', getAgentProfileIconById);

export default app;

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

app.get('/api/docs', (c) => c.json({
  apiName: 'Valorant API',
  version: '1.0.0',
  description: 'API for accessing Valorant game agent data',
  endpoints: [
    {
      path: '/',
      method: 'GET',
      description: 'Welcome message'
    },
    {
      path: '/api/hello',
      method: 'GET',
      description: 'API information and status'
    },
    {
      path: '/api/ping',
      method: 'GET',
      description: 'API health check endpoint'
    },
    {
      path: '/api/docs',
      method: 'GET',
      description: 'API documentation and endpoint information'
    },
    {
      path: '/api/agents',
      method: 'GET',
      description: 'Get all agents'
    },
    {
      path: '/api/agents/:name',
      method: 'GET',
      description: 'Get agent by name',
      parameters: [
        {
          name: 'name',
          in: 'path',
          description: 'Agent name',
          required: true
        }
      ]
    },
    {
      path: '/api/agent/id/:id',
      method: 'GET',
      description: 'Get agent by ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Agent ID',
          required: true
        }
      ]
    },
    {
      path: '/api/agents/:name/profile-image',
      method: 'GET',
      description: 'Get agent profile image by name',
      parameters: [
        {
          name: 'name',
          in: 'path',
          description: 'Agent name',
          required: true
        }
      ]
    },
    {
      path: '/api/agents/:name/profile-icon',
      method: 'GET',
      description: 'Get agent profile icon by name',
      parameters: [
        {
          name: 'name',
          in: 'path',
          description: 'Agent name',
          required: true
        }
      ]
    },
    {
      path: '/api/agent/id/:id/profile-image',
      method: 'GET',
      description: 'Get agent profile image by ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Agent ID',
          required: true
        }
      ]
    },
    {
      path: '/api/agent/id/:id/profile-icon',
      method: 'GET',
      description: 'Get agent profile icon by ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Agent ID',
          required: true
        }
      ]
    }
  ]
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

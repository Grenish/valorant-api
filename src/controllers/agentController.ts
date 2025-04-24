import { Context } from 'hono';
import agentsData from '../../valorant-agent.json';
import type { Agent, AgentsData } from '../types/agent';

// Type assertion to ensure agentsData has the correct structure
const typedAgentsData = agentsData as AgentsData;

/**
 * Get all Valorant agents
 */
export const getAllAgents = (c: Context): Response => {
  try {
    return c.json(typedAgentsData.agents);
  } catch (error) {
    console.error('Error fetching agents:', error);
    return c.json({ error: 'Failed to fetch agents' }, 500);
  }
};

/**
 * Get a specific Valorant agent by name
 */
export const getAgentByName = (c: Context): Response => {
  try {
    const name = c.req.param('name');
    
    if (!name) {
      return c.json({ error: 'Agent name is required' }, 400);
    }
    
    const agent = typedAgentsData.agents.find(
      (agent: Agent) => agent.name.toLowerCase() === name.toLowerCase()
    );

    if (!agent) {
      return c.json({ error: 'Agent not found' }, 404);
    }

    return c.json(agent);
  } catch (error) {
    console.error('Error fetching agent by name:', error);
    return c.json({ error: 'Failed to fetch agent' }, 500);
  }
};

/**
 * Get a specific Valorant agent by ID
 */
export const getAgentById = (c: Context): Response => {
  try {
    const id = c.req.param('id');
    
    if (!id) {
      return c.json({ error: 'Agent ID is required' }, 400);
    }
    
    // Convert the ID parameter to a number for comparison
    const agentId = parseInt(id, 10);
    
    // Check if the parsed ID is a valid number
    if (isNaN(agentId)) {
      return c.json({ error: 'Invalid agent ID format' }, 400);
    }
    
    const agent = typedAgentsData.agents.find(
      (agent: Agent) => agent.agent_id === agentId
    );

    if (!agent) {
      return c.json({ error: 'Agent not found' }, 404);
    }

    return c.json(agent);
  } catch (error) {
    console.error('Error fetching agent by ID:', error);
    return c.json({ error: 'Failed to fetch agent' }, 500);
  }
};

/**
 * Get an agent's profile image by name
 */
export const getAgentProfileImageByName = (c: Context): Response => {
  try {
    const name = c.req.param('name');
    
    if (!name) {
      return c.json({ error: 'Agent name is required' }, 400);
    }
    
    const agent = typedAgentsData.agents.find(
      (agent: Agent) => agent.name.toLowerCase() === name.toLowerCase()
    );

    if (!agent) {
      return c.json({ error: 'Agent not found' }, 404);
    }

    return c.json({ 
      name: agent.name,
      profile_image: agent.profile_image 
    });
  } catch (error) {
    console.error('Error fetching agent profile image:', error);
    return c.json({ error: 'Failed to fetch agent profile image' }, 500);
  }
};

/**
 * Get an agent's profile icon by name
 */
export const getAgentProfileIconByName = (c: Context): Response => {
  try {
    const name = c.req.param('name');
    
    if (!name) {
      return c.json({ error: 'Agent name is required' }, 400);
    }
    
    const agent = typedAgentsData.agents.find(
      (agent: Agent) => agent.name.toLowerCase() === name.toLowerCase()
    );

    if (!agent) {
      return c.json({ error: 'Agent not found' }, 404);
    }

    return c.json({ 
      name: agent.name,
      profile_icon: agent.profile_icon 
    });
  } catch (error) {
    console.error('Error fetching agent profile icon:', error);
    return c.json({ error: 'Failed to fetch agent profile icon' }, 500);
  }
};

/**
 * Get an agent's profile image by ID
 */
export const getAgentProfileImageById = (c: Context): Response => {
  try {
    const id = c.req.param('id');
    
    if (!id) {
      return c.json({ error: 'Agent ID is required' }, 400);
    }
    
    const agentId = parseInt(id, 10);
    
    if (isNaN(agentId)) {
      return c.json({ error: 'Invalid agent ID format' }, 400);
    }
    
    const agent = typedAgentsData.agents.find(
      (agent: Agent) => agent.agent_id === agentId
    );

    if (!agent) {
      return c.json({ error: 'Agent not found' }, 404);
    }

    return c.json({ 
      agent_id: agent.agent_id,
      name: agent.name,
      profile_image: agent.profile_image 
    });
  } catch (error) {
    console.error('Error fetching agent profile image by ID:', error);
    return c.json({ error: 'Failed to fetch agent profile image' }, 500);
  }
};

/**
 * Get an agent's profile icon by ID
 */
export const getAgentProfileIconById = (c: Context): Response => {
  try {
    const id = c.req.param('id');
    
    if (!id) {
      return c.json({ error: 'Agent ID is required' }, 400);
    }
    
    const agentId = parseInt(id, 10);
    
    if (isNaN(agentId)) {
      return c.json({ error: 'Invalid agent ID format' }, 400);
    }
    
    const agent = typedAgentsData.agents.find(
      (agent: Agent) => agent.agent_id === agentId
    );

    if (!agent) {
      return c.json({ error: 'Agent not found' }, 404);
    }

    return c.json({ 
      agent_id: agent.agent_id,
      name: agent.name,
      profile_icon: agent.profile_icon 
    });
  } catch (error) {
    console.error('Error fetching agent profile icon by ID:', error);
    return c.json({ error: 'Failed to fetch agent profile icon' }, 500);
  }
};

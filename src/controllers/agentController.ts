import { Context } from 'hono';
import type { Agent } from '../types/agent';
import { supabase } from '../lib/supabase';

/**
 * Get all Valorant agents
 */
export const getAllAgents = async (c: Context): Promise<Response> => {
  try {
    const { data: agents, error } = await supabase
      .from('agents')
      .select('*');
    
    if (error) throw error;
    
    return c.json(agents);
  } catch (error) {
    console.error('Error fetching agents:', error);
    return c.json({ error: 'Failed to fetch agents' }, 500);
  }
};

/**
 * Get a specific Valorant agent by name
 */
export const getAgentByName = async (c: Context): Promise<Response> => {
  try {
    const name = c.req.param('name');
    
    if (!name) {
      return c.json({ error: 'Agent name is required' }, 400);
    }
    
    const { data: agent, error } = await supabase
      .from('agents')
      .select('*')
      .ilike('name', name)
      .single();
    
    if (error) {
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
export const getAgentById = async (c: Context): Promise<Response> => {
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
    
    const { data: agent, error } = await supabase
      .from('agents')
      .select('*')
      .eq('agent_id', agentId)
      .single();
    
    if (error) {
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
export const getAgentProfileImageByName = async (c: Context): Promise<Response> => {
  try {
    const name = c.req.param('name');
    
    if (!name) {
      return c.json({ error: 'Agent name is required' }, 400);
    }
    
    const { data: agent, error } = await supabase
      .from('agents')
      .select('name, profile_image')
      .ilike('name', name)
      .single();
    
    if (error) {
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
export const getAgentProfileIconByName = async (c: Context): Promise<Response> => {
  try {
    const name = c.req.param('name');
    
    if (!name) {
      return c.json({ error: 'Agent name is required' }, 400);
    }
    
    const { data: agent, error } = await supabase
      .from('agents')
      .select('name, profile_icon')
      .ilike('name', name)
      .single();
    
    if (error) {
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
export const getAgentProfileImageById = async (c: Context): Promise<Response> => {
  try {
    const id = c.req.param('id');
    
    if (!id) {
      return c.json({ error: 'Agent ID is required' }, 400);
    }
    
    const agentId = parseInt(id, 10);
    
    if (isNaN(agentId)) {
      return c.json({ error: 'Invalid agent ID format' }, 400);
    }
    
    const { data: agent, error } = await supabase
      .from('agents')
      .select('agent_id, name, profile_image')
      .eq('agent_id', agentId)
      .single();
    
    if (error) {
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
export const getAgentProfileIconById = async (c: Context): Promise<Response> => {
  try {
    const id = c.req.param('id');
    
    if (!id) {
      return c.json({ error: 'Agent ID is required' }, 400);
    }
    
    const agentId = parseInt(id, 10);
    
    if (isNaN(agentId)) {
      return c.json({ error: 'Invalid agent ID format' }, 400);
    }
    
    const { data: agent, error } = await supabase
      .from('agents')
      .select('agent_id, name, profile_icon')
      .eq('agent_id', agentId)
      .single();
    
    if (error) {
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

import { supabase } from '../src/lib/supabase';
import agentsData from '../valorant-agent.json';
import type { Agent } from '../src/types/agent';

/**
 * Upload all agents from the JSON file to Supabase
 */
const uploadAgents = async () => {
  const { agents } = agentsData;
  
  console.log(`Starting upload of ${agents.length} agents to Supabase...`);
  
  // First check if we can connect to Supabase
  const { data: testData, error: testError } = await supabase
    .from('agents')
    .select('count(*)');
  
  if (testError) {
    console.error('Failed to connect to Supabase or query the agents table:', testError);
    console.error('Please check your Supabase URL and key in .env file');
    return;
  }
  
  console.log('Successfully connected to Supabase. Beginning data upload...');
  
  // Try uploading one agent first as a test
  try {
    const testAgent = agents[0] as Agent;
    console.log(`Testing with first agent: ${testAgent.name}`);
    
    const { error: singleError } = await supabase
      .from('agents')
      .upsert({
        agent_id: testAgent.agent_id,
        name: testAgent.name,
        role: testAgent.role,
        role_icon: testAgent.role_icon,
        origin: testAgent.origin,
        release_patch: testAgent.release_patch,
        profile_icon: testAgent.profile_icon,
        profile_image: testAgent.profile_image,
        abilities: testAgent.abilities,
        gallery: testAgent.gallery,
        story: testAgent.story
      }, { onConflict: 'agent_id' });
    
    if (singleError) {
      console.error(`Error in test upload for ${testAgent.name}:`, singleError);
      console.log('Aborting full upload until test succeeds');
      return;
    }
    
    console.log(`Test upload for ${testAgent.name} successful! Proceeding with full upload...`);
  } catch (err) {
    console.error('Exception during test upload:', err);
    return;
  }
  
  // If test was successful, proceed with all agents
  for (const agent of agents) {
    try {
      const { 
        agent_id, name, role, role_icon, abilities, origin, 
        release_patch, profile_icon, profile_image, gallery, story 
      } = agent as Agent;
      
      console.log(`Uploading agent: ${name} (ID: ${agent_id})`);
      
      const { error } = await supabase
        .from('agents')
        .upsert({
          agent_id,
          name,
          role,
          role_icon,
          origin,
          release_patch,
          profile_icon,
          profile_image,
          abilities,
          gallery,
          story
        }, { onConflict: 'agent_id' });
      
      if (error) {
        console.error(`Error uploading agent ${name}:`, error);
      } else {
        console.log(`Successfully uploaded agent: ${name}`);
      }
    } catch (err) {
      console.error(`Exception while processing agent:`, err);
    }
  }
  
  console.log('Upload complete');
};

// Run the upload function
uploadAgents().catch(err => {
  console.error('Fatal error in uploadAgents:', err);
});

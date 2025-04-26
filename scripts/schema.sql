-- Drop the table if it exists (for clean recreation)
DROP TABLE IF EXISTS agents;

-- Create agents table with JSON storage for nested data
CREATE TABLE agents (
  agent_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  role_icon TEXT,  -- Making this nullable in case some agents don't have it
  origin TEXT NOT NULL,
  release_patch TEXT NOT NULL,
  profile_icon TEXT NOT NULL,
  profile_image TEXT NOT NULL,
  abilities JSONB NOT NULL,
  gallery JSONB NOT NULL,
  story JSONB NOT NULL
);

-- Create indexes for common search queries
CREATE INDEX idx_agent_name ON agents(name);
CREATE INDEX idx_agent_role ON agents(role);
CREATE INDEX idx_agent_origin ON agents(origin);

-- Grant permissions (adjust as necessary for your Supabase setup)
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read agents
CREATE POLICY "Allow public read access" ON agents
  FOR SELECT
  USING (true);
  
-- Create policy to allow authenticated service role to insert/update agents
CREATE POLICY "Allow service role to manage agents" ON agents
  FOR ALL
  USING (auth.role() = 'service_role');

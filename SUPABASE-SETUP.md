# Supabase Setup for Valorant API

This guide will help you set up Supabase for the Valorant API.

## 1. Create a Supabase Project

1. Sign up or log in at [supabase.com](https://supabase.com)
2. Create a new project
3. Choose a name and password
4. Wait for your database to be ready

## 2. Set Up Environment Variables

1. In your Supabase project, go to Settings > API
2. Copy the "Project URL" and "anon/public" key
3. Create a `.env` file in the project root:

```
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key
```

## 3. Create Database Schema

1. In your Supabase project, go to SQL Editor
2. Copy the contents of `scripts/schema.sql` into the SQL editor
3. Run the SQL script to create the necessary tables and permissions

## 4. Test the Connection

Run:

```
bun run check-supabase
```

You should see "Successfully connected to Supabase!" if everything is set up correctly.

## 5. Upload Agent Data

Run:

```
bun run upload-agents
```

This will upload all the agent data from `valorant-agent.json` to your Supabase database.

## Troubleshooting

### Empty Error Objects

If you see empty error objects (`Error uploading agent Name: {}`), this usually means:

1. Check your .env file for correct Supabase credentials
2. Make sure the SQL schema was applied correctly
3. Verify that the Supabase project is fully initialized (can take a few minutes after creation)
4. Try running the check-supabase script to verify connection

### JSON Column Errors

Supabase requires JSONB columns for complex objects. If you encounter errors:

1. Make sure the schema uses JSONB for abilities, gallery, and story columns
2. Verify that the data being sent is valid JSON

### Permissions Issues

1. Make sure Row Level Security policies are set correctly in Supabase
2. The anon key should have permission to read and write to the agents table

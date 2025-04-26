# Valorant API Documentation

## Overview

The Valorant API provides programmatic access to retrieve information about agents from the game Valorant. This RESTful API returns data in JSON format and doesn't require authentication for access.

## Base URL

```
TBA
```

## Endpoints

### Welcome

```
GET /
```

Returns a welcome message for the API.

**Response**

```
Status: 200 OK
Content-Type: text/plain

Welcome to Valorant API - Access game agent data through our endpoints
```

### API Status

```
GET /api/hello
```

Check if the API is up and running.

**Response**

```json
Status: 200 OK
Content-Type: application/json

{
  "message": "Welcome to Valorant API",
  "status": "online",
  "version": "1.0.0"
}
```

### Get All Agents

```
GET /api/agents
```

Retrieves information about all Valorant agents.

**Response**

```json
Status: 200 OK
Content-Type: application/json

[
  {
    "agent_id": 1,
    "name": "Brimstone",
    "role": "Controller",
    "role_icon": "https://res.cloudinary.com/...",
    "abilities": [
      {
        "icon": "https://res.cloudinary.com/...",
        "name": "Incendiary",
        "description": "Launch a grenade that deploys a damaging field of fire.",
        "category": "Basic",
        "price": 250
      },
      // Additional abilities...
    ],
    "origin": "USA",
    "release_patch": "Beta",
    // Additional agent information...
  },
  // Additional agents...
]
```

### Get Agent by Name

```
GET /api/agents/:name
```

Retrieves information about a specific agent by name (case-insensitive).

**Parameters**

| Name | Required | Description |
|------|----------|-------------|
| name | Yes      | The name of the agent to retrieve (e.g., "Brimstone", "viper", etc.) |

**Example Request**

```
GET /api/agents/brimstone
```

**Success Response**

```json
Status: 200 OK
Content-Type: application/json

{
  "agent_id": 1,
  "name": "Brimstone",
  "role": "Controller",
  "role_icon": "https://res.cloudinary.com/...",
  "abilities": [
    // Agent abilities...
  ],
  // Additional agent information...
}
```

**Error Response**

```json
Status: 404 Not Found
Content-Type: application/json

{
  "error": "Agent not found"
}
```

### Get Agent by ID

```
GET /api/agent/id/:id
```

Retrieves information about a specific agent by their unique ID.

**Parameters**

| Name | Required | Description |
|------|----------|-------------|
| id   | Yes      | The numeric ID of the agent to retrieve |

**Example Request**

```
GET /api/agent/id/1
```

**Success Response**

```json
Status: 200 OK
Content-Type: application/json

{
  "agent_id": 1,
  "name": "Brimstone",
  "role": "Controller",
  // Additional agent information...
}
```

**Error Response**

```json
Status: 404 Not Found
Content-Type: application/json

{
  "error": "Agent not found"
}
```

### Get Agent Profile Image by Name

```
GET /api/agents/:name/profile-image
```

Retrieves the profile image URL for a specific agent by name.

**Parameters**

| Name | Required | Description |
|------|----------|-------------|
| name | Yes      | The name of the agent (case-insensitive) |

**Example Request**

```
GET /api/agents/viper/profile-image
```

**Success Response**

```json
Status: 200 OK
Content-Type: application/json

{
  "name": "Viper",
  "profile_image": "https://res.cloudinary.com/..."
}
```

### Get Agent Profile Icon by Name

```
GET /api/agents/:name/profile-icon
```

Retrieves the profile icon URL for a specific agent by name.

**Parameters**

| Name | Required | Description |
|------|----------|-------------|
| name | Yes      | The name of the agent (case-insensitive) |

**Example Request**

```
GET /api/agents/jett/profile-icon
```

**Success Response**

```json
Status: 200 OK
Content-Type: application/json

{
  "name": "Jett",
  "profile_icon": "https://res.cloudinary.com/..."
}
```

### Get Agent Profile Image by ID

```
GET /api/agent/id/:id/profile-image
```

Retrieves the profile image URL for a specific agent by ID.

**Parameters**

| Name | Required | Description |
|------|----------|-------------|
| id   | Yes      | The numeric ID of the agent |

**Example Request**

```
GET /api/agent/id/3/profile-image
```

**Success Response**

```json
Status: 200 OK
Content-Type: application/json

{
  "agent_id": 3,
  "name": "Sage",
  "profile_image": "https://res.cloudinary.com/..."
}
```

### Get Agent Profile Icon by ID

```
GET /api/agent/id/:id/profile-icon
```

Retrieves the profile icon URL for a specific agent by ID.

**Parameters**

| Name | Required | Description |
|------|----------|-------------|
| id   | Yes      | The numeric ID of the agent |

**Example Request**

```
GET /api/agent/id/5/profile-icon
```

**Success Response**

```json
Status: 200 OK
Content-Type: application/json

{
  "agent_id": 5,
  "name": "Phoenix",
  "profile_icon": "https://res.cloudinary.com/..."
}
```

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests:

| Code | Description |
|------|-------------|
| 200  | OK - The request was successful |
| 400  | Bad Request - The request was malformed or missing required parameters |
| 404  | Not Found - The specified agent could not be found |
| 500  | Internal Server Error - Something went wrong on the server |

Error responses will include a JSON object with an `error` property that provides more information about the error.

## Data Models

### Agent

| Field         | Type   | Description |
|---------------|--------|-------------|
| agent_id      | number | Unique identifier for the agent |
| name          | string | Agent's name |
| role          | string | Agent's role (e.g., Controller, Sentinel) |
| role_icon     | string | URL to agent's role icon |
| abilities     | array  | List of agent's abilities |
| origin        | string | Agent's country of origin |
| release_patch | string | Game patch when agent was released |
| profile_icon  | string | URL to agent's icon |
| profile_image | string | URL to agent's full image |
| gallery       | array  | List of gallery image URLs |
| story         | object | Agent's background story |

### Ability

| Field       | Type   | Description |
|-------------|--------|-------------|
| icon        | string | URL to ability icon |
| name        | string | Name of the ability |
| description | string | Description of what the ability does |
| category    | string | Type of ability (Basic, Signature, Ultimate) |
| price       | number | In-game cost to purchase (if applicable) |
| points      | number | Ultimate points required (for ultimate abilities) |

## Development Setup

### Prerequisites
- Node.js v16+ or Bun runtime
- Supabase account

### Setting up Supabase
1. Create a new project in [Supabase](https://supabase.io)
2. Run the schema.sql script in Supabase SQL Editor:
   ```sql
   -- Create agents table with JSON storage for nested data
   CREATE TABLE agents (
     agent_id INTEGER PRIMARY KEY,
     name TEXT NOT NULL,
     role TEXT NOT NULL,
     role_icon TEXT NOT NULL,
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
   ```

3. Copy your Supabase URL and anon key from the API settings
4. Create a `.env` file based on `.env.example` with your Supabase credentials:
   ```
   SUPABASE_URL=your-supabase-project-url
   SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

5. Run the upload script to populate the database:
   ```
   bun run scripts/uploadAgentsToSupabase.ts
   ```

### Installation
1. Clone the repository
2. Install dependencies:
   ```
   bun install
   ```
3. Start the development server:
   ```
   bun run dev
   ```

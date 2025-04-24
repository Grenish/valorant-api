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

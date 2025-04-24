/**
 * Interface representing an ability of an agent
 */
export interface Ability {
  icon: string;
  name: string;
  description: string;
  category: string;
  price?: number;
  points?: number;
}

/**
 * Interface representing a relationship between agents
 */
export interface Relationship {
  name: string;
  relationship: string;
  impact: string;
}

/**
 * Interface representing an agent's background
 */
export interface Background {
  formerProfession: string;
  militaryService: string;
  corporateService: string;
  keyRelationships: Relationship[];
}

/**
 * Interface representing an agent's role in the Valiant Protocol
 */
export interface ValiantProtocol {
  role: string;
  coFounders: string[];
  leadershipStyle: string;
  notableEvent: string;
}

/**
 * Interface representing a conflict the agent was involved in
 */
export interface Conflict {
  name: string;
  location: string;
  threat: string;
  opposingForce: string;
  actionTaken: string;
}

/**
 * Interface representing an agent's current role
 */
export interface CurrentRole {
  position: string;
  duties: string[];
}

/**
 * Interface representing an agent's traits
 */
export interface Traits {
  strengths: string[];
  values: string[];
}

/**
 * Interface representing an agent's story
 */
export interface AgentStory {
  agent: string;
  origin: string;
  background: Background;
  valiantProtocol: ValiantProtocol;
  conflicts: Conflict[];
  currentRole: CurrentRole;
  traits: Traits;
  [key: string]: any; // For dynamic fields like orbitalArsenal, toxicArsenal, etc.
  summary: string;
}

/**
 * Interface representing a Valorant agent
 */
export interface Agent {
  agent_id: number;
  name: string;
  role: string;
  role_icon: string;
  abilities: Ability[];
  origin: string;
  release_patch: string;
  profile_icon: string;
  profile_image: string;
  gallery: string[];
  story: AgentStory;
}

/**
 * Interface representing the complete agents data structure
 */
export interface AgentsData {
  agents: Agent[];
}

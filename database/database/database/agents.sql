CREATE TABLE agents (
  agent_id UUID PRIMARY KEY,
  level TEXT, -- road, zone, country
  earnings DECIMAL,
  region TEXT,
  performance_score INT
);

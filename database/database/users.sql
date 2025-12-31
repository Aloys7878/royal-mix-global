CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  identity_id UUID REFERENCES identities(id),
  type TEXT, -- citizen, creator, agent, gov
  status TEXT,
  last_active TIMESTAMP
);

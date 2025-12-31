CREATE TABLE identities (
  id UUID PRIMARY KEY,
  name TEXT,
  phone TEXT,
  country TEXT,
  role TEXT,
  trust_score INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

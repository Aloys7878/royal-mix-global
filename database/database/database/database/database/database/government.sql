CREATE TABLE projects (
  project_id UUID PRIMARY KEY,
  ministry TEXT,
  budget DECIMAL,
  progress INT,
  trust_score INT
);

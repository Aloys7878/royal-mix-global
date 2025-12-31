CREATE TABLE media (
  media_id UUID PRIMARY KEY,
  type TEXT, -- video, image, audio
  url TEXT,
  creator_id UUID,
  views INT DEFAULT 0,
  indexed BOOLEAN DEFAULT false
);

DROP TABLE IF EXISTS downloads
CREATE TABLE downloads (
  id BIGSERIAL PRIMARY KEY,
  tweet VARCHAR(200),
  video VARCHAR(200),
  createdAt VARCHAR(20)
) 
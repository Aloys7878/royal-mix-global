CREATE TABLE wallets (
  wallet_id UUID PRIMARY KEY,
  owner_id UUID,
  balance DECIMAL,
  currency TEXT
);

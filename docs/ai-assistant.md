# Royal Mix AI Assistant — Overview

## Endpoints
- POST /ai/assistant/chat
  - body: { userId, message }
  - returns: { reply, tools }

## Memory
- Uses Supabase/Postgres + pgvector
- saveMemory(userId, text) persists human/assistant messages
- queryMemory(userId, query) returns nearest context

## Planner Agent
- Decides whether to call tools
- Calls toolRouter.runTool for external services (marketplace, profile)
- Synthesizes final answer

## Environment
Add these secrets to GitHub or Lambda:
- OPENAI_API_KEY
- OPENAI_CHAT_MODEL (optional)
- OPENAI_EMBED_MODEL (optional)
- SUPABASE_URL
- SUPABASE_SERVICE_KEY
- API_BASE_URL

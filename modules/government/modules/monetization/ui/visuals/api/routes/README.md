# Royal Mix Global – API Routes Map

All APIs are versioned, public-first, and AI-indexed.

---

## 🔐 AUTH
POST   /api/v1/auth/login  
POST   /api/v1/auth/register  
GET    /api/v1/auth/verify  

---

## 🧠 AI & DISCOVERY
GET    /api/v1/search?q=
POST   /api/v1/search/voice
POST   /api/v1/search/video
GET    /api/v1/recommendations

---

## 🎥 MEDIA
POST   /api/v1/media/upload
GET    /api/v1/media/:id
GET    /api/v1/media/trending

---

## 🧑‍💼 AGENTS
POST   /api/v1/agents/register
GET    /api/v1/agents/:id
GET    /api/v1/agents/earnings

---

## 💰 PAYMENTS
POST   /api/v1/payments/initiate
GET    /api/v1/payments/status
GET    /api/v1/wallet/balance

---

## 🏛️ GOVERNMENT
GET    /api/v1/gov/projects
GET    /api/v1/gov/budgets
POST   /api/v1/gov/feedback

---

## 🚨 CRISIS
GET    /api/v1/crisis/alerts
POST   /api/v1/crisis/report
GET    /api/v1/crisis/resources

---

## 🌍 PRINCIPLE
APIs are services of a digital nation.

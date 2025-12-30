# Royal Mix Global – Database Schema (High Level)

---

## 👤 USERS
- id
- name
- phone
- role (citizen, agent, gov, creator)
- trust_score
- created_at

---

## 🧑‍💼 AGENTS
- id
- user_id
- level (local/zone/national)
- earnings
- performance_score

---

## 🎥 MEDIA
- id
- type (video, image, text)
- creator_id
- views
- revenue

---

## 💰 TRANSACTIONS
- id
- from_user
- to_user
- amount
- currency
- method
- status

---

## 🏛️ GOVERNMENT_PROJECTS
- id
- title
- budget
- spent
- progress
- trust_index

---

## 🚨 CRISIS_EVENTS
- id
- type
- location
- severity
- status

---

## 🧠 AI_LOGS
- id
- entity_type
- action
- insights_generated
- timestamp

---

## PRINCIPLE
Data supports life, trust, and daily action.

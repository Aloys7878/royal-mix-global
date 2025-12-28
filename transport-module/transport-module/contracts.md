# Driver & Agent Contract Logic

## 1. Payment Rules

- Drivers receive base commission per trip:
  - Passenger: 5-8% of fare
  - Delivery: fixed $0.5-$1.0
- Road Agents:
  - Onboard & dispatch orders
  - Earn 2-5% per transaction
  - Bonuses for meeting targets
- Zone Agents:
  - Manage multiple drivers
  - Earn 1-2% commission on aggregated orders
  - Monthly performance bonus

## 2. Conditions

- Commission is released only if:
  - Driver completes trip/delivery
  - Road agent confirms order executed
  - Customer feedback ≥ threshold
- Bonuses accrue automatically:
  - Daily, weekly, monthly
  - Stored in agent/driver wallet

## 3. Data Tracking

- Every action logged
- Immutable (blockchain optional)
- Real-time analytics for compliance

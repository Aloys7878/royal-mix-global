AgentProfile:
  agentId: RMG-AF-XXXX
  fullName: string
  phoneNumber: string
  email: optional
  nationalId: string
  photoUrl: string
  address:
    country: string
    province: string
    district: string
    road: string
    gps: lat,long
  agentType: ROAD | VILLAGE | ZONE
  registrationDate: timestamp
  status: pending | active | suspended


we# Royal Mix Global

Royal Mix Global is a multi-ecosystem AI-powered platform built for:
- Mobile (Expo React Native)
- Web (React / Next.js)
- Pi Browser (Mini App)
- API Gateway (AWS/Lambda)
- Cloud integrations (Cloudinary, S3, Firebase optional)
- Secure global-scale digital services

## Tech Stack
- Expo React Native
- TypeScript
- Cloudinary Upload API
- AWS API Gateway + Lambda
- GitHub Actions (CI/CD)
- Pi Browser MiniApp support
- Global CDN optimization

## Features
- Secure media upload (Cloudinary)
- User system foundation
- AI assistant integration
- Scalable app structure
- Reusable components library

## Structure
ROYAL-MIX-GLOBAL/
│
├── app/                    # Expo App source
│   ├── components/
│   ├── screens/
│   ├── services/
│   │    └── api/
│   │         ├── cloudinary.ts
│   │         ├── apiGateway.ts
│   │         └── config.ts
│   ├── hooks/
│   ├── utils/
│   ├── assets/
│   └── App.tsx
│
├── cloud/
│   ├── aws/
│   │    ├── lambda/
│   │    │    └── uploadHandler.js
│   │    └── api-gateway.yaml
│   └── cloudinary/
│        └── preset-config.md
│
├── pi-browser/
│    ├── miniapp-config.json
│    └── index.html
│
├── docs/
│    ├── architecture.md
│    ├── api-endpoints.md
│    ├── cloudinary-setup.md
│    └── expo-setup.md
│
├── package.json
├── README.md
└── .gitignore

<div align="center">

# 🚀 Startup Navigator

### _The Ultimate AI-Powered Startup Guide for Indian Entrepreneurs_

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Material_UI-MUI_6-007FFF?style=for-the-badge&logo=mui" />
  <img src="https://img.shields.io/badge/Groq-Llama_3.3-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase" />
  <img src="https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge" />
</p>

<p align="center">
An AI-powered full-stack platform that helps Indian entrepreneurs navigate company registration, funding, legal compliance, government schemes, and business growth with intelligent AI assistance.
</p>

---

### 🌐 Live Demo

🔗 **Application:** https://your-live-link.vercel.app

### 🔐 Admin Demo

**Email:** test@example.com

**Password:** **\*\*\*\***

</div>

---

# 📖 Overview

**Startup Navigator** is a modern AI-powered web application designed specifically for Indian startups and entrepreneurs.

Instead of searching across multiple government websites, blogs, and legal portals, users can ask natural language questions and instantly receive AI-generated guidance backed by an organized startup knowledge base.

The application combines:

- 🤖 AI-powered consultation
- 📚 Dynamic startup knowledge management
- 🔐 Secure authentication
- 📊 Admin analytics
- ⚡ Lightning-fast performance
- 📱 Fully responsive UI

---

# ✨ Features

## 👨‍💼 User Features

- 🔍 AI Startup Assistant
- 📚 Explore Startup Resources
- 📝 Search History
- 💼 Business Registration Guidance
- 💰 Funding & Investment Information
- ⚖ Legal & Compliance Help
- 📱 Responsive Mobile Experience
- 🔐 Secure Authentication

---

## 👨‍💻 Admin Features

- Secure Admin Dashboard
- Create Articles
- Update Articles
- Delete Articles
- View Startup Knowledge Statistics
- Manage Startup Resources
- Real-time Database Synchronization

---

# 🖼️ Application Screens

> Replace these with actual screenshots later.

| Home               | AI Search            |
| ------------------ | -------------------- |
| ![](docs/home.png) | ![](docs/search.png) |

| Explore               | Admin Dashboard     |
| --------------------- | ------------------- |
| ![](docs/explore.png) | ![](docs/admin.png) |

---

# 📋 HR Requirements Mapping

| Requirement         | Status | Implementation                                      |
| ------------------- | ------ | --------------------------------------------------- |
| Clean Responsive UI | ✅     | Material UI (MUI v6)                                |
| Multiple Pages      | ✅     | Home, Explore, AI Search, Resources, About, Contact |
| Authentication      | ✅     | Clerk Authentication                                |
| Admin Dashboard     | ✅     | Protected CRUD Panel                                |
| AI Search           | ✅     | Groq (Llama 3.3 70B)                                |
| Database            | ✅     | Supabase PostgreSQL                                 |
| Search History      | ✅     | Client-side Storage                                 |
| Analytics Dashboard | ✅     | Real-time Statistics                                |
| Production Ready    | ✅     | Render / Vercel Deployment                          |

---

# 🛠 Tech Stack

## Frontend

- Next.js 15 (App Router)
- React 19
- Material UI v6
- TypeScript
- Lucide React
- MUI Icons

---

## Backend

- Next.js API Routes
- Groq Cloud SDK
- REST APIs

---

## AI

- Llama 3.3 70B Versatile
- Groq LPU Inference
- Contextual Prompt Engineering

---

## Database

- Supabase
- PostgreSQL
- Row Level Security (RLS)

---

## Authentication

- Clerk Authentication
- Middleware Route Protection

---

## Deployment

- Vercel / Render

---

# 🧠 AI Workflow

```text
User Question
      │
      ▼
Clerk Authentication
      │
      ▼
Next.js Frontend
      │
      ▼
API Route
      │
      ├────────► Groq AI (Llama 3.3)
      │
      └────────► Supabase Knowledge Base
                     │
                     ▼
          AI Response Generated
                     │
                     ▼
              User Interface
```

---

# ⚙️ Architecture

```text
                    ┌─────────────────────┐
                    │      User           │
                    └──────────┬──────────┘
                               │
                               ▼
                   Next.js 15 Frontend
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
        Clerk Authentication          API Routes
                                               │
                         ┌─────────────────────┴────────────────────┐
                         ▼                                          ▼
                  Groq AI (Llama 3.3)                      Supabase PostgreSQL
                         │                                          │
                         └─────────────────────┬────────────────────┘
                                               ▼
                                      Startup Navigator UI
```

---

# 🚀 AI Implementation

Unlike traditional chatbots, Startup Navigator uses **System Prompt Engineering**.

The AI is instructed to behave as a:

> **Senior Startup Consultant for Indian Entrepreneurs**

It specializes in:

- Startup India
- DPIIT Recognition
- MSME Registration
- Company Incorporation
- MCA Compliance
- Government Schemes
- Startup Funding
- Legal Documentation

Responses are generated using:

- Stored Startup Knowledge
- AI Reasoning
- Context-aware Prompting

---

# 🔄 Admin CRUD Workflow

```text
Admin Dashboard

      │

      ▼

Create / Update / Delete

      │

      ▼

Supabase Database

      │

      ▼

Explore Page

      │

      ▼

Latest Articles Instantly Available
```

---

# 📊 Project Structure

```bash
startup-navigator/

│── app/
│── components/
│── lib/
│── hooks/
│── public/
│── styles/
│── middleware.ts
│── types/
│── utils/
│── api/
│── package.json
│── README.md
```

---

# 🔑 Environment Variables

Create a **.env.local**

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=

GROQ_API_KEY=
```

---

# 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/sonali131/startup-navigator.git

cd startup-navigator
```

---

### Install Packages

```bash
npm install
```

---

### Run Development Server

```bash
npm run dev
```

---

Open:

```
http://localhost:3000
```

---

# 📈 Performance Highlights

- ⚡ Groq AI response latency below **0.5 seconds**
- 🚀 Server Components with Next.js App Router
- 📱 Mobile-first responsive design
- 🔒 Secure authentication
- 🛡 Row Level Security enabled
- 🎯 Optimized TypeScript architecture

---

# 🤖 AI Development Disclosure

AI coding assistants (ChatGPT & Gemini) were used to accelerate development.

### AI Assisted In

- Database schema planning
- Folder architecture
- Prompt engineering
- Material UI styling
- Debugging hydration issues
- TypeScript error resolution
- Performance optimization

All implementation, testing, integration, and customization were completed manually.

---

# 🎯 Future Enhancements

- 📄 Startup Document Generator
- 🎙 Voice AI Assistant
- 🌐 Multi-language Support
- 📅 Compliance Reminder Calendar
- 💼 Investor Matchmaking
- 📊 Startup Success Dashboard
- 📱 Progressive Web App (PWA)

---

# 👩‍💻 Developer

## Sonali Mishra

📧 **Email**

mishrasonali1198@gmail.com

🌐 **LinkedIn**

https://www.linkedin.com/in/sonali-mishra-4239aa250

💻 **GitHub**

https://github.com/sonali131

---

<div align="center">

### ⭐ If you found this project useful, please consider giving it a Star!

**Built with ❤️ using Next.js, Groq AI, Clerk, and Supabase**

</div>

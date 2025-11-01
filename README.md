# PathForge

A project management tool that helps users set long-term goals, break big tasks into smaller ones, and track progress through completion with visual dependency mapping.

## Overview

PathForge transforms traditional to-do lists into interactive dependency graphs, helping you visualize the path from start to finish. Unlike linear task lists, PathForge requires users to map out relationships between tasks, creating a clear roadmap that shows which tasks can be worked on now and which are blocked by prerequisites.

## Key Features

### Core Functionality
- **Goal Setting**: Define high-level goals and break them into actionable tasks
- **Dependency Mapping**: Drag and drop to create connections between tasks, building a directed graph
- **Smart Task States**: Automatically distinguishes between available tasks and those blocked by incomplete prerequisites
- **Auto-Unlock**: Dependent tasks automatically unlock as you complete prerequisites
- **Visual Timeline**: See your entire project timeline and how tasks relate to each other

### Interactive Features
- **Timeline Slider**: Adjust task durations and see real-time impact on your project timeline
- **Dynamic Filtering**: View only blocked tasks, available tasks, or the critical path
- **Critical Path Analysis**: Identify the sequence of tasks that determines your project completion time
- **Reflection & Growth Tracking**: Document your journey with diary-style entries
  - Summarize accomplishments after completing phases
  - Reflect on challenges, lessons learned, and personal growth
  - Set intentions and wishes for upcoming phases

## Use Cases

### Example 1: Language Learning
Goal: Reach B1 German proficiency in 9 months

Tasks might include:
- Complete A1, A2, and B1 courses (sequential dependencies)
- Build 3000-word vocabulary (parallel with courses)
- Daily Duolingo practice (recurring)
- Listen to German podcasts (recurring)
- Work through B1 exam materials
- Take B1 certification exam

PathForge helps you map these dependencies and track daily progress. As you complete the A1 course, PathForge automatically highlights that the A2 phase is unlocked and ready to begin.

### Example 2: Career Transition
Goal: Land a tech job

Tasks might include:
- Build portfolio projects
- Earn certifications
- Refine resume (blocks job applications)
- Practice coding challenges
- Network with professionals
- Prepare for interviews
- Apply to internships
- Apply to full-time positions

PathForge reveals which tasks can happen simultaneously (portfolio building + interview prep) and which have prerequisites (need resume before applying to jobs).

## Tech Stack

- **Frontend**: React + TypeScript
- **Graph Visualization**: React Flow
- **UI Framework**: Tailwind CSS
- **State Management**: React Context API / Redux
- **Data Persistence**: LocalStorage / Firebase (optional)
- **Build Tool**: Vite
- **Deployment**: Vercel / Netlify

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/EleanorLiu12/p144.git
cd p144

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
pathforge/
├── src/
│   ├── components/      # React components
│   │   ├── Graph/       # Dependency graph components
│   │   ├── Timeline/    # Timeline slider components
│   │   ├── TaskList/    # Task management components
│   │   └── Reflection/  # Reflection feature components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   │   ├── graphAlgorithms.ts  # Critical path, dependency resolution
│   │   └── taskHelpers.ts      # Task status logic
│   ├── types/           # TypeScript type definitions
│   ├── contexts/        # React contexts for state management
│   └── App.tsx          # Main application component
├── public/              # Static assets
└── package.json
```

## Development Roadmap

- [x] Project proposal
- [ ] Initial setup and architecture
- [ ] Core task management
- [ ] Dependency graph visualization
- [ ] Timeline and filtering features
- [ ] Reflection system
- [ ] Mobile responsive design
- [ ] Data persistence
- [ ] User authentication (optional)
- [ ] Deploy to production

## Contributing

This is a student project for CS571 at UW-Madison. Contributions and suggestions are welcome!

## License

MIT License - See LICENSE file for details

## Author

Kejun Liu (@EleanorLiu12)

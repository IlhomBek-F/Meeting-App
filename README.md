# Meeting App

## Overview

Meeting App is a modern web application designed to facilitate seamless video conferencing and meeting management. It is built using the latest web technologies including React, Tailwind CSS, PrimeReact, and VideoSDK. The app offers a user-friendly interface and a robust set of features to ensure effective communication and collaboration.

## Features

- **High-Quality Video Conferencing:** Supports HD video and audio for clear communication..
- **Real-Time Chat:** Integrated chat functionality during meetings.
- **Screen Sharing:** Share your screen with participants for presentations and collaborations.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **PrimeReact:** A rich set of open-source UI components for React.
- **TypeScript:** Superset of JavaScript that adds static types for improved code quality and maintainability.
- **VideoSDK:** Provides the video and audio capabilities required for the conferencing feature.

## Demo

Check out the live demo of Meeting App: https://talk-together-team.netlify.app/

## Installation

1.  **Clone the repository:**

### git clone https://github.com/IlhomBek-F/Meeting-App

2.  **Install dependencies:**

### npm install

3.  **Start the application:**

### npm start

The app should now be running on http://localhost:3000

## Folder Structure

```
├── public/
├── src/
│ ├── components/
│ │ ├── StartMeeting.tsx
│ │ ├── Main.tsx
│ │ ├── Header.tsx
│ │ ├── MeetingView.tsx
│ │ ├── ParticipantView.tsx
│ │ ├── ParticipantScreen.tsx
│ │ ├── Player.tsx
│ │ ├── ChatView.tsx
│ │ ├── AllParticipantsView.tsx
│ │ ├── Timer.tsx
│ │ └── shared/
│ │    ├── SideBar.tsx
│ │    ├── Toast.tsx
│ ├── config/
│ │    ├── config.ts
│ ├── hooks/
│ │   ├── useTimer.ts
│ │   └── useVideoStream.ts
│ ├── service/
│ │   ├── index.ts
│ └── styles/
│ |   ├── startMeeting.css
│ |   ├── header.css
│ |   ├── meetingView.css
│ |   ├── participant.css
│ |   ├── player.css
│ |   ├── sideBar.css
│ |   └── chat.css
| └── utils/
|      ├── helper.ts
├── .env
├── README.md
├── package.json
└── tsconfig.json
```

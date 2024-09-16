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
│ │ ├── AllParticipantsView
│ │ │    ├── AllParticipantsView.tsx
│ │ ├── ChatView
│ │ │    ├── ChatView.tsx
│ │ │    ├── chat.css
│ │ ├── Header
│ │ │    ├── Header.tsx
│ │ │    ├── header.css
│ │ ├── Main
│ │ │    ├── Main.tsx
│ │ ├── MeetingView
│ │ │    ├── MeetingView.tsx
│ │ │    ├── meetingView.css
│ │ ├── ParticipantScreen
│ │ │    ├── ParticipantScreen.tsx
│ │ ├── ParticipantView
│ │ │    ├── ParticipantView.tsx
│ │ │    ├── participant.css
│ │ ├── Player
│ │ │    ├── Player.tsx
│ │ │    ├── player.css
│ │ ├── StartMeeting
│ │ │    ├── StartMeeting.tsx
│ │ │    ├── startMeeting.css
│ │ └── Timer
│ │      ├── Timer.tsx
│ ├── shared/
│ │     ├── SideBar
│ │          ├── SideBar.tsx
│ │          ├── sidebar.css
│ │     ├── Toast
│ │          ├── Toast.tsx
│ │          ├── chat.css
│ ├── config/
│ │    ├── config.ts
│ ├── hooks/
│ │   ├── useTimer.ts
│ │   └── useVideoStream.ts
│ ├── service/
│ │   ├── index.ts
| └── utils/
|      ├── helper.ts
├── .env
├── README.md
├── package.json
└── tsconfig.json
```

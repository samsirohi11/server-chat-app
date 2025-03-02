# Next-Chat-Server-App

A real-time chat application built with Next.js, featuring Discord-like server and channel management. 
This full-stack application showcases a modern architecture that combines Next.js 14, Clerk authentication, Prisma ORM, and PostgreSQL.

## Features

- **Server Management**:
  - Create and customize servers
  - Generate and manage invite links for adding members
  - Edit server details
  - Delete servers as the server owner

- **Channel Management**:
  - Create different channel types (Text, Voice, Video)
  - Edit and delete channels

- **Member Management**:
  - Role-based permissions system (Admin, Moderator, Guest)
  - Invite users via generated links
  - Kick members from servers
  - Change member roles

- **UI/UX**:
  - Modern, responsive design with Tailwind CSS
  - Server and channel navigation sidebar
  - Role indicators with icons
  - Custom tooltips for better user experience

## Technology Stack

- **Frontend**:
  - Next.js 14 with App Router
  - React 18 with React Server Components
  - Tailwind CSS for styling
  - shadcn/ui components
  - Zustand for state management

- **Backend**:
  - Next.js API routes
  - PostgreSQL database
  - Prisma ORM for database operations
  - Clerk authentication

- **File Handling**:
  - UploadThing for file uploads
  - Support for image uploads

## Architecture

The application follows a modern Next.js architecture with:
- Route grouping for organization (auth, invite, main, setup)
- Server-side data fetching with SSR
- Modular component structure
- Modal-based UI for common operations
- Role-based access control

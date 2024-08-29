# Next.JS ChatGPT Clone

This is a ChatGPT clone built with Next.js. The application saves chats to MongoDB and uses localStorage to reference chat stores, allowing immediate testing without the need for authentication. It also serves as a base for others looking to create their own ChatGPT-like applications.

## Technologies Used

![Next.js](https://img.shields.io/badge/Next.JS-000000?style=flat&logo=next.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-000000?style=flat&logo=radix-ui&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-007ACC?style=flat&logo=typescript&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-000000?style=flat&logo=openai&logoColor=white)
![AI SDK](https://img.shields.io/badge/AI_SDK-FF7F50?style=flat)

## Features

- **Chat Management**: Chats are saved to MongoDB and can be retrieved using localStorage.
- **Immediate Testing**: No authentication required for quick access.
- **Customizable Base**: Use as a foundation for developing your own ChatGPT-like application.
- **Responsive Design**: Styled with Tailwind CSS and interactive UI components from Radix UI.
- **State Management**: Managed with Zustand for a streamlined user experience.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Scynes/nextjs-chatgpt-clone.git
   cd nextjs-chatgpt-clone


2. Install dependencies:
   ```sh
   npm install
   # or
   pnpm install
   ```

### Setting Up Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```
NEXT_PRIAVTE_MONGODB_URI=YOUR_KEY
OPENAI_API_KEY=YOUR_KEY
```

## Contributing

This project is still under development, and contributions are more than welcome! Please fork the repository, create a feature branch, and submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
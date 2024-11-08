# Agora Lab Website

The official website for [Agora Lab AI](https://agoralab.ai), built with Next.js and TypeScript.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (v8 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Agora-Lab-AI/agoralab-website.git
cd agoralab-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build

To create a production build:
```bash
pnpm build
```

To start the production server:
```bash
pnpm start
```

## Project Structure

```
agoralab-website/
├── app/                # Next.js app directory
├── components/         # Reusable UI components
│   └── ui/            # Shadcn UI components
├── public/            # Static assets
└── styles/           # Global styles
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn UI](https://ui.shadcn.com/) - UI components

## Development

- Make changes to the codebase
- Run `pnpm lint` to check for code style issues
- Run `pnpm format` to format code using Prettier
- Create a pull request with your changes

## Deployment

This site is deployed on Vercel. Each push to the main branch triggers an automatic deployment.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the Agora Lab team.

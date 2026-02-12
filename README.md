# websketch-demo

[![CI - Build & Deploy](https://github.com/mcp-tool-shop-org/websketch-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/mcp-tool-shop-org/websketch-demo/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Interactive demo site for [WebSketch IR](https://github.com/mcp-tool-shop-org/websketch-ir) - visualize grammar-based UI representation.

**Live site**: [mcptoolshop.com](https://mcptoolshop.com)

## Features

- 🎨 Interactive visualization of WebSketch IR grammar
- 📝 Live JSON editor with syntax validation
- 🚀 Fast, lightweight vanilla TypeScript implementation
- 📱 Responsive design for all devices
- ✨ Clean, modern UI with accessibility support

## Quick Start

### For Users

Visit [mcptoolshop.com](https://mcptoolshop.com) and paste your WebSketch IR JSON to visualize it.

### For Developers

#### Prerequisites

- Node.js 20+
- npm or yarn

#### Installation

```bash
# Clone the repository
git clone https://github.com/mcp-tool-shop-org/websketch-demo.git
cd websketch-demo

# Install dependencies
npm ci

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`.

#### Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run typecheck        # Run TypeScript type checking
npm run lint             # Check code with ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting

# Testing
npm test                 # Run tests in watch mode
npm run test:ui          # Run tests with UI
npm run test:coverage    # Generate coverage report
```

## Project Structure

```
websketch-demo/
├── src/
│   ├── __tests__/          # Test files
│   ├── main.ts             # Application entry point
│   └── styles.css          # Global styles
├── .github/
│   └── workflows/
│       └── ci.yml          # CI/CD pipeline
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── vitest.config.ts        # Vitest configuration
├── .eslintrc.cjs           # ESLint configuration
└── .prettierrc             # Prettier configuration
```

## Development

### Type Checking

TypeScript strict mode is enabled. Run type checking before committing:

```bash
npm run typecheck
```

### Linting and Formatting

The project uses ESLint for linting and Prettier for formatting:

```bash
# Check for lint issues
npm run lint

# Auto-fix lint issues
npm run lint:fix

# Format all files
npm run format
```

### Testing

Tests are written using Vitest:

```bash
# Run tests in watch mode
npm test

# Run tests once
npm test -- --run

# Generate coverage
npm run test:coverage
```

## Deployment

The project automatically deploys to GitHub Pages when changes are pushed to the `master` or `main` branch.

### Manual Deployment

To deploy manually:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **The `dist/` folder** contains the production-ready files.

3. **Deploy** to your hosting provider (GitHub Pages, Vercel, Netlify, etc.).

### GitHub Pages Setup

1. Go to repository **Settings > Pages**
2. Set **Source** to "GitHub Actions"
3. Push to `master`/`main` branch to trigger deployment

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Run tests and linting: `npm test && npm run lint`
5. Commit with clear messages
6. Push and create a Pull Request

## Troubleshooting

### Build Fails

- **Check that `src/` directory exists** with `main.ts`
- **Ensure dependencies are installed**: `npm ci`
- **Verify Node.js version**: `node --version` (should be 20+)

### Development Server Won't Start

- **Check port 3000 is available**
- **Clear cache**: `rm -rf node_modules && npm ci`
- **Check for errors**: `npm run typecheck`

### Type Errors

- **Update TypeScript**: `npm update typescript`
- **Check `tsconfig.json`** for correct configuration

## Technology Stack

- **Framework**: Vanilla TypeScript (no framework overhead)
- **Build Tool**: Vite
- **Type Checking**: TypeScript 5.3+
- **Testing**: Vitest
- **Linting**: ESLint + TypeScript ESLint
- **Formatting**: Prettier
- **CI/CD**: GitHub Actions

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Links

- **WebSketch IR**: [github.com/mcp-tool-shop-org/websketch-ir](https://github.com/mcp-tool-shop-org/websketch-ir)
- **Live Demo**: [mcptoolshop.com](https://mcptoolshop.com)
- **Issues**: [github.com/mcp-tool-shop-org/websketch-demo/issues](https://github.com/mcp-tool-shop-org/websketch-demo/issues)

## Support

For questions or issues, please open an issue on GitHub.

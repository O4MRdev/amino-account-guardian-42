# Amino Account Guardian

A comprehensive security guide for Amino account protection and recovery, built with modern web technologies.

## Features

- **Multi-language Support**: Available in 7 languages (Arabic, English, Spanish, Portuguese, Russian, French, German)
- **Security Templates**: Pre-written templates for account recovery and protection
- **Interactive Copy**: Easy-to-use copy buttons for all templates
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful Aranic-themed design with smooth animations

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/O4MRdev/amino-account-guardian-42.git
cd amino-account-guardian-42
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BlogHeader.tsx  # Main header component
│   ├── BlogContent.tsx # Main content component
│   ├── ExampleTemplate.tsx # Template display component
│   └── LanguageSelector.tsx # Language switcher
├── contexts/           # React contexts
│   └── LanguageContext.tsx # Language management
├── data/              # Static data
│   └── translations.ts # Multi-language translations
├── hooks/             # Custom React hooks
│   └── use-toast.ts   # Toast notifications
├── pages/             # Page components
│   ├── Index.tsx      # Main page
│   └── NotFound.tsx   # 404 page
└── App.tsx            # Main app component
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue on GitHub.

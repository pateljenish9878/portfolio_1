# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases your skills, projects, and experience as a full stack developer.

## Features

- 🎨 Modern and clean design
- 🌙 Dark/Light mode support
- 📱 Fully responsive
- ⚡ Fast and optimized performance
- 🎭 Smooth animations and transitions
- 🔍 SEO friendly
- 📝 Easy to customize and maintain

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better developer experience
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

1. Update personal information:
   - Edit the content in each section component
   - Update social media links
   - Add your own projects and experience

2. Modify styling:
   - Customize colors in `tailwind.config.js`
   - Adjust component styles in individual component files
   - Modify global styles in `globals.css`

3. Add your own sections:
   - Create new components in the `components/sections` directory
   - Import and add them to `src/app/page.tsx`

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── theme-provider.tsx
│   └── styles/
├── public/
│   └── projects/
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Deployment

The portfolio can be easily deployed to platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy your site

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/) 
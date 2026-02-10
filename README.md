# Personal Website Template 🚀

A highly animated, playful, and memorable personal website template for computer science students and engineers.

## Features

- ✨ **Highly Animated**: Flying elements, floating bubbles, and smooth transitions
- 🎨 **Playful Design**: Bright colors, rounded corners, and expressive typography
- 📱 **Responsive**: Works beautifully on all devices
- ⚡ **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- 🎯 **Accessible**: Respects reduced motion preferences

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Customization

### Update Your Information

1. **Hero Section** (`components/Hero.tsx`):
   - Replace `[Your Name]` with your actual name
   - Update the description text

2. **About Section** (`components/About.tsx`):
   - Edit the `lines` array with your personal story

3. **Skills Section** (`components/Skills.tsx`):
   - Modify the `skills` array with your technologies

4. **Projects Section** (`components/Projects.tsx`):
   - Update the `projects` array with your actual projects
   - Add real links to your projects

5. **Contact Section** (`components/Contact.tsx`):
   - Update social media links
   - Change email addresses

6. **Metadata** (`app/layout.tsx`):
   - Update the title and description

### Color Scheme

The site uses a vibrant color palette with:
- Blues (primary)
- Greens (accent)
- Oranges (accent)
- Yellows (accent)

**Important**: No purple gradients are used, as per requirements.

You can customize colors in `tailwind.config.ts`.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with flying elements
│   ├── About.tsx        # About section with line-by-line reveal
│   ├── Skills.tsx        # Skills with floating bubbles
│   ├── Projects.tsx     # Project cards with personality
│   ├── MemeBreak.tsx    # Fun break section with easter eggs
│   ├── Contact.tsx      # Contact section
│   └── FlyingElement.tsx # Reusable flying animation component
└── ...
```

## Animation Details

- **Flying Elements**: Emojis, icons, and code snippets drift across the screen
- **Floating Bubbles**: Skills cards have hover interactions with spring physics
- **Line-by-line Reveal**: About section text animates in sequentially
- **Hover Effects**: Interactive elements respond to user interaction
- **Easter Eggs**: Hidden interactions in the Meme Break section

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

Feel free to use this template for your personal website!

---

Made with ❤️ and way too much coffee ☕

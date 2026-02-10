# Visuals Guide

This guide explains how to add and customize visuals on the site.

## GIPHY GIFs

The site uses 2 subtle GIFs from GIPHY:

1. **Hero Background Corner** (`components/Hero.tsx`)
   - Current GIF ID: `3o7aCTPPm4OHfRLSH6`
   - Placement: Top-right corner, low opacity (20-30%)
   - Style: Slow-looping, abstract, minimal motion
   - Search terms: "slow loop animation", "minimal line animation", "subtle abstract motion"

2. **Footer** (`components/Contact.tsx`)
   - Current GIF ID: `26u4lOMA8JKSnL9Uk`
   - Placement: Center of footer, low opacity (30%)
   - Style: Subtle, decorative
   - Search terms: "minimal animation", "subtle motion"

### How to Replace GIFs

1. Go to [GIPHY](https://giphy.com)
2. Search for slow-looping, subtle animations
3. Click on a GIF and copy the ID from the URL (e.g., `giphy.com/gifs/ID`)
4. Replace the `gifId` in the component

**Important**: Choose GIFs that are:
- Slow-looping
- Subtle and decorative
- Not reaction GIFs or text-heavy
- Appropriate for background use

## Memes

The meme section (`components/MemeBreak.tsx`) includes placeholders for static meme images.

### Adding Memes

1. Add your meme images to `/public/images/memes/`
2. Name them: `meme1.png`, `meme2.png`, etc.
3. Update the `src` paths in `MemeImage` components

**Meme Guidelines**:
- Static images only (not animated)
- Clever or ironic, not loud
- Understandable without internet culture knowledge
- Should feel like a quick smile, not a punchline

### Example Meme Topics
- Developer coffee consumption
- Debugging struggles
- Code review reactions
- "It works on my machine"
- Git commit messages

## Sticker-Style Illustrations

The Skills section uses sticker-style SVG illustrations (`components/SkillSticker.tsx`).

### Current Stickers
- React, TypeScript, Next.js, Node.js, Python, Java
- Git, Docker, AWS, MongoDB, PostgreSQL, Tailwind

### Customizing Stickers

Edit `components/SkillSticker.tsx` to:
- Add new skill stickers
- Modify existing designs
- Change colors or styles

Stickers should be:
- Flat or lightly outlined
- Static by default
- Simple and recognizable
- No hover animation beyond opacity or shadow

## Visual Balance Rules

✅ **Do**:
- Use one visual type per section
- Leave some sections image-free
- Keep visuals subtle and non-distracting
- Ensure readability is never compromised

❌ **Don't**:
- Place GIF + meme + sticker in the same viewport area
- Overwhelm sections with multiple visual types
- Use reaction GIFs or text-heavy memes
- Add visuals that compete with content

## File Structure

```
public/
  images/
    memes/
      meme1.png      # Static meme images
      meme2.png
    projects/
      project1.png   # Project screenshots
      project2.png
    skills/           # Skill logos (optional)
```

## Notes

- All emojis have been removed from primary visual elements
- Motion is minimal and intentional
- GIFs autoplay silently and never trigger on hover
- Visuals never overlap or distract from text
- The site maintains a calm, scrollable feel

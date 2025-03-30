# Integration Instructions

To successfully integrate the UI components into the portfolio, please follow these steps:

## Required Dependencies

Please install the following dependency that's required for the animations:

```bash
npm install framer-motion
```

## Path Aliases

The project now uses path aliases via a `jsconfig.json` file. This allows imports like `@/components/ui/button` to work properly.

## Component Structure

1. The UI components are now located in the `/src/components/ui` directory
2. The components implemented are:
   - `/src/components/ui/background-paths.jsx` - Used in Hero section
   - `/src/components/ui/button.jsx` - Used by background-paths
   - `/src/components/ui/timeline.jsx` - Used in Experience section

## Implemented Changes

1. Added animated floating paths as a background to the Hero section
   - Enhanced the Hero component with motion animations for text and image
   - Added gradient fade at the bottom for smooth transition

2. Implemented Timeline component in the Experience section
   - Converted experience list to an animated timeline view
   - Added scroll-based animation for the timeline progress line
   - Enhanced with motion animations for each timeline entry

3. Added support for path aliases with jsconfig.json

## Notes

- The background paths in Hero section have 25% opacity to ensure they don't distract from main content
- The Timeline component shows experiences in chronological order with animated scroll effects
- Both components use framer-motion for animations
- The "Read More" buttons in the timeline entries trigger the same modal as before

## Potential Issues

If you encounter any "Module not found" errors, make sure you have:
1. Installed framer-motion: `npm install framer-motion`
2. Correctly configured your build tool to respect the path aliases in jsconfig.json

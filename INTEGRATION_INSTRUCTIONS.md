# Integration Instructions

To successfully integrate the background paths component into the portfolio, please follow these steps:

## Required Dependencies

Please install the following dependency that's required for the animations:

```bash
npm install framer-motion
```

## Path Aliases

The project now uses path aliases via a `jsconfig.json` file. This allows imports like `@/components/ui/button` to work properly.

## Component Structure

1. The UI components are now located in the `/src/components/ui` directory
2. The background paths components are implemented in:
   - `/src/components/ui/background-paths.jsx`
   - `/src/components/ui/button.jsx`

## Implemented Changes

1. Added animated floating paths as a background to the Hero section
2. Enhanced the Hero component with motion animations for text and image
3. Added support for path aliases with jsconfig.json

## Notes

- The background paths will appear as a subtle animated pattern behind the content
- The opacity is set to 25% to ensure it doesn't distract from the main content
- The animation effects are provided by framer-motion

## Potential Issues

If you encounter any "Module not found" errors, make sure you have:
1. Installed framer-motion: `npm install framer-motion`
2. Correctly configured your build tool to respect the path aliases in jsconfig.json

/**
 * Combines multiple class names into a single string, filtering out falsy values
 * This is a simplified version of the clsx or classnames library
 * 
 * @param {...string} classes - Class names to be combined
 * @returns {string} Combined class names
 */
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export { cn };
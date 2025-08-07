# Accessibility Guidelines

## Color and Contrast

### Minimum Requirements
- **Normal text**: 4.5:1 contrast ratio (WCAG AA)
- **Large text**: 3:1 contrast ratio (WCAG AA)
- **Interactive elements**: 3:1 contrast ratio for borders/focus states

### Color Usage
- Never rely solely on color to convey information
- Provide alternative indicators (icons, text, patterns)
- Ensure sufficient contrast in all states (hover, focus, active)

## Typography

### Font Sizes
- **Minimum body text**: 16px (1rem)
- **Minimum interactive text**: 16px
- **Line height**: Minimum 1.5 for body text
- **Paragraph spacing**: At least 1.5x font size

### Font Choices
- Use system fonts for better performance and accessibility
- Avoid decorative fonts for body text
- Ensure font rendering is clear across devices

## Interactive Elements

### Touch Targets
- **Minimum size**: 44px × 44px
- **Spacing**: At least 8px between targets
- **Visual feedback**: Clear hover and focus states

### Focus Management
- Visible focus indicators on all interactive elements
- Logical tab order
- Skip links for keyboard navigation
- Focus trapping in modals

## Screen Reader Support

### Semantic HTML
- Use proper heading hierarchy (h1-h6)
- Implement ARIA labels where needed
- Provide alt text for images
- Use semantic elements (button, nav, main, etc.)

### Dynamic Content
- Announce important changes with ARIA live regions
- Provide context for dynamic updates
- Ensure loading states are communicated

## Testing Checklist

### Automated Testing
- [ ] Color contrast validation
- [ ] HTML semantic structure
- [ ] ARIA implementation
- [ ] Keyboard navigation

### Manual Testing
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Keyboard-only navigation
- [ ] High contrast mode
- [ ] Zoom testing (up to 200%)
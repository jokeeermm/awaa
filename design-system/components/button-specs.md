# Button Component Specifications

## Overview
The button component is a fundamental interactive element used throughout the AI Agent interface.

## Variants

### Primary Button
- **Use case**: Main actions, CTAs
- **Background**: Primary-600 (#0284c7)
- **Text**: White
- **Hover**: Primary-700 (#0369a1)
- **Focus**: 3px ring with primary-500/50 opacity

### Secondary Button
- **Use case**: Secondary actions
- **Background**: Transparent
- **Border**: 1px solid neutral-300
- **Text**: Neutral-700
- **Hover**: Neutral-50 background

### Ghost Button
- **Use case**: Subtle actions, navigation
- **Background**: Transparent
- **Text**: Neutral-600
- **Hover**: Neutral-100 background

## Sizes
- **Small**: 32px height, 12px padding
- **Medium**: 40px height, 16px padding
- **Large**: 48px height, 20px padding

## States
- Default
- Hover
- Focus
- Active
- Disabled (50% opacity)
- Loading (with spinner)

## Accessibility
- Minimum 44px touch target
- WCAG AA contrast ratio (4.5:1)
- Focus indicators
- Screen reader support
- Keyboard navigation
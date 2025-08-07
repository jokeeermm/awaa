# Card Component Specifications

## Overview
Cards are flexible containers for grouping related content and actions in the AI dashboard.

## Structure
- **Container**: Rounded corners (8px), subtle shadow
- **Header**: Optional title and action area
- **Content**: Main content area with proper spacing
- **Footer**: Optional action buttons or metadata

## Variants

### Default Card
- **Background**: White (dark: neutral-800)
- **Border**: 1px solid neutral-200
- **Shadow**: sm (0 1px 2px rgba(0,0,0,0.05))
- **Radius**: 8px

### Elevated Card
- **Shadow**: md (0 4px 6px rgba(0,0,0,0.1))
- **Hover**: Slight scale transform (1.02)

### Interactive Card
- **Hover**: Background neutral-50
- **Cursor**: Pointer
- **Transition**: All properties 200ms ease

## Spacing
- **Padding**: 24px (lg)
- **Gap**: 16px between elements
- **Header margin**: 0 0 16px 0

## Content Guidelines
- Keep titles concise (1-2 lines)
- Use consistent icon sizes (20px)
- Maintain proper content hierarchy
- Ensure adequate white space
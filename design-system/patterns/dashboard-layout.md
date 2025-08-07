# Dashboard Layout Pattern

## Overview
The AI Agent dashboard follows a modern, responsive layout pattern optimized for data visualization and control interfaces.

## Layout Structure

### Header (Fixed)
- **Height**: 64px
- **Background**: Semi-transparent with backdrop blur
- **Content**: Logo, status indicators, notifications, user menu
- **Z-index**: 50

### Main Content Area
- **Layout**: CSS Grid
- **Columns**: Responsive (1-4 columns based on screen size)
- **Gap**: 24px
- **Padding**: 32px

### Sidebar (Optional)
- **Width**: 256px (collapsed: 64px)
- **Background**: Neutral-50 (dark: neutral-900)
- **Transition**: 300ms ease for collapse/expand

## Responsive Breakpoints
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: 1024px - 1440px (3 columns)
- **Large**: > 1440px (4 columns)

## Grid System
- **Base unit**: 8px
- **Container max-width**: 1440px
- **Gutters**: 24px
- **Margins**: 16px (mobile), 32px (desktop)

## Visual Hierarchy
1. **Primary actions**: Prominent buttons, high contrast
2. **Secondary content**: Cards, data visualization
3. **Tertiary elements**: Labels, metadata, subtle indicators
4. **Background elements**: Grids, dividers, containers
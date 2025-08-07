# Interaction Patterns

## Loading States

### Skeleton Loading
- Use for content that takes 1-3 seconds to load
- Maintain layout structure during loading
- Animate with subtle pulse effect
- Match content dimensions

### Progress Indicators
- **Determinate**: Show exact progress (0-100%)
- **Indeterminate**: Show activity without specific progress
- **Stepped**: Show multi-step process progress

## Micro-interactions

### Button Interactions
- **Hover**: Subtle background color change (100ms)
- **Active**: Slight scale down (0.98) with darker background
- **Loading**: Spinner with disabled state
- **Success**: Brief checkmark animation

### Card Interactions
- **Hover**: Subtle elevation increase (2px shadow)
- **Focus**: Border highlight with focus ring
- **Selection**: Background color change with checkmark

### Form Interactions
- **Focus**: Border color change with subtle glow
- **Validation**: Real-time feedback with color coding
- **Error**: Shake animation with error message
- **Success**: Smooth transition with success indicator

## Navigation Patterns

### Tab Navigation
- Clear active state indication
- Smooth transition between tabs
- Maintain scroll position when appropriate
- Keyboard navigation support

### Modal Interactions
- **Open**: Fade in with backdrop blur (300ms)
- **Close**: Fade out with scale down (200ms)
- **Focus trap**: Keep focus within modal
- **Escape key**: Close modal functionality

## Data Visualization

### Chart Interactions
- **Hover**: Highlight data points with tooltips
- **Selection**: Multi-select with clear indicators
- **Zoom**: Smooth zoom transitions
- **Animation**: Staggered entry animations for data points

### Table Interactions
- **Sort**: Clear sort indicators with smooth transitions
- **Filter**: Real-time filtering with loading states
- **Selection**: Row highlighting with checkboxes
- **Pagination**: Smooth page transitions

## Feedback Patterns

### Success States
- Green color coding
- Checkmark icons
- Brief success messages
- Positive micro-animations

### Error States
- Red color coding with sufficient contrast
- Clear error icons
- Descriptive error messages
- Suggested actions for resolution

### Warning States
- Amber/orange color coding
- Warning icons
- Clear explanation of potential issues
- Options to proceed or cancel
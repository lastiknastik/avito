# Import Popover

Component Popover defined in index.jsx file (current directory).

Usage example:

`import { Popover } from './app/components/popover/index.jsx'`

# Popover useage example

Requires onClose function reference, that is responsible for closing popover.
This component will blur main page and displays children in the center of the screen with popover close button.

Example:

<Popover onClose={popoverCloseHandler}>
    <CONTENT/>
</Popover>

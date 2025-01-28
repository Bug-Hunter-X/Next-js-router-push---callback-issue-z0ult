# Next.js router.push() Callback Issue

This repository demonstrates a problem with the `router.push()` method in Next.js where a callback function intended to execute after navigation doesn't always work as expected.  The issue is likely related to the asynchronous nature of navigation and how the callback might be trying to interact with elements that are removed from the DOM after navigation.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button to navigate to another page. Notice the 'Navigation successful!' message may not be logged to the console, or may inconsistently be logged. 

## Solution

The solution addresses this by using the `router.events` to listen for the 'routeChangeComplete' event. This event fires after the navigation is fully completed ensuring any further operations in the callback can successfully interact with the DOM.

# React State Mutation Bug

This repository demonstrates a common error in React: directly modifying a state variable instead of using the setState function.  Direct manipulation prevents re-renders and leads to unexpected behavior.  The `bug.js` file shows the incorrect implementation; `bugSolution.js` provides the correct solution.

## Bug Description
The component attempts to increment the `count` state variable directly.  This bypasses React's state management system, resulting in the UI not updating to reflect the change.

## Solution
The correct approach is to always use the `setCount` function provided by the `useState` hook to update the state. This ensures React updates the UI appropriately.
#cordova-back-stack

Create and manage stacks of cordova 'backbutton' event listeners.

### Usage

Install:

    npm install cordova-back-stack

Create a persistent handler:

```javascript
backStack = require('cordova-back-handler')


backStack(function myCoolBackButtonHandler(event) {
    // Do cool back button handling
})
```

Meanwhile in another file create a removeable handler:

```javascript
backStack = require('cordova-back-handler')

var thing.removeHandler = backStack(function myCoolBackButtonHandler(event) {
    // Do cool back button handling
    thing.removeHandler(); // Remove the handler from the stack.
})
```

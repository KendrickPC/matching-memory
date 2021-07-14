# Matching Memory:

### Provide the Redux Store to Your Application

Note: [Provider React-Redux documentation](https://react-redux.js.org/api/provider)
1a. In index.js, import the Provider component.
```javascript
import { Provider } from 'react-redux';
```
2a. Implement Provider inside the ReactDOM.render() function.
Note: Pay attention to the comma and its placement.
Note: Pay attention to the store property and its assignment. 
```javascript
ReactDOM.render(
  // Implement Provider component with store below
  // https://react-redux.js.org/api/provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
### Create the Board Layout
At the bottom of boardSlice.js:
Note: Take a look at the hint if stuck. It really is helpful.
3a. Create an export statement with a defined selector, selectBoard.
```javascript
export const selectBoard = () => "SOMETHING GOES HERE";
```
3b. The selector should return an array created by state.board.map().
```javascript
export const selectBoard = (state) => state.board.map();
```
3c. The callback function for the map() function should return an object {id: card.id, contents: card.contents}, where card is the argument of the callback function.
```javascript
export const selectorFunction = state => state.selectedData
  .map(object => ({p1: object.p1, p2: object.p2}));
```
The example above shows me that selectorFunction is my selectBoard.
The selectedData is my board.
The argument in my callback is card. Aka object = card in this case. 
p1 is id, p2 is contents.
Note: When returning an object from a single-line arrow function you must wrap the object in parentheses.
```javascript
export const selectBoard = (state) => state.board.map(card => ({id: card.id, contents: card.contents}));
```
4a. In Board.js, start with the necessary import statements.
Import useSelector from react-redux. [React Redux Hooks documentation](https://react-redux.js.org/api/hooks)
4b. Import the selector you implemented in the previous step from ./boardSlice.js.
```javascript
import { selectBoard } from './boardSlice.js';
```
5a. Inside the Board component define a variable named currentBoard and assign it the data retrieved from calling useSelector() with the selectBoard selector.
```javascript
const currentBoard = useSelector(selectBoard);
```
6a. To update the row number calculation, reassign the variable numberOfCards to the length of the array of cards, currentBoard.
```javascript
const numberOfCards = currentBoard.length;
```
6b. Inside the utility function getRowCards(), replace the empty object inside rowCards.push() with currentBoard[cardIndex].
```javascript
rowCards.push(currentBoard[cardIndex])
```
![Checkpoint 1](./checkpoint1.png)

### Show Your Cards
In boardSlice.js, implement a selector:

7a. Create an export statement with a defined selector, selectVisibleIDs.
Note: At the bottom of the boardSlice.js file, write the function.
```javascript
export const selectVisibleIDs = () => "Something Here"
```
7b. The selector should return an array that filters the board array and then maps the filtered array. Use state.board.filter().map(). 
```javascript
export const selectVisibleIDs = (state) => state.board.filter().map();
```
7c. The callback function for filter() should test card.visible, where card is the parameter of the callback function.
Note: I google searched filter an array of objects.
[JS Filter for this specific case](https://www.javascripttutorial.net/javascript-array-filter/)
```javascript
export const selectVisibleIDs = (state) => state.board.filter(card => card.visible).map();
// Check if card.visible === true works as well.
export const selectVisibleIDs = (state) => state.board.filter(card => card.visible === true).map();
```
7d. The callback function for map() should return card.id, where card is the parameter of the callback function.
```javascript
export const selectVisibleIDs = (state) => state.board.filter(card => card.visible).map(card => card.id);
```





```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```

### Start the Game
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```

### Flipping Cards
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```

### Reset the Flipped Cards
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```

### Matching Cards
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```

### Get the Score
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```

### Extra Challenges
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```
```javascript
```


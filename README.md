# Word-Puzzle
Simplified Word Puzzle implementation from https://learningapps.org/ 

# Test Here:
https://utkarshsiddhpura.github.io/Word-Puzzle/

## Implementation:
- Main function which actually places the **WordList** on the Grid is: 
- ~300 lines 
- https://github.com/UtkarshSiddhpura/Word-Puzzle/blob/8fe9085e7338088de40a55481acbe3fa2ae08e9b/script.js#L698

- Here is what i Understood:

- It randomly selects a row and column index within the bounds of the grid, to  place the first word.
- The function creates an empty 2D array called grid with dimensions "maxlen x maxlen", where maxlen is the total length of all the words in items multiplied by 2. The function then attempts to place each word in items into the grid by finding an intersection point with an already-placed word and orienting the new word in a direction that does not conflict with any existing words. The function continues attempting to place words until all words have been placed or it has made 100 failed attempts to place a word.

- At the end it trims the grid as much as possible because of really large maxlen.
- I still can't figure what pattern exactly they're using and how they form similar(not exact) word puzzle for given data in script.js everytime.

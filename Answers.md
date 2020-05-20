1. What problem does the context API help solve?

- Passing down Props

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- action is like a message we send to our store, reducer is a funtion that determines changes in the state, store is what keeps all the state in one spot

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- component state is when you want to use it once application state is to hold the data of the whole app

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

- Context Api because is minimal to use and you not installing extra dependacies

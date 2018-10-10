# sprofile
React and redux basic flow

Create/Dispatch the action
--------------------------
1. Any page will have a container, which connects mapStateToProps & mapDispatchToProps.
2. When click on a button, dispatch an action. 
		```dispatch("BUTTON_CLIKED", "title");```
3. ...

Handling the action
-------------------
1. Create Store - from redux
2. While creating store , pass reducers as parameter
3. Reducer contains - Switch case of action types, returns JSON. (BUTTON_CLIKED)


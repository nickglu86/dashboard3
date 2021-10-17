# Dashboard - Demo

[nickglu86.github.io/dashboard3/](https://nickglu86.github.io/dashboard3/)

## Overview
React-App -  Dashboard UI with basical functionality.

### Engineer Assumptions
1. Main view was built according to a provided design .
2. App should be responsive.
3. User should be able to send 'Support Reqests' and add new requests to the list.
4. Global state not required due for demo implementation only of Overview section.
5. No server needed.


### Solution thought process
The app mainly focusing on rendering  Overview Tab content from JSON file that represent dynamic data from JSON file that is stored locally. The data is being rendered  and can be modified partially. New data can be added in a form of 'Support Reqests' from additional json file.
There are a lot of things that can be imporved in the this app, the main focus/effort was on implementing only the part that was required.


### Things TO DO Differently
* Create Global State with Context/Redux Store for min. functionality of data saving, will represent real time behavior.
* Views/Tabs content should rendered on demand not with display block/none.
* Tab icons should be preloaded.


### Parts not handled/not handled optimally
* App state - optimaly be implemented with a Global state/or Store in order to store and handle the data in a single place if also other views load additional data . Curently handled with useState hook in Overview components. 

* Tabs Content Views show/hide implemented with css class toggle, optimally would be implemented with rendering each view component on demand when relevant tab icon clicked.


### Execution instructions

```sh
npm install
```
```sh
npm start
```


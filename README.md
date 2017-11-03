# REACT-TALK:  A Code-Along Project for NYU WinC

## What is this?

This repository is a code and learn project designed for a NYU Women in Computing talk on React given on November 9, 2017.  The project was designed to give attendees, who may not have had any prior experience using React, a chance to understand how reusable components share data in a variety of forms as well as the basics of modularity and advanced styling.

## How do I use this?

There is some configuration required before starting the project.  Instructions given are for Mac.

1. Ensure that [Node, NPM](https://treehouse.github.io/installation-guides/mac/node-mac.html) and the [Facebook Create React App Boilerplate] (https://github.com/facebookincubator/create-react-app) are installed on the computer.
2. Clone this repository.
3. After cloning, `cd` into this directory and run `npm i`.
4. Start the server locally by running `npm start`.

## How is this repo organized?

This repository has different branches to illustrate different concepts in react.  They are:

* Master: The basic concepts of React, a rough-and-ready version for first timers using React
* HTML:  The HTML translation of this project, using no React concepts.
* propsDemo:  Exemplifies the concept of passing data downwards to child components via `props`.
* stateDemo:  Exemplifies the concept of state, which can be used by multiple components to update the DOM.
* modularityDemo:  Exemplifies the concept of modularity in React, so that components can be used throughout a site.
* styled-elements:  The next-level edition of what a user an do with the create-react-app boilerplate to make a project more personalized.

The tree looks as such:

```
  master
    +--HTML
    +--propsDemo
    +--stateDem0
    +--modularityDemo
    +--styled-elements
```

## What powers this repository?

It was built on top of the create-react-app repository.

## What else should I know about this project?

1. On the `styled-elements` branch, there are additional packages which must be installed before the pages will work.  Please run `npm i` before starting the server on that branch.

## Who built this project?

[Narmin Shahin](https://github.com/narmeen12) (predominantly) and [Hannah Nordgren](https://github.com/ninjaofawesome).

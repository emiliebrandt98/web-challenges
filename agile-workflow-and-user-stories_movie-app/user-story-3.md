# Title

## Value Proposition

**As a** user, <br>
**I want to** add movies to a watchlist and view them later, <br>
**so that** I don't lose track of movies I'm interested in. <br>

## Description

![wireframe](./assets/scribble-watchlist.png)

## Acceptance Criteria

[ ] A "Add to Watchlist" button is shown on the movie detail page. <br>
[ ] Clicking "Add to Watchlist" adds the movie to the watchlist. <br>
[ ] The watchlist persists across page reloads (localStorage). <br>
[ ] A bottom navigation with "Home" and "Watchlist" links is shown on every page. <br>
[ ] The Watchlist page displays a list of movie cards for the saved movies. <br>
[ ] Includes a heading on top of the list "Watchlist". <br>
[ ] If the watchlist is empty, show a message "Your watchlist is currently empty. Start adding movies you want to watch by clicking 'Add to Watchlist' on the movie details page. Your selected movies will appear here." <br>

## Tasks

[ ] Create a feature branch "watchlist". <br>
[ ] Implement useLocalStorageState to manage the watchlist state. <br>
[ ] Create a new Component "Navigation" with links to Home and Watchlist. <br>
[ ] Add Navigation to the layout so it shows on every page. <br>
[ ] Add an "Add to Watchlist" button to the MovieDetails component. <br>
[ ] Implement the add-to-watchlist logic (update state/localStorage). <br>
[ ] Create a new page "pages/watchlist.js". <br>
[ ] Render the saved movies using the existing MovieCard component. <br>
[ ] Add the empty-state message. <br>
[ ] Give the Watchlist page a basic style. <br>

[ ] Test the feature. <br>
[ ] No console errors. <br>

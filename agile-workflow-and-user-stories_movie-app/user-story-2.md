# Title

## Value Proposition

**As a** user, <br>
**I want to** view a Detail Page, <br>
**so that** I can see more detail Information of a movie. <br>

## Description

![wireframe](./assets/scribble-movie-details-page.png)

## Acceptance Criteria

[ ] Clicking a movie card navigates to its detail page (/movies/[id]). <br>
[ ] Detail page displays title, release date, image and description of the movie. <br>
[ ] Image has alt-text (movie title). <br>
([ ] If a image can't be found a placeholder image is shown.) <br>
[ ] A loading indicator is shown while the data is fetching. <br>
[ ] If the movie data can't be retrieved, show a message "Sorry, we couldn't retrieve the movie details at the moment. Please try again later." <br>
[ ] A link/button at the top navigates back to the movie list. <br>

## Tasks

[ ] Create a feature branch "detail-page". <br>
[ ] Add a Link in the MovieCard component pointing to /movies/[id]. <br>
[ ] Create a new dynamic route file "pages/movies/[id].js". <br>
[ ] Fetch the data of the single movie based on the id from the URL. <br>
[ ] Implement a loading state. <br>
[ ] Implement error handling. <br>
[ ] Create a new Component "MovieDetails". <br>
[ ] MovieDetails displays image, title, release date and description. <br>
([ ] Add a placeholder image fallback.) <br>
[ ] Add a "back to list" link. <br>
[ ] Give the detail page a basic style. <br>

[ ] Test the feature. <br>
[ ] No console errors. <br>

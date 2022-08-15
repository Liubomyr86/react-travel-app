# Travel App

This is a [travel app](https://liubomyr86.github.io/react-travel-app/) created with **React**, **TypeScript**. All trip data load from **API**, **Redux Toolkit** used to work with asynchronous operations.  
The application contains the following pages:

-   `/sign-up` - sign up page
-   `/sign-in` - sign in page
-   `/` - main page with all trips, search and filters
-   `/trip/:tripId` - trip information page
-   `/bookings` - list of current user's bookings

All pages contain **Header** and **Footer**.

## How the app should work

When user navigates to the app, the existence of the token should be checked. If present, the current user data must be loaded. When the data is loaded, the user should get to the main page with a list of all trips. If the token is missing or an error occurs, the user is redirected to the Sign In page. All the time, while the user data is being defined and loaded, the loader should be visible.

### Header

-   logo is a link to the main page - `/`
-   navigation block is displayed on all pages except `/sign-up` and `/sign-in`
-   navigation consists of two elements
    -   the first element links to the `/bookings` page
    -   when you hover over the second element, a list appears with the username and Sign Out button
    -   Sign Out navigates to `/sign-in`

### Sign Up

In case of a successful operation, the token must be saved and the user must get to the main page.

-   form contains the following fields:
    -   Full name
    -   Email
    -   Password - must be between 3 and 20 characters long
-   all fields are required
-   on Sign Up click, if all fields are valid, user is navigated to `/`
-   Sign In button leads to the `/sign-in` page

### Sign In

In case of a successful operation, the token must be saved and the user must get to the main page.

-   form contains the following fields
    -   Email
    -   Password - must be between 3 and 20 characters long
-   all fields are required
-   on Sign In click, if all fields are valid, user is navigated to `/`
-   Sign Up button leads to the `/sign-up` page

### Main page

When user navigates to the main page, all trips data should be loaded and displayed.

-   block with filters contains:
    -   search bar
    -   two selects for duration and level
-   when entering a value in the search bar or changing filters, the corresponding cards should be displayed
-   trip card contains the following elements:
    -   picture
    -   name of the trip
    -   trip information - duration and level of difficulty
    -   price
    -   button leading to the trip page

### Trip page

When user navigates to the trip page, the relevant trip data should be loaded and displayed. When you click Book a trip button in the modal, there should be a request to book a trip.

-   contains complete information about a trip - picture, name, duration, level, description and price
-   when you click Book a trip button, a modal window opens
-   modal window

    -   contains a name, duration and level of the trip
    -   form contains the following fields:
        -   Date - planned date, should be in the future
        -   Number of guests - should be from 1 to 10 inclusive
    -   final price is equal to the price multiplied by the number of guests
    -   when you press a close button in the upper right corner, the form closes
    -   on Book a Trip click, if all fields are valid, the form closes

### Bookings page

When user navigates to the bookings page, all the current user bookings must be loaded and displayed. When you press a button to cancel a trip, a corresponding request must be made. The card should disappear only in case of successful operation.

-   list of bookings
    -   cards must be sorted by date from nearest to farthest
-   booking card contains:
    -   name of the trip
    -   booking information - number of guests, planned date, final price
    -   cancel button in the upper right corner - when pressed, the card should disappear from the list

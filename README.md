# Travel-app

Travel-app is an application for virtual travel around the world.

[Back-end repo](https://github.com/johnneon/travel-app-backend)

## App functionality
- Search
  - the search works only on the main page of the application, there is no search field on the country page
  - when opening an application, the cursor is in the input field
  - autocomplete of the input field is disabled (there is no drop-down list with previous requests)
  - there is a placeholder
  - there is a dynamic search: as you enter a search query, only cards of countries remain on the page, in the names of which or in the names of their capitals there are letters indicated in the search in the specified order. In this case, it is not necessary that the letters be at the beginning of the word.
  - a search query can also be entered by pressing the Enter key, or by clicking on the Search button or similar. In this case, only the cards of the countries whose names or the names of their capitals ** fully correspond ** to the query entered in the search remain on the page (with the query "Alexander", the city "Alexandria" will not be displayed, since several letters are missing).
  - the search is performed in the language of the page display
  - search can be performed by the names of countries or by the names of their capitals
  - there is a cross in the search field that allows you to clear the search field
- Localization
  - the `select` tag is used to switch the language. Styling this tag is part of the job
  - translation of the application into at least three languages ​​is required. Two of them are English and Russian. You choose the third localization language
  - all page content is translated, including the names of the days of the week and the month in the date, the description of the weather in the weather informer, the names of the currencies
  - when reloading the page, the language selected by the user is saved
- Country cards
  - when you hover over a country card, the card is highlighted (its style changes)
  - when you click on the country card, the country page opens
  - country page opens [from the top of the page] (https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top)
- Photo gallery of attractions
  - to display photos of the country's attractions and information about them, both a photo gallery and a slider can be used, the choice is yours
  - photo gallery can be expanded to full screen
  - there is a preview of all the attractions or only some of them if there are more than six attractions. The preview of the current point of interest is highlighted (highlighted with style)
  - arrows that are used to scroll through the photo are highlighted on hover and on click
  - smooth photo change when flipping, or photo change occurs with animation effects
- Video
  - video can be expanded to full screen
  - the video has a control panel that hides when viewed
- Map
  - a free API is used to display the card, which does not require the connection of payment documents to use
  - give preference to APIs that have a street view mode
  - the map is translated into the language of the page display, if there is such a possibility in the API used
  - the map can be expanded to full screen
  - the map is interactive, you can drag it, zoom in and out
  - the country in question is highlighted
  - custom (user) styles are used to style the map, if there is such a possibility in the API used
  - the capital of the country is marked on the map with a marker
- Weather informer in the capital of the country
  - displays the weather icon, temperature, a short description of the weather
  - other weather indicators may be displayed at your discretion
- Date and time in the capital of the country
  - the date, name of the month, name of the day of the week, time in the format hours-minutes-seconds are displayed
  - the clock is running, the time is updated every second
  - to display the date and time in the capital of the country, use the built-in JavaScript capabilities, you do not need to use the API for this purpose
  - to translate the date and time into the language of the page localization, use the built-in JavaScript capabilities. Please note that the localization of the date into Belarusian in the Google Chrome browser does not work correctly


## Backend

1. Created API to get country data
2. Added the ability to log in by entering your name and uploading a photo.

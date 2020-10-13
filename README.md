# Backend API for a Bookmarking application

Developed on Node Express &amp; MongoDB

## API Functionalities

### 1.Bookmarking

- Create a Bookmark

POST request to `bookmarking-api.herokuapp.com/api/bookmark/` with JSON bosy.

- Delete a Bookmark

DELETE request to `bookmarking-api.herokuapp.com/api/bookmark/:url` with url in params.

### 2.Tag

- Create a tag
.
POST request to `bookmarking-api.herokuapp.com/api/tag/` with JSON body

- Delete a tag

DELETE request to `bookmarking-api.herokuapp.com/api/tag/:title` with tag title in params.

- Add a Tag to a Bookmark

PUT request to `bookmarking-api.herokuapp.com/api/bookmark/add/:id` with id in params.

-Remove a Tag from a Certain Bookmark

PUT request to `bookmarking-api.herokuapp.com/api/bookmark/remove/:id` with id in params.


### 3.Display

- Retrieve all bookmarks

GET request to `bookmarking-api.herokuapp.com/api/bookmark/`

- Retrieve all tags

GET request to `bookmarking-api.herokuapp.com/api/tag/`


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

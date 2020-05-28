## Table of available routes

| Path                     | Container             | Connected |
| ------------------------ | --------------------- | --------- |
| /posts                   | Posts                 | false     |
| /post/:id/comments       | ListCommentsPost      | false     |
| /addComment/:id          | AddComment            | false     |
| \*                       | /NotFoundPage         | false     |

```sh
Warning
notFoundPage should be always the last route any route after notFoundPage will be ignored
```
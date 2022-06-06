
# 0.1
* [HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

# 0.2
* [CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

# 0.3
* [Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)

# 0.4

```
title 0.4 New note
browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
server-->browser: HTML-code 302
browser->server: HTTP GET /notes

note over browser:
the browser reloads the Notes page
end note

server-->browser: main.css
server-->browser: main.js
server-->browser: data.json
```

![image](https://user-images.githubusercontent.com/63563271/168426669-adb0b671-8689-4a06-b1b1-0f43833a0b46.png)

# 0.5

```
title Single page app


browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json


server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
add new note
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

server-->browser: Status Code 201 {"message":"note created"}
```

![image](https://user-images.githubusercontent.com/63563271/172188503-008073c4-b897-4f85-ba47-c378c827fb11.png)


# 0.6

```
title 0.6 New note
browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa

note over browser:
The POST request to the address new_note_spa contains the new note as JSON-data containing both
the content of the note (content) and the timestamp (date)
end note

note over server:
The Content-Type header of the request tells the server that the included data
is represented in the JSON format.
Without this header, the server would not know how to correctly parse the data.
end note

server-->browser: HTML-code 201 Created
```

![image](https://user-images.githubusercontent.com/63563271/168428290-599aa11b-d248-478f-a109-d849ea2987c2.png)

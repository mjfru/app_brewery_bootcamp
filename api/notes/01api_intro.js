/*
! APIs
* Application Programming Interface
* An API, in simple terms, is essentially a bridge between two programs that let each other 'talk' to one another.

Suppose you're building a diary website and want to be able to show the weather for each entry.

A weather API provides tons of data for each days and your location, so you decide to use it.
The weather app should provide documentation on how to access different values via requests from your website.

! APIs are essential for your front-end and back-end, almost like a private API.
! Public APIs exist to allow your server to talk to someone else's server.
? Examples of common APIs include: GraphQL, REST:API, SOAP, & gRPC -- these are all technically achitectual styles.
* REST:API is the most popular API for web development.

* REST:API uses HTTP protocol to interact with it.
? This means verbs like: GET, POST, PUT, PATCH, & DELETE.


! Endpoints - BaseURL/Endpoint
* API documentation will typically give you an idea of what results you can receive based on its endpoint(s).

https://bored-api.appbrewery.com/random

! Query Parameters - Endpoint?query=value
* Allows us to provide a key-value pair that's used for filtering, searching, etc.
Can be combined with more queries with a '&'
&query2=value&query3=value, etc.

https://bored-api.appbrewery.com/filter?type=social&participants=2

! Path Parameters - Endpoint/{path-parameter}
* After a forward slash, we can add a parameter that identifies a single resource in the API (by id, key, name, etc.)

? baseURL/endpoint/uniquePathParameter


! JSON - JavaScript Object Notation
* A way to format data sent over the internet in a readable, functional way, styled like a JS object.
? Differences: Keys are in quotes, typically comes "flat" and unformatted.
Luckily, there are tools that can make JSON more 'object-like'.
* JSON.stringify(jsonData) --> compacts the data into a flat line
* JSON.parse(jsonData) --> unpacks the data back into a JS object
*/

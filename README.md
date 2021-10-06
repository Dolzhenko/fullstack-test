#Exercise-fullstack
The objective of this exercise is to evaluate the skills of a fullstack javascript programmer, mainly oriented to developing web applications with react and services with nodejs. Feel free to add / modify everything you consider necessary to add value to the project, without damaging the central idea of ​​the exercise.

#Delivery method
The way to deliver the solution for this exercise is to fork this repo and pull request with the solution.

#Exercise 1:
This point consists of putting together a Rest API in Node.js (to save time, as a base you can use a development stack with which you are familiar). You need to create:

A method that returns a list of users. It will be used in exercise 2.1.
A method that returns the detail of a user It will be used in exercise 2.2.
Readme detailing instructions on how to use the Api.

```
Response model: user list

{
	"users" : [

		{
			"name" : "Pedro Perez",
			"email" : "pperez@gmail.com",
			"country" : "Venezuela",
		},
		{
			"name" : "Juan Lopez",
			"email" : "juan@lopez.com",
			"country" : "Argentina",
		}
	]
}
Response model: user detail

{
  "name" : "Pedro Perez",
  "email" : "pperez@gmail.com",
  "country" : "Venezuela",
  "address": "Av. del Libertador 420"
}

```

#Exercise 2 - Web App
This exercise consists of creating a React JS application which must have:

A screen where the users returned by the list of users method of the Rest Api from exercise 1 are listed.
A screen where the detail of a user that is consumed from the user detail method of the Api Rest of exercise 1 is shown.
There should be navigation from both the result screen to detail and vice versa.
Use of design patterns and good practices.
Readme detailing how instructions on how to lift the application and how it is composed.

#Bonus points
Use of design patterns and best practices. Use of ES6 or TYPESCRIPT.
Unit tests.
Code style (you can choose any standard as long as you respect it, just tell us which one).
Provide a docker environment to test your app.

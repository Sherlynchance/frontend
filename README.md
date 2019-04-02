# JSNHotels.com

JSNHotels is a platform that provides you with hotel details fromm Indonesia to save your time and choice of stay.
<br>
This project was generated with Angular CLI version 7.0.3.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
<br>
See backend for notes on how to deploy the backend of the project.

## Prerequisites
Make sure your development environment includes Node.js® and an npm package manager.
<br>
### Node JS
Angular requires Node.js version 8.x or 10.x.
- To check your version, run node -v in a terminal/console window.
- To get Node.js, go to nodejs.org.

### Angular CLI
You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.
Install Angular CLI
- Install the Angular CLI globally.
- To install the CLI using npm, open a terminal/console window and enter the following command:
```
npm install -g @angular/cli
```


## Installing
Clone this repo into new project folder (e.g., jsnhotels).
```
git clone https://github.com/Sherlynchance/frontend.git jsnhotels
cd jsnhotels
```
Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Website Manual
- Search a city on the searchbox in the homepage
- If the city is available then the list of hotels in that city will appear
- Else nothing will appear on the page
- Click 'read more' to see more details about that hotel
- The details of that hotel including the rooms and their prices will then be displayed for you

For example:
- Search "Jakarta" in the searchbox
- Click on "Angelica Hotel"
- The details of "Angelica Hotel" will then be displayed

The admin can manage all databases. To login as the admin, go to the login page and choose admin tab. Then login with the following credentials
<br>
```
Username: admin
Password: admin123
```
There are 6 tables in total for the admin to manage(CRUD):
- Hotels - Lists of hotels
- Rooms - Lists of rooms
- Users - List of users
- Room Types - List of Room Types available for each hotel
- Facilities - List of Facilities of each hotel
- Reviews - List reviews left by users

## Built With
- Angular - The frontend framework used
- Laravel - The backend framework used
- MySQL - Database
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# frontend" 

# Evolent-Health-Project-exercise-for-Application-Development

Designed and implemented a production ready application for maintaining
contact information. This application supports feature of edit, view, create, and active/inactive contact. 

This project is developed using Angular 6.1.9 version.

## Getting Started


### Prerequisites

 - Node.js with NPM (Node Package Manager)
 - Angular-CLI (Command Line Interface)
 
 #### Installation
 
 **Step 1. Set up the Development Environment**
 
 You need to set up your development environment before you can do anything.

Install [Node.js and npm] if they are not already on your machine.

Then install the [Angular CLI] globally.

 **Step 2. Clone Project**

Clone this repository in your machine.

**Step 3. Install dependencies**

Execute command ```npm install``` in application directory.

It will install all required dependencies.

 **Step 4. Server the application**

Go to the project directory and launch the server.

```
cd contact-management
ng serve --open
```
The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.

Using the --open (or just -o) option will automatically open your browser on `http://localhost:4200/`.

Your app greets you with a login page.


##### Validations and functionalitites supported by application

 - It do not allow to login unauthorised user into application. Valid credentials are :
    *username: admin*
    *password: admin*
  
 - Added a check for unique ```email and phone number``` combination. It shows an error if we try to create duplicate 
   ```email and phone number``` combination.

- Functionality for ```Activate``` an ```Inactive``` record and vice versa is provided.

- Generic component is implemented for **Form validation**

- Pagination, searching and sorting is implemented

- Lazy loading is implemented

- Functionality to ```Logout``` from appliaction is given







[Node.js and npm]: <https://nodejs.org/en/download/>

[Angular CLI]:<https://github.com/angular/angular-cli>

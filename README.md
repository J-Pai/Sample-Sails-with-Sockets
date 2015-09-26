# Sample Sails Sockets
This package contains a sail web application which also showcases a basic web socket setup. 
## Setup (Unix)
This section will go over how to run the web application. 
* Install node.js onto system.
* Install the npm packages for sails using the following command: 
    ```bash
    sudo npm install sails -g
    ```
* Clone this repository.
* cd into the repository and run the following command:
    ```bash
    sudo sails lift
    ```
* After that, open a web browser on your local machine and type in "localhost".

## Interacting with the Web Application
Currently, there are no interactive GUI features. In order to demo the web app, simply open a new tab in your current browser and type into the url: "localhost/people/create?name=NAME.HERE". After you do this, go back the the tab currently hosting the web app and the name you have entered will have shown up on the list automatically.

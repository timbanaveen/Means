# Means
Medium.com like app using MEAN stack

## Features
1. Showing predefined articles on landing page, filter those articles based on Author, Title and preview content.
2. See detailed article with individual url.
3. Add comment on article.
4. select some article content and comment on that selected part.
5. See all comments which belongs to particular paragraph.
6. Navigate to particular paragraph from comments section.

## Setup

### prerequisite
1. Install MongoDB from [here](https://docs.mongodb.com/manual/installation/).
2. Install NodeJS from [here](https://nodejs.org/en/).

### DB setup
1. Open terminal and execute.
    
    ```
    mongod --dbpath={path_to_ur_db_data_folder}
    ```
2. Create new database.
    
    open terminal and execute
    ```
    mongo
    ```
    this will start a mongo shell, then execute following command to create db with name 'means'
    ```
    use means
    ```
3. Create data in 'means' db.
    
    Go to '{Means_app_root}/db/scripts', open terminal here and execute.
    ```
    node create.js
    ```
    this will create data in 'means' db.

### Run server
1. Go to '{Means_app_root}', open terminal and execute.

    ```
    node app.js
    ```
    this will start server, navigate [here](http://localhost:3000/).

## Architecture
### Front-end
1. Technology: Angular 4
2. Folder Structure: Code is structured according to features, common reusable components are present in shared/ directory.
3. Services: All the logic for fetching data and customizing data is present in services/* files, they are named according to feature area they provide services.
4. Models: Models are present to create contract between components and services for data flow.
5. Constants: Constants are Enums for specifying type/actions used in app.

### Back-end
1. Technology: NodeJS with ExpressJS
2. Routes: Defines routes for ExpressJS.
3. Services: Services related to Mongo is present here, used for connection managment.
4. Public: Contains static files which express will serve. 
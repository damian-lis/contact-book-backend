# My Contact Book Backend App

An application that allows you to log into the system in which you can add or remove various contacts (backend version). 

<br/>

![](public/images/intro.gif)



The frontend repo of this app is available [here](https://github.com/damian-lis/my-contact-book-frontend-app).

The backend live version is available [here](https://lydian-long-bay.glitch.me).

The app live version is available [here](https://my-contact-book-frontend-app.vercel.app/).

<br/>

## Table of contents

1. Technologies
2. Setup

<br/>

## 1. Technologiess

The following technologies were used in the project (backend):

- Node
- Express
- MongoDB


<br/>

## 2. Setup

First of all, you need to make sure you have [Node.js](https://nodejs.org/en/) installed.

If you have Node.js installed clone the github repo.

Open the project in your favourite IDE and run following script for downloading dependencies:

```
npm install
# or
yarn install
```

<br/>

Next, you need to create the MongoDB database:

1. Enter [here](https://account.mongodb.com/account/login) and sign in/up,

2. When you are in the MongoDB dashbord, click Create a New Cluster,

3. Select cloud provider (can be AWS),

4. Select the region of the cloud provider (closest to your location and have the FREE TIER AVAILABLE option),

5. Enter the name of the cluster,

6. Save the entered data,

7. Return to the MongoDB dashboard and click CONNECT within the created cluster,

8. Select the Connect your application option,

9. Copy the link that is displayed,

10. Go back to your project and create the .env file,

11. In this file, create the MONGO_URI variable and assign to it the previously copied link from MongoDB dashboard,

12. Replace ```<password>``` with your MongoDB login password, and that's it.

<br/>

Then you can also add the PORT to the enviroment variable (in the .env file) on which the server should run (default is 5000).

<br/>

Once we have access to the database, we can start our server with the following command:

```
npm run start
# or
yarn run start
```

Open your localhost with your browser to see the result.

<br/>

To run the frontend version of this application go [here](https://github.com/damian-lis/my-contact-book-frontend-app).

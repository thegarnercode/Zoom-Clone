# Plan of Action

- initialize our Nodejs Project > DONE
- initialize our first view ( what you see on front-end )  > DONE
- Create a room id > DONE
- Add the ability to view our own Video > Done
- Add the ability to allow others to stream their video
- Add styling 
- Ability to create messages
- Add mute button
- Add STOP video button

# When using NodeJS

- NodeJS for backend
- npm init creates a package.Json file which tells us what our project is about 
- npm install express is how we are going to build our API , it will add a dependency in package.Json 

# Express
- express is a web framework for NodeJs that allows us to build web application

# In Order
- create mkdir 
- Add server.js
- npm init
- npm install express
- npm install -g nodemon
- Add const required files
- send app.get
- set server listen to 
- npm install ejs

# Create Room ID
- npm install uuid - will generate unique id's for the rooms
- import uuid in server.js const (v4)
- render room id
- redirect room id 
- console log room id in script tags in room.ejs
- inspect page and go to console you should see uuid

# view our own video
- Create public folder
- Create script.js file inside public folder
- Add script src to room.ejs
- Add app use express static(public)
- create navigator.media what this does is get cideo audio 
- create promise for video and audio
- create then arrow function my video stream
- create variable let myVideoStream // import video
- create function take in a video object
- video.src play this stream when we load all data for specific stream 
- Add eventListener to listen to load event and then play video 
- create video element we can play our video in 
- create html document
-  mute your video 
- create html where all videos will live in room.ejs
- create video grid where you will add video elements
- append video
- Style video grid
- Add CSS rel link to html document room.ejs

# Others stream their video
- 
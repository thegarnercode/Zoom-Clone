# Plan of Action

- initialize our Nodejs Project > DONE
- initialize our first view ( what you see on front-end )  > DONE
- Create a room id > DONE
- Add the ability to view our own Video > Done
- Add the ability to allow others to stream their video > DONE
- Add styling > DONE 
- Ability to create messages > DONE
- Add mute button
- Add STOP video button
- Deploy

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
- Introduce socket.io
(what are sockets?  sockets is used for asynchronous real time communication. http you can only make a request through the server but the server can only respond it can not start the request, with socket.io the server can communicate with you can you can communicate with it and the server doesnt have to wait a request to start a message)
- install socket.io (npm install socket.io)
- import socket.io (const io)
- create connection for when youre connected
- tell socket you joined room
- import socket in room.ejs src=""
- emit socket.io
- import socket.io script.js
- (had to remove defer> from script so video will show, defer means to load last)
- should see joined room in terminal
- create script room_id 
- create socket.join in server.js
- broadcast user in server.js
-  go to script js // so we listen o that user connected
- identify user specifically
- peer.js wraps the browsers WebRTC implementaion to provide a complete peer to peer connection. 
- webrtc - real-time communication for the web 
npm install peer
- import peer const
-import peer script src ( from peerjs.com)
-specify to peer server what url youre going to use 
- listen on opening of peer connection
- create new peer connection
- (peer. on object generates id's)
- Now we have 2 people that are able to talk to each other

# Styling
- create class main = where main zoom call live
- left main __left = main videos id video grid and controls
- right main__right = main Chat
- style in style.css
- height: 100vh (meaning 100 vertical height)
- style main left 
- create main controls in ejs
- go to font awesome and import icons in room.ejs
- create div for icons 
- css style div 
- create chat container
- style chat container
- add BOOTSTRAP for font styling

# Create Messages
- $ sign replaces Jquery
- socket. emit to send 
- socket.on to receive

# Mute Button / Stop Button
- const mute/unmute function
- create a funtion call play stop


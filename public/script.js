const socket = io('/') // import socket.io
const videoGrid = document.getElementById('video-grid');
const peer = new Peer (undefined, {
    path: '/peerjs',
    host: '/',
    port: '443'
}); // new peer connection
let myVideoStream
const myVideo = document.createElement('video'); // create html document
myVideo.muted = true; // dont want your own video to replay back to you 



// imports your video with promise
navigator.mediaDevices.getUserMedia({  
    video: true,
    audio: true
}).then(stream =>{
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
    peer.on('call', call => {
    call.answer(stream) // when user call us we answer with an A/V stream.
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream) // when user call us we add it to stream.
    })
  })

    socket.on('user-connected', (userId) => {
        connectToNewUser(userId, stream);
        
    })
    // input value
    let text = $('input')

      // when press enter send message
   $('html').keydown((e) => {
   if (e.which == 13 && text.val().length !== 0) {
        socket.emit('message', text.val());
        text.val('')
    }
});

    socket.on('createMessage', message => { 
    console.log("Create message", message);
    $('.messages').append(`<li class="message"><b>.user</b><br/>${message}</li>`);
    scrollToBottom()
 })

} )


peer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id); // this is where id's get generated this specific person has joined the room
})




const connectToNewUser = (userId, stream) => {
    const call = peer.call(userId, stream) // call userId
    const video = document.createElement('video') // create new user document
    call.on('stream', userVideoStream => { //sending our own stream here 
       addVideoStream(video, userVideoStream) // add video to room 

    })
}


const addVideoStream = (video, stream) => {  // create function take in a video object on the element  , video.src play this stream when we load all data for specific stream we will play stream
  video.srcObject = stream;
  video.addEventListener('loadedmetadata',() => {
      video.play();
  })
    videoGrid.append(video);

}
const scrollToBottom = () => {
    let d = $('.main__chat__window');
    d.scrollTop(d.prop("scrollHeight"));

}
// Mute our video 
const muteUnmute = () => {
    console.log(myVideoStream)
    const enabled = myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) {
        myVideoStream.getAudioTracks()[0].enabled = false;
        setUnmuteButton();
        } else {
        setMuteButton();
        myVideoStream.getAudioTracks()[0].enabled = true;
        
        
    }
}



const playStop = () => {
    console.log('object')
    let enabled = myVideoStream.getVideoTracks()[0].enabled;
    if (enabled) {
        myVideoStream.getVideoTracks()[0].enabled = false;
    }else{
        setStopVideo()
        myVideoStream.getVideoTracks()[0].enabled = true;
    }
}

const setMuteButton = () => {
    const html = ` 
    <i class="fas fa-microphone-slash"></i>
    <span>Mute</span> 
    `
    document.querySelector('.main__mute_button').innerHtml = html;
}

const setUnmuteButton = () => {
    const html = `
    <i class="fas fa-microphone"></i>
    <span>Unmute</span>
    `
    document.querySelector('.main__mute_button').innerHtml = html;

}

const setStopVideo = () => {
    const html = `
    <i class="fas fa-video"></i>
    <span>StopVideo</span>
    `
    document.querySelector('.main__video_button').innerHtml = html;
}


const setPlayVideo = () => {
    const html = `
    <i class="stop fas fa-video-slash"></i>
    <span>PlayVideo</span>
    `
    document.querySelector('.main__video__button').innerHTMl = html;
}


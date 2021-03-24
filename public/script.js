const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video'); // create html document
myVideo.muted = true; // dont want your own video to replay back to you 

let myVideoStream // imports your video
navigator.mediaDevices.getUserMedia({  
    video: true,
    audio: true
}).then(stream =>{
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
})

const addVideoStream = (video, stream) =>{  // create function take in a video object on the element  , video.src play this stream when we load all datat for specific stream we will play stream
  video.srcObject = stream;
  video.addEventListener('loadedmetadata',() => {
      video.play()
  })
   videoGrid.append(video);

}
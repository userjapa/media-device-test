// Video Element
let video = document.getElementById('video')
// Snap Buttom
let snap = document.getElementById('snap')
// Canvas
let canvas = document.getElementById('canvas')
// Canvas Context
let context = canvas.getContext('2d')

// Check if the browser supports Media Devices and Get User Media
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Constraints
  const constraints = { video: true }
  // Get User Media
  navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    // Set Stream
    video.src = window.URL.createObjectURL(stream)
    video.play()
    setTimeout(() => {
      canvas.height = video.videoHeight
      canvas.width = video.videoWidth
    }, 500)
  })
}

// Take Snap
snap.addEventListener('click', () => {
  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
})

function VideoJs(){
    var videoUrl = document.getElementById("videoUrl").value
    var jsApi_xm =  "https://jx.xmflv.com/?url="
    videoUrl = jsApi_xm.concat(videoUrl)
    document.location = videoUrl
}
(function(){

var urlargs     = urlparams();
var video_out   = document.getElementById("vid-box");
var stream_info = document.getElementById("stream-info");
var here_now    = document.getElementById("here-now"); 

// Handle error if stream is not in urlargs.
if (!('stream' in urlargs)) {
	handleNoStream();
    return;
}

// Get URL params
function urlparams() {
    var params = {};
    if (location.href.indexOf('?') < 0) return params;
    PUBNUB.each(
        location.href.split('?')[1].split('&'),
        function(data) { var d = data.split('='); params[d[0]] = d[1]; }
    );
    return params;
}

function handleNoStream(){
	video_out.innerHTML="<h2>That stream no longer exists!</h2>";
	stream_info.hidden=true;
}
...

}())
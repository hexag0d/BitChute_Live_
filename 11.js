var phone = window.phone = PHONE({
    number        : "EmbedViewer" + Math.floor(Math.random()*100), // random viewer name
    publish_key   : 'your_pub_key', // Your Pub Key
    subscribe_key : 'your_sub_key', // Your Sub Key
    oneway        : true,
});
var ctrl = window.ctrl = CONTROLLER(phone);
ctrl.ready(function(){
	ctrl.isStreaming(stream, function(isOn){
		if (isOn) ctrl.joinStream(stream);
		else handleNoStream();
	}); 
});
ctrl.receive(function(session){
    session.connected(function(session){ stream_info.hidden=false; video_out.appendChild(session.video); });
    session.ended(function(session){ handleNoStream(); });
});
ctrl.streamPresence(function(m){
	here_now.innerHTML = m.occupancy;
});
ctrl.unable(function(){ handleNoStream(); });
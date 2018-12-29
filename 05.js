function watch(form){
	var num = form.number.value;  // Stream to join
	var phone = window.phone = PHONE({
	    number        : "Viewer" + Math.floor(Math.random()*100), // Random name
	    publish_key   : 'your_pub_key', // Your Pub Key
	    subscribe_key : 'your_sub_key', // Your Sub Key
	    oneway        : true	// One way streaming enabled
	});
	var ctrl = window.ctrl = CONTROLLER(phone, true);
	ctrl.ready(function(){
		ctrl.isStreaming(num, function(isOn){
			if (isOn) ctrl.joinStream(num);
			else alert("User is not streaming!");
		});
	});
	ctrl.receive(function(session){
	    session.connected(function(session){ video_out.appendChild(session.video); });
	});
	ctrl.streamPresence(function(m){ here_now.innerHTML=m.occupancy; });
	return false;  // Prevent form from submitting
}
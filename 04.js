function stream(form) {
	streamName = form.streamname.value || Math.floor(Math.random()*100)+''; // Random stream if not provided
	var phone = window.phone = PHONE({
	    number        : streamName, // listen on username else random
	    publish_key   : 'your_pub_key', // Your Pub Key
	    subscribe_key : 'your_sub_key', // Your Sub Key
	    oneway        : true,	// One-Way streaming enabled
	    broadcast     : true	// True since you are the broadcaster
	});
	var ctrl = window.ctrl = CONTROLLER(phone);
	ctrl.ready(function(){
		form.streamname.style.background="#55ff5b"; 
		form.stream_submit.hidden="true"; 
		ctrl.addLocalStream(video_out);
		ctrl.stream(); 	// Begin streaming video
	});
	ctrl.streamPresence(function(m){ here_now.innerHTML=m.occupancy; });
	return false;  // So form does not submit
}
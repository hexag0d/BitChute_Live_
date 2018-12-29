function genEmbed(w,h){
	if (!streamName) return;  // If global var not set, not streaming
	var url = "http://<your-webstie>/embed.html?stream=" + streamName;
	var embed    = document.createElement('iframe');
	embed.src    = url;
	embed.width  = w;
	embed.height = h;
	embed.setAttribute("frameborder", 0);
	embed_code.innerHTML = 'Embed Code: ';
	embed_code.appendChild(document.createTextNode(embed.outerHTML));
}
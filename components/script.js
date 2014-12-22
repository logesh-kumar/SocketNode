var socket = io();
var nickname  = "Anonimous";	
$('#btn-nick').click(function(){
	console.log($('#nick').val());
	nickname = $('#nick').val();
});
$('form').submit(function(){


	var msg = $('#m').val();

	socket.emit('chat', nickname+ ":"+ msg);
	$('#m').val('');
	$('#nick').val('');
	return false;
});

socket.on('chat', function(msg){
	$('#messages').append($('<li>').text(msg));
});

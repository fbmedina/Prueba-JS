$(document).ready(function() {

	var back = ["red","blue","green"];
	var rand = back[Math.floor(Math.random() * back.length)];

    $("#evento").on('click', function() {
    	$(this).css({
    		background: rand
    	});
    });
});
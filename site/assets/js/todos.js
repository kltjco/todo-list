// var todos = [
// 	"Walk dogs",
// 	"Throw trash",
// 	"Change oil",

// ]

// 	for(var i = 0; i < todos.length; i++){
// 		var todo = "<li> <span class=\"delete\">X</span> " + todos[i] + "</li>";
// 		$("ul").append(todo);

// 	}

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

});

$("ul").on("click", ".delete", function(event){
		
		$(this).parent().fadeOut(400, function(){
			$(this).remove();
		});

		event.stopPropagation();

});



$('input[type="text"]').on("keypress", function(event){

	if(event.key === "Enter" && $(this).val() !== ""){
		// push value of input to todos array

		var todoText = $(this).val();
		var todo = "<li> <span class=\"delete\"> <i class=\"far fa-trash-alt\"></i> </span> " + todoText + "</li>";
		// todos.push(todo);
		$("ul").append(todo);
		console.log("added new todo");
		$(this).val("");

	} 

});

// $("ul").text("hello");


$("#plus").on("click", function(){
	$('input[type="text"]').fadeToggle(250);
});

$("li").on("mouseover", function(){
	$("li span").addClass("show");
})

$("li").on("mouseleave", function(){
	$("li span").removeClass("show");
})







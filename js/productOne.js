	$.each(products, function (index, value){
		console.log(index + " : "+ value);
		//we want to find the id of its catagory
		//we want tp append the img src=value.image

	if (value === (index, value) ) {
		
	}

	$('#'+value.category+' > div').append("<div class='item'><img src="+value.image +"></div>")

	})


// $.each( [ "a", "b", "c" ], function( i, l ){
//   alert( "Index #" + i + ": " + l );
// });
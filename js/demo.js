jQuery( function( $ ){
	// grab the existing css values to start
	var box_css = {
		borderRadius:    $( '#box' ).css( "borderRadius" ),
		boxShadow:       $( '#box' ).css( "boxShadow" ),
		boxShadowBlur:   $( '#box' ).css( "boxShadowBlur" ),
		boxShadowColor:  $( '#box' ).css( "boxShadowColor" ),
		boxShadowSpread: $( '#box' ).css( "boxShadowSpread" )
	};

	// set the value of the form elements to the initial css values
	$( '#borderRadius' ).val( box_css.borderRadius );
	$( '#boxShadowColor' ).val( box_css.boxShadowColor );
	$( '#boxShadowBlur' ).val( box_css.boxShadowBlur );
	$( '#boxShadowSpread' ).val( box_css.boxShadowSpread );
	$( '#boxShadow' ).val( box_css.boxShadow );
	
	// link form fields to an object ( http://api.jquery.com/link/ )
	// when the form field is updated, the object is updated as well as the css and vice versa
	$( '#borderRadius' ).link( box_css, {
		borderRadius: {
			convert: function( value, source, target ) {
				$( '#box' ).css( "borderRadius", parseInt(value) );
				return value;
			},
			convertBack: function( value, source, target ) {
				$( '#box' ).css( "borderRadius", parseInt(value) );
				return value;
			}
		}
	});

	// or just update the css straight up with the form
	$( '#boxShadowColor' ).change( function() {
		$( '#box' ).css( "boxShadowColor",  $(this).val() );
	});

	$( '#boxShadowBlur' ).change( function() {
		$( '#box' ).css( "boxShadowBlur",  parseInt($(this).val()) );
	});

	$( '#boxShadowSpread' ).change( function() {
		$( '#box' ).css( "boxShadowSpread",  $(this).val() );
	});

	$( '#boxShadow' ).change( function() {
		$( '#box' ).css( "boxShadow",  $(this).val() );
	});

});
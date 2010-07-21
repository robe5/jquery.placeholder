/**                                             
 * jQuery Placeholder plugin
 * Version 1.0
 * 
 * Usage: $('input[placeholder]').placeholder();
 */
(function($){
  $.fn.placeholder = function(){
		// ignore if placeholder is supported by the browser
    if ($.fn.placeholder.supported()){
      return $(this);
    }else{
			// avoiding send placeholder text on form submit
      $(this).parent('form').submit(function(e){
        $('input[placeholder].placeholder', this).val('');
      });

      // enabling the placeholder
      $(this).each(function(){
        $.fn.placeholder.on(this);
      });

      return $(this)      
				// placeholder when focus is received
        .focus(function(){
          if ($(this).hasClass('placeholder')){
            $.fn.placeholder.off(this);
          }
        })
				// no placeholder when focus is lost
        .blur(function(){
          if ($(this).val() == ''){
            $.fn.placeholder.on(this);
          }
        });
    }
  };

	// This function detects if the browser natevely supports placeholder
  // Extracted from: http://diveintohtml5.org/detect.html#input-placeholder
  $.fn.placeholder.supported = function(){
    var input = document.createElement('input');
    return !!('placeholder' in input);
  };

	// Adds the placeholder content into the input value
  $.fn.placeholder.on = function(el){
    var $el = $(el);
    $el.val($el.attr('placeholder')).addClass('placeholder');
  };

	// Remove the placeholder content
  $.fn.placeholder.off = function(el){
    $(el).val('').removeClass('placeholder');
  };
})(jQuery);
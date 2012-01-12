(function ($) {

  Drupal.behaviors.hideTips = {
    attach: function(context) {
      
      /* 
       *  Hide and show formatting tips.
       */
      var tips = $(".filter-wrapper .fieldset-wrapper > *");
      // Hide formating tips by default
      $(tips).not(".filter-help, .form-type-select").hide();
      // Show Tips On Click and unbind for the next click
      $("a", tips).click(function() {
        $(this).parents(".filter-help").siblings().show();
        $(this).unbind('click');
        return false;
      });
            
    }

  };

})(jQuery);

This is a small script that will hide the (way too big) text format information area 
from under your text input boxes in Drupal 7.

When a form with a text area is loaded the tips are hidden and only a link to show 
more tips is visible, the first click will reveal the text format tips, while another
click will take the user to the tips full page. 

## How to use
### Simple use from your theme or module:
* Put the script under the root of your theme/module directory in a directory called scripts.
* Call the script from your .info file by adding this line :
      
      scripts[] = scripts/script.js
      
* Refresh your caches and watch amazed as your forms become beautiful again.

## Modifications
With small modifications to line 14 of the script you can animate the way the tips apear :

* For a fade-in effect -

    $(this).parents(".filter-help").siblings().fadeIn("slow");
    
* Or if you want a slide-down effect -
 
    $(this).parents(".filter-help").siblings().slideDown("slow");

## Notes
* This script will work with multiple text areas on the same page.
* If your theme messes up with the tips fieldset's mark-up you may have to make some 
  adjustments to the script

This jQuery Plugin allows you to use the HTML5 placeholder feature in all browsers.
In case the browser supports it natively this plugin won't do anything.

# Usage

*HTML*

    <input name="email" type="text" placeholder="Your email here" />

*CSS*

    input.placeholder{
      color: #cccccc;
    }

*jQuery*

    $(document).ready(function(){
      $('input[placeholder]').placeholder();
    });
    
# Demo

You can find a demo and an explanation (in spanish, sorry) of the plugin in the next link:

[http://theproc.es/2010/3/17/15907/atributo-placeholder-en-todos-los-navegadores](http://theproc.es/2010/3/17/15907/atributo-placeholder-en-todos-los-navegadores)
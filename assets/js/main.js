/*---------------------------------------------
Template name:  taukir-quickstart || html template
Version:        1.0
Author:  MD Taukir CH
Author url:     https://github.com/rajibmehedihasan

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]
----------------------------------------------*/

(function ($) {
  $(document).ready(function () {
    ma5menu({
        menu: '.site-menu',
        activeClass: 'active',
        footer: '#ma5menu-tools',
        position: 'left',
        closeOnBodyClick: true,
    });
});

var names = ['Oily scan', 'Dry Scan', 'test3', 'test4'];

setInterval(function() {
  var rand = Math.floor(Math.random() * 4);
  document.getElementById("name").innerHTML = names[rand];
}, 2000);

  })(jQuery);
  
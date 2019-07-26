var h = document.getElementById('header');
h.innerHTML += '<br>on-ele, self co-a build-in | 属性克制, 自身ex内建';

var filter = document.getElementById('filter');
filter.outerHTML += "<div id='ex'> "
        "<input type='checkbox' name='ex-kat' value='kat' checked>b刀 "
        "<input type='checkbox' name='ex-rod' value='rod' checked>w法 "
        "<input type='checkbox' name='ex-dag' value='dag'>d匕 "
        "<input type='checkbox' name='ex-bow' value='bow'>b弓 "
        "</div> " 

window.onsubmit = function() {
    let i, q = -1, e = document.forms[0].elements; 
    for(i = 0; i < e.length; i++ )
    if(e[0].value.search(/[\d]/g) >= 0) q = i;
    if(q >= 0) {
        e[q].focus();
        alert('ism darchasida raqam qatnashmasligi shart!');
        return false;
    }
};
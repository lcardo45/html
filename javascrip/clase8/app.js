function suma(){

    //var a=document.getElementById('a').value; 
    //var b=document.getElementById('b').value;

    var a = document.f1.a.value;

    var b = document.f1.b.value;

    var r = document.f1.c.value;

    r = parseFloat(a) + parseFloat(b)

    document.f1.c.value= r;

    alert("la suma es "+ r)
}
function resta(){

    //var a=document.getElementById('a').value; 
    //var b=document.getElementById('b').value;

    var a = document.f1.a.value;

    var b = document.f1.b.value;

    var r = document.f1.c.value;

    r = parseFloat(a) - parseFloat(b)

    document.f1.c.value= r;

    alert("la resta es "+ r)
}
let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

cel.addEventListener("input",function(){
    let c = parseFloat(cel.value);
    let f = (c*9/5)+32;
    fah.value = f.toFixed(2);

})

fah.addEventListener("input",function(){
    let f = parseFloat(fah.value);
    let c = (f-32)*5/9;
    cel.value = c.toFixed(2);
})
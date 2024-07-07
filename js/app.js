document.getElementById("htmlCode").value = `<div>\n\n</div>`;
document.getElementById("cssCode").value = `<style>\n\n</style>`;
document.getElementById("jsCode").value = `<script>\n\n</script>`;


var htmlCode=""
var cssCode = ""
var jsCode = ""
getDataFromLocalStorage()
showPreview()
function showPreview(){
    htmlCode = document.getElementById("htmlCode").value;
    cssCode = ""+document.getElementById("cssCode").value+"";
    jsCode = ""+document.getElementById("jsCode").value+"";
    addToLocalStorage()
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}

function addToLocalStorage(){
    window.localStorage.setItem("html",JSON.stringify(htmlCode));
    window.localStorage.setItem("css",JSON.stringify(cssCode));
    window.localStorage.setItem("js",JSON.stringify(jsCode));

};
function getDataFromLocalStorage(){
    let html = window.localStorage.getItem("html");
    let css = window.localStorage.getItem("css");
    let js = window.localStorage.getItem("js");

    if(html){
        let htmlCode = JSON.parse(html);
        document.getElementById("htmlCode").value =  htmlCode ;
    }
    if(css){
        let cssCode = JSON.parse(css);
        document.getElementById("cssCode").value = cssCode;
    }
    if(js){
        let jsCode = JSON.parse(js);
        document.getElementById("jsCode").value = jsCode;
    }
}


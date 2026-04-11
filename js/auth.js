
if(!sessionStorage.getItem("user")){
window.location.href="login.html";
}
function logout(){
sessionStorage.clear();
window.location.href="login.html";
}
let t;
function resetTimer(){
clearTimeout(t);
t=setTimeout(()=>{alert("Logged out due to inactivity");logout();},1800000);
}
["click","mousemove","keypress","scroll","touchstart"].forEach(e=>{document.addEventListener(e,resetTimer,true);});
resetTimer();

function dropdownMenu(){
    var x = document.getElementById("dropdownclick");
    if(x.className==="list-nav"){
        x.className += " responsive";/*change navtop for navtop.responsive */
    }else{
        x.className = "list-nav";
    }
}
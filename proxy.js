function fetch(){
    var fetch
    if(axions){
        fetch = axions
    }
    if($ && $.ajax){
        fetch = $.ajax
    }
    return fetch
}


Function.prototype.before = function(fn){
    var _this = this
    return function(){
        fn.apply(this, arguments)
        return _this.apply(this, arguments)
    }
}

Function.prototype.after = function(fn){
    var _this = this
    return function(){
        var result = _this.apply(this, arguments)
        fn.apply(this, arguments)
        return result
    }
}
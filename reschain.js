var fn1 = function(val){
    if(val === 1){
        console.log('fn1=>' + val)
    }else{
        return 'next'
    }
}

var fn2 = function(val){
    console.log('fn2=>' + val)
    return 'next'
}

var fn3 = function(val){
    console.log('fn3=>' + val)
    return 'next'
}

Function.prototype.after = function(fn){
    var self = this
    return function(){
        var ret = self.apply(this, arguments)
        if(ret === 'next'){
            return fn.apply(this, arguments)
        }
        return ret
    }
}

var order = fn1.after(fn2).after(fn3)
order(2)
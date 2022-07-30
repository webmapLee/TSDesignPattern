var makeCommand = function(receiver,state){
    return function(...args){
        receiver[state](args)
    }
}

var Ryu = {
    attack:function(){
        console.log('attack')
    },
    defense:function(){
        console.log('defense')
    },
    trouch:function(){
        console.log('trouch')
    }
}
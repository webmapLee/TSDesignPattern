/**
 享元模式是一种性能优化的模式，核心是运用技术来有效支持大量细粒度的对象，
 如果系统中因为创建大量类似的对象而导致内存占用过高，就可以用它
 将共享的划分为内部状态，不共享的划分为外部状态
 */

var Model = function(sex,underwear){
    this.sex = sex
    this.underwear = underwear
}

Model.prototype.takePhoto = function(){
    console.log(`sex=${this.sex} underwear=${this.underwear}`)
    for(var i = 0;i<50;i++){
        var model = new Model('male','underwear' + i)
        model.takePhoto()
    }
}

for(var j = 0;j<50;j++){
    var model = new Model('male','underwear' + j)
    model.takePhoto()
}
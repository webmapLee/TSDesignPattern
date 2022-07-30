//抽象组件
interface Component{
    fn():void
}

//具体的组件
class ConcreateComponent implements Component{
    public fn(): void {
        console.log('基本功能：显示+隐藏')
    }
}

//装饰角色
class Decorator implements Component{
    //一个组件的引用
    private component:Component
    constructor(component:Component){
        this.component = component
    }
    public fn(): void {
        //客户端的调用委派给具体的子类
        this.component.fn()
    }
}

class ConcreateDecorator extends Decorator{
    constructor(component:Component){
        super(component)
    }

    public fn():void {
        super.fn()
        console.log('附加功能')
        this.animation()
        this.active()
    }
    private animation():void{
        console.log('Animation')
    }
    private active():void{
        console.log('active')
    }
}

const component:Component = new ConcreateComponent();
console.log('----------装饰前----------')
component.fn()
const newComponent:Component = new ConcreateDecorator(component);
console.log('----------装饰后----------')
newComponent.fn()
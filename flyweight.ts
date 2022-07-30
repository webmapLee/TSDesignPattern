//享元模式
interface Shape{
    draw():void
}

class Circle implements Shape{
    private color:string
    private x:number
    private y:number
    private radius:number

    constructor(color:string){
        this.color = color
    }

    public setX(x:number){
        this.x = x
    }
    public setY(y:number){
        this.y = y
    }
    public setRadius(radius:number){
        this.radius = radius
    }
    public draw(): void {
        console.log("draw")
    }
}


//工厂函数中共享相同color的实例
class ShapeFactory{
    private static circleMap = new Map<string,Shape>();

    public static getCircle(color:string):Shape{
        let circle:Circle = <Circle>this.circleMap.get(color);
        if(!circle){
            circle = new Circle(color);
            this.circleMap.set(color, circle);
            console.log('实例创建成功')
        }
        return circle;
    }
}

class FlyweightPatternDemo{
    private static colors:string[] = ['red','black','blue','green','yellow']
    constructor(){
        for(let i = 0;i<20;i++){
            const circle:Circle = <Circle>ShapeFactory.getCircle(FlyweightPatternDemo.getRandomColor());
            circle.setX(FlyweightPatternDemo.getRandomX())
            circle.setY(FlyweightPatternDemo.getRandomY())
            circle.setRadius(100)
            circle.draw()
        }
    }

    private static getRandomColor():string {
        return this.colors[Math.ceil(Math.random()*(this.colors.length - 1))];
    }
    private static getRandomX():number {
        return Math.random() * 800
    }
    private static getRandomY():number {
        return Math.random() * 500
    }
}
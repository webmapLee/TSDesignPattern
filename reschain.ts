/**
 * @description: 任务抽象类定义
 * 所有的任务都必须有
 * 1.任务接受着：sucesser
 * 2.执行任务的方法： handlerRequest 
 * 3.获取任务的方法：getNextHandler
 * 4.设置任务的方法：setNextHandler
 * @return {*}
 */
abstract class Handler{
    public sucesser:Handler
    public abstract handlerRequest(user:string,days:number):void
    //获取下一个任务实例
    public getNextHandler():Handler{
        return this.sucesser;
    }
    //设置下一个任务实例
    public setNextHandler(handler:Handler):void{
        this.sucesser = handler;
    }
}

//第一个任务类
class HeadTeacher extends Handler{
    //执行具体的任务
    public handlerRequest(user:string,days:number):void{
        if(days < 5){
            console.log(`班主任同意${user}请假`)
        }else{
            console.log(`请系主任审批${user}的请假`)
        }
        //如果有下一个任务，则执行下一个任务
        if(this.getNextHandler() !== null){
            const nextHandler = this.getNextHandler();
            nextHandler.handlerRequest(user,days);
            return
        }
        return null
    }
}

//同上
class Department extends Handler{
    public handlerRequest(user:string,days:number):void{
        if(days < 30){
            console.log(`系主任同意${user}请假`)
        }else{
            console.log(`请校长审批${user}的请假`)
        }
        if(this.getNextHandler() !== null){
            const nextHandler = this.getNextHandler();
            nextHandler.handlerRequest(user,days);
            return
        }
        return null
    }
}

//同上
class Leader extends Handler{
    public handlerRequest(user:string,days:number):void{
        if(days >= 30){
            console.log(`校长同意${user}请假`)
        }else if(this.getNextHandler() !== null){
            const nextHandler = this.getNextHandler();
            nextHandler.handlerRequest(user,days);
            return
        }
        
        return null
    }
}

class SimpleFactory{
    public static TYPE_HeaderTeacher:number = 1
    public static TYPE_Department:number = 2
    public static TYPE_Leader:number = 3

    public static createHandler(type:number):Handler{
        switch(type){
            case SimpleFactory.TYPE_HeaderTeacher:
                return new HeadTeacher();
            case SimpleFactory.TYPE_Department:
                return new Department();
            case SimpleFactory.TYPE_Leader:
                return new Leader();
            default:
                return new HeadTeacher();
        }
    }
}

const h1:Handler = SimpleFactory.createHandler(SimpleFactory.TYPE_HeaderTeacher)
const h2:Handler = SimpleFactory.createHandler(SimpleFactory.TYPE_Department)
const h3:Handler = SimpleFactory.createHandler(SimpleFactory.TYPE_Leader)

h1.setNextHandler(h2)
h2.setNextHandler(h3)

h1.handlerRequest('张三',35)


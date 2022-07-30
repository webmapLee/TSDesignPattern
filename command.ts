//具体干活的
class Reciever {
    public action():void{
        console.log('action');
    }
}

//对应的命令接口
interface Command{
    execute():void
}

//中介接活，找人干活
class ConcreateCommand implements Command{
    private receiver:Reciever = null
    constructor(receiver:Reciever){
        this.receiver = receiver
    }
    public execute():void{
        this.receiver.action();
    }
}

//老板命令干活
class Invoker{
    private command:Command = null
    constructor(command:Command){
        this.command = command
    }
    public action():void{
        this.command.execute()
    }
}

const reciever:Reciever = new Reciever()
const command:Command = new ConcreateCommand(reciever)
const invoker:Invoker = new Invoker(command)
invoker.action()
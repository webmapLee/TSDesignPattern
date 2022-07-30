interface Observer{
    update(version:number):void
}

//主题接口
interface Subject{
    addObserver(key:string,observer:Observer):void
    deleteObserver(key:string):void
    notifyObservers():void
}

//杂志订阅的一个主题
class MagazineSubject implements Subject{
    private observers:Map<string, Observer> = new Map<string, Observer>();
    private version:number = 0;
    //添加订阅
    public addObserver(key:string,obj:Observer):void{
        this.observers.set(key,obj);
    }
    //删除订阅
    public deleteObserver(key:string):void{
        if(this.observers.has(key)){
            this.observers.delete(key);
        }else{
            throw new Error("Observer " + key + " is not deleted");
        }
    }
    //通知订阅
    public notifyObservers():void{
        this.observers.forEach(obj => obj.update(this.version));
    }
    //发版通知
    public publish(){
        this.version ++;
        this.notifyObservers()
    }
}

//观察者，主题中订阅的对象
class CustomerObserver implements Observer{
    private name:string;
    private version:number;
    constructor(name:string){
        this.name = name;
    }
    public update(version:number):void{
        this.version = version
        console.log('新版本')
        this.buy()
    }
    public buy():void{
        console.log(`${this.name}购买了第${this.version}版的杂志！`)
    }
}

const magazine:MagazineSubject = new MagazineSubject();

const a:CustomerObserver = new CustomerObserver('A')
const b:CustomerObserver = new CustomerObserver('B')
const c:CustomerObserver = new CustomerObserver('C')
magazine.addObserver('a',a)
magazine.addObserver('b',b)
magazine.addObserver('c',c)
magazine.publish()



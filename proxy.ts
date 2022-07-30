//代理模式
interface IUserDao{
    save():void
}

class UserDao implements IUserDao{
    public save():void{
        console.log("UserDao Save");
    }
}

class UserDaoProxy implements IUserDao{
    private target:IUserDao
    constructor(target:IUserDao){
        this.target = target;
    }
    save(): void {
        console.log('开始 save')
        this.target.save()
        console.log('结束 save')
    }
}

const target:UserDao = new UserDao()
const proxy:UserDaoProxy = new UserDaoProxy(target)
proxy.save()
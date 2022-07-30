//单例，只new一次
class Singleton{
    private static _instance: Singleton;
    private constructor(){}
    static getInstance():Singleton{
        if(!Singleton._instance){
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;

    }
}

Singleton.getInstance()
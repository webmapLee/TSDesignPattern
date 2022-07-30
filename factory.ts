abstract class INoodles{
    public abstract desc():void
}

class LZNoodles extends INoodles{
    public desc(): void {
        console.log('兰州拉面')
    }
}

class SGMNoodles extends INoodles{
    public desc(): void {
        console.log('手擀面')
    }
}

class FBMNoodles extends INoodles{
    public desc(): void {
        console.log('方便面')
    }
}

class SmpNoodlesFactory{
    public static TYPE_LZ:number = 1;//兰州拉面
    public static TYPE_SGM:number = 2;//手擀面
    public static TYPE_FBM:number = 3;//方便面

    public static createNoodles(type:number):INoodles{
        switch(type){
            case 1:
                return new LZNoodles()
            case 2:
                return new SGMNoodles()
            case 3:
                return new FBMNoodles()
        }
    }
}

const noodles:INoodles = SmpNoodlesFactory.createNoodles(SmpNoodlesFactory.TYPE_FBM)

noodles.desc()
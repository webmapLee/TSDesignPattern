//具体的行为和策略类独立分开
//用于做适配
interface PriceStartegy{
    calPrice(originalPrice: number):number
}

//第一个策略类
class PcStrategy implements PriceStartegy{
    public calPrice(originalPrice: number):number{
        return originalPrice * 0.5;
    }
}

//第二个策略类
class KcStrategy implements PriceStartegy{
    public calPrice(originalPrice: number):number{
        return originalPrice * 1;
    }
}

//第三个策略类
class ZcStrategy implements PriceStartegy{
    public calPrice(originalPrice: number):number{
        return originalPrice * 1.5;
    }
}

//策略上下文，根据传的策略实例，指定对应的策略方法
class PriceContext{
    private priceStrategy:PriceStartegy;
    constructor(priceStrategy:PriceStartegy){
        this.priceStrategy = priceStrategy;
    }
    public calPrice(originalPrice: number):number{
        return this.priceStrategy.calPrice(originalPrice);
    }
}

const pcStrategy:PriceStartegy = new PcStrategy()
const kcStrategy:PriceStartegy = new KcStrategy()
const zcStrategy:PriceStartegy = new ZcStrategy()

const pcPriceStrategy:PriceStartegy = new PriceContext(pcStrategy)
const kcPriceStrategy:PriceStartegy = new PriceContext(pcStrategy)
const zcPriceStrategy:PriceStartegy = new PriceContext(pcStrategy)

pcPriceStrategy.calPrice(100)
kcPriceStrategy.calPrice(100)
zcPriceStrategy.calPrice(100)
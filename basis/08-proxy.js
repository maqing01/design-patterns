/**
 * 代理模式
 * 核心：
 *   （1）使用者无权访问目标对象
 *   （2）中间加代理，通过代理做授权和控制
 */
/* 网购场景 */
const me = { // 用户
    shop: undefined,
    buy() {
        console.log('网购：' + this.shop.delever());
    },
};
const computerShop = { // 商家
    delegate: undefined,
    delever() {
        return this.delegate.delever();
    },
};
const delegate = { // 物流
    delever() {
        return '顺丰物流正在送货';
    },
};

/* 购物流程 */
me.shop = computerShop; // 用户挑选商品
computerShop.delegate = delegate; // 商家联系合作物流

// 用户不会直接从商家获取货物 有物流代理配送
me.buy();

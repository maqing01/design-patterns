/**
 * 单例模式
 * 规则：
 *    （1）单例只能有一个实例
 *    （2）单例必须为其他所有调用方提供这一实例
 *    （3）单例实例一旦创建，就不会轻易销毁
 * 实现：
 *    （1）定义一个全局对象，作为可以全局访问单例的接口
 *    （2）定义一个单例方法，用来获取单例实例
 *    （3）在使用时，若单例实例不存在，则进行创建；若存在，则直接返回
 */
const Singleton = {
    instance() {
        if (this.__intance === undefined) {
            this.__intance = {
                name: '关羽',
                weapon: '青龙偃月刀',
                blood: 100,
                skill() {
                    console.log('挥刀斩');
                },
            };
        }
        return this.__intance;
    },
};

const user = Singleton.instance();
console.log(user.name, user.weapon);
user.skill();
user.skill = function() {
    console.log('斩首');
};
Singleton.instance().skill();

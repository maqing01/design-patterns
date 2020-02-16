/**
 * 装饰器模式
 * 对已有类的一种包装，在保持原类结构不修改的前提下扩展类的功能
 * 尽量保持装饰后的对象和原对象同样的接口，扩展对使用者透明
 */
const general = {
    name: '关羽',
    weapon: '青龙偃月刀',
    skill() {
        console.log(this.name, this.weapon, '挥刀斩');
    },
};
function GeneralPack(general) { // 装饰器类
    this.name = general.name;
    this.weapon = general.weapon;
    this.horse = '赤兔马';
    this.skill = function() {
        console.log(this.name, this.weapon, this.horse, '快马挥刀斩');
    };
}
const general_2 = new GeneralPack(general);
general.skill();
general_2.skill();

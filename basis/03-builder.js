/**
 * 建造者模式
 * 核心：
 *    使用多个简单的对象构造复杂对象
 * 优点：
 *    （1）建造者只独立完成拼装过程，易扩展、易维护
 *    （2）将复杂对象进行拆分，隐藏对象构建的内部细节，符合单一功能原则
 * 实现：
 *    （1）制定协议
 *       —— 协议的目的是为了提供给使用者使用接口
 *       —— 也是为了约束建造者构建的对象必须遵守约定
 *    （2）拆分生产者
 *       —— 生产者用来创建被查分后的具体对象
 *    （3）建造者进行组合
 */
const mealInterface = {
    getName() {
        throw '必须有套餐名';
    },
    getStaple() {
        throw '必须有主食';
    },
    getDrink() {
        throw '必须有饮料';
    },
};

function Staple(type) {
    switch (type) {
        case 1:
            return '汉堡包';
        case 2:
            return '鸡肉卷';
    }
}
function Drink(type) {
    switch (type) {
        case 1:
            return '可口可乐';
        case 2:
            return '热牛奶';
    }
}

/*
function restaurant(type) {
    const food = Object.create(mealInterface);
    food.getStaple = function() {
        return Staple(type);
    };
    food.getDrink = function() {
        return Drink(type);
    };
    switch (type) {
        case 1:
            food.getName = function() {
                return '可乐汉堡套餐';
            };
            break;
        case 2:
            food.getName = function() {
                return '牛奶鸡肉卷套餐';
            };
            break;
    }
    return food;
}
*/
function restaurant(type) {
    switch (type) {
        case 1: {
            const food = Object.create(mealInterface);
            food.getName = function() {
                return '可乐汉堡套餐';
            };
            food.getStaple = function() {
                return Staple(type);
            };
            food.getDrink = function() {
                return Drink(type);
            };
            return food;
        }
        case 2: {
            const food = Object.create(mealInterface);
            food.getName = function() {
                return '牛奶鸡肉卷套餐';
            };
            food.getStaple = function() {
                return Staple(type);
            };
            food.getDrink = function() {
                return Drink(type);
            };
            return food;
        }
    }
}
const f = restaurant(2);
console.log(f.getName(), f.getStaple(), f.getDrink());

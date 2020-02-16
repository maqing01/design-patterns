/**
 * 工厂模式
 * 核心：
 *    将对象的组装过程封装在工厂内部，对外提供统一的调用接口
 * 实现：
 *    在编程开发中，工厂模式主要由接口协议、实现类和工厂函数组成
 *   （1）接口协议，即提供给外部的调用方法和实现类的实现标准；
 *   （2）实现类是针对同一个协议的不同实现；
 *   （3）工厂函数是直接供开发者调用的方法，用来组装或创建对象实例。
 */

// Step1 制定接口协议 —— 抽象接口
const shapeInterface = {
    draw() {
        throw 'must be implemented';
    },
};

// Step2 创建实现类
function Circle() {
    this.draw = function() {
        console.log('Circle');
    };
}
Circle.prototype = shapeInterface;
function Rect() {
    this.draw = function() {
        console.log('Rect');
    };
}
Rect.prototype = shapeInterface;

// Step3 实现工厂函数
function Shape(type) {
    switch (type) {
        case 'Circle':
            return new Circle();
        case 'Rect':
            return new Rect();
    }
}
/**
 * 在实际开发中
 * 只会将shapeInterface和Shape函数暴露给其他开发者，而将Circle和Rect作为内部私有的类
 * 好处：将对象的真实构建封装了起来，对于其他开发者来说，他们只需要传入自己想创建的图形类型，调用工厂函数来构建图形对象即可
 */
const circle = Shape('Circle');
circle.draw();
const rect = Shape('Rect');
rect.draw();

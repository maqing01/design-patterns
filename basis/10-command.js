/**
 * 命令模式 —— 也叫策略模式
 * 常常用来进行复杂功能实现与使用的解耦
 * 核心：
 *    将功能的调用封装成命令，对使用方来说，只需要提供正确的命令和参数即可
 */
const Calc = {
    perform(p) {
        this.run(p.type, p.params);
    },
    run(command, params) {
        this[command](...params);
    },
    add(a, b) {
        console.log('a + b = ', a + b);
    },
    sub(a, b) {
        console.log('a - b = ', a - b);
    },
    mul(a, b) {
        console.log('a * b = ', a * b);
    },
    div(a, b) {
        console.log('a / b = ', a / b);
    },
};
const p1 = { type: 'add', params: [10, 5] };
const p2 = { type: 'sub', params: [10, 5] };
const p3 = { type: 'mul', params: [10, 5] };
const p4 = { type: 'div', params: [10, 5] };
Calc.perform(p1);
Calc.perform(p2);
Calc.perform(p3);
Calc.perform(p4);

Calc.run('add', [-1, 1]);

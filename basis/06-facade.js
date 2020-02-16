/**
 * 外观模式
 * 核心也是组合与包装
 * 将复杂的子系统进行组合，对外提供统一的访问接口，隐藏系统内部的复杂结构
 * 降低调用方的调用成本
 * 外观模式十分适用于这样的场景：
 *    多个方法组合调用，并且参数传递只在这些方法内部使用
 * 优点：
 *    可以简化调用过程、降低错误率，提高代码的复用性
 */
// 医院问诊流程
const register = {
    // 大厅挂号
    wait() {
        console.log('排队取号');
    },
    regist() {
        console.log('挂号');
    },
};
const doctor = {
    // 医生问诊
    diagnose() {
        console.log('问诊');
    },
    watchCheck(check) {
        console.log('查看检查结果：' + check);
    },
    medication() {
        console.log('开药方');
        return '药方A';
    },
};
const laboratory = {
    // 检验科检查
    makeCheck() {
        console.log('做检查');
        return '检查结果';
    },
};
const pharmacy = {
    // 药方抓药
    cost(medication) {
        console.log('付费：' + medication);
    },
    take() {
        console.log('取药回家');
    },
};
/*
// 流程复杂，病人不熟悉难以高效问诊
register.wait();
register.regist();
doctor.diagnose();
const result = laboratory.makeCheck();
doctor.watchCheck(result);
const medication = doctor.medication();
pharmacy.cost(medication);
pharmacy.take();
*/

// 创建提示牌 提醒用户问诊流程
const hospital = {
    watch() {
        register.wait();
        register.regist();
        doctor.diagnose();
        const result = laboratory.makeCheck();
        doctor.watchCheck(result);
        const medication = doctor.medication();
        pharmacy.cost(medication);
        pharmacy.take();
    },
};
hospital.watch();

/**
 * 备忘录模式 —— 也叫备份设计模式
 * 用来进行对象内部状态的备
 * 场景：
 *   （1）大量数据重复计算缓存
 *   （2）操作记录——撤销、重复
 */
const EditProtocol = {
    _stateArray: [],
    _refresh() {
        // 重置属性
        throw '必须实现_refresh方法';
    },
    _state() {
        // 获取属性
        throw '必须实现_state方法';
    },
    revoke() {
        this._refresh(this._stateArray.pop());
    },
    save() {
        this._stateArray.push(this._state());
    },
};

const teacher = {
    name: 'Jaki',
    age: 25,
    subject: 'Javascript',
    _refresh(state) {
        this.name = state.name;
        this.age = state.age;
        this.subject = state.subject;
    },
    _state() {
        return {
            name: this.name,
            age: this.age,
            subject: this.subject,
        };
    },
};
teacher.__proto__ = EditProtocol;

teacher.save();
console.log(teacher.name, teacher.age, teacher.subject);
teacher.name = 'Lucy';
teacher.age = 22;
console.log(teacher.name, teacher.age, teacher.subject);
teacher.revoke();
console.log(teacher.name, teacher.age, teacher.subject);

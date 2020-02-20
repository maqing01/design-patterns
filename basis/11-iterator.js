/**
 * 迭代器模式
 */
// 定义一个迭代器协议
const MyIterator = {
    next() {
        throw '必须实现next方法';
    },
};
// 实现迭代器对象
const myObj = {
    name: 'Jaki',
    age: 24,
    subject: 'JavaScript',
    teaching() {
        console.log('teaching');
    },
    _keys: ['name', 'age', 'subject'],
    _tip: 0,
    next() {
        return this._keys[this._tip++];
    },
};
myObj.__proto__ = MyIterator;
// 迭代器方法
function tool(obj, callback) {
    let item = obj.next();
    while (item !== undefined) {
        callback(item);
        item = obj.next();
    }
}

tool(myObj, function(item) {
    console.log(item);
})

/**
 * 适配器模式
 * 场景：—— 偏重应用、而非程序设计
 *    为两个互不兼容的系统提供可以调用的兼容接口
 */
// 已经存在的排序系统
const sort = {
    type: 'DESC',
    data: [],
    run() {
        switch (this.type) {
            case 'DESC':
                return this.data.sort((a, b) => b - a);
            case 'ASC':
                return this.data.sort((a, b) => a - b);
        }
    },
};
/*
sort.type = 'ASC';
sort.data = [1, 3, 2, 5, 4];
sort.run();
console.log(sort.data);
*/

// 新的输入数据结构
const d1 = 'D 1,3,2,5,4';
const d2 = 'A 1,3,2,5,4';

// 适配器
/*
const adapterSort = {
    _data: '',
    get data() {
        return this._data;
    },
    set data(str) {
        const arr = str.split(' ');
        const type = arr[0];
        sort.type = type === 'D' ? 'DESC' : 'ASC';
        const data = arr[1];
        sort.data = data !== undefined ? data.split(',') : [];
        this._data = str;
    },
    run() {
        return sort.run();
    }
};
*/
const adapterSort = {
    data: '',
    run() {
        const arr = this.data.split(' ');
        const type = arr[0];
        sort.type = type === 'D' ? 'DESC' : 'ASC';
        const data = arr[1];
        sort.data = data !== undefined ? data.split(',') : [];
        return sort.run();
    },
};
adapterSort.data = d2;
adapterSort.run();
console.log(sort.data);

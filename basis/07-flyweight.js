/**
 * 享元设计模式
 * 是一种对系统进行优化的设计模式
 * 对于存在大量对象的系统，使用享元模式可以显著减轻内存负担
 */
// 图书馆信息管理
/*
function Book(sn, name, content, author, reader, initTime, expireTime) {
    // 每多一条借阅记录，书籍的基本信息都会被创建一次
    // 书籍基本信息是不变的，重复创建造成系统资源浪费
    this.sn = sn;
    this.name = name;
    this.content = content;
    this.author = author;
    this.reader = reader;
    this.initTime = initTime;
    this.expireTime = expireTime;
    this.show = function() {
        console.log(this.sn, this.name, this.content, this.author, this.reader, this.initTime, this.expireTime);
    };
}
const book1 = new Book('10011', '老人与海', '在逆境中坚持', '海明威', 'Jaki', '2020.01.01', '2020.02.01');
const book2 = new Book('10011', '老人与海', '在逆境中坚持', '海明威', 'Maki', '2020.01.01', '2020.02.01');
console.log(book1,book2);
*/

// 提取公共信息类
function Book_In(sn, name, content, author) {
    this.sn = sn;
    this.name = name;
    this.content = content;
    this.author = author;
}
// 创建公共信息池
const bookPool = new Set();
// 创建借阅记录类
function Book(sn, name, content, author, reader, initTime, expireTime) {
    for (const book of bookPool) {
        if (book.sn === sn) {
            this.in = book;
        }
    }
    if (this.in === undefined) {
        this.in = new Book_In(sn, name, content, author);
        bookPool.add(this.in);
    }
    this.reader = reader;
    this.initTime = initTime;
    this.expireTime = expireTime;
    this.show = function() {
        console.log(this.in.sn, this.in.name, this.in.content, this.in.author, this.reader, this.initTime, this.expireTime);
    };
}
const book1 = new Book('10011', '老人与海', '在逆境中坚持', '海明威', 'Jaki', '2020.01.01', '2020.02.01');
const book2 = new Book('10011', '老人与海', '在逆境中坚持', '海明威', 'Maki', '2020.01.01', '2020.02.01');
book1.show();

console.log(book1.in === book2.in);

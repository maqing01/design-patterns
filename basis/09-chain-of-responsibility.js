/**
 * 责任链模式
 * 用来连接处理任务的一连串节点
 * 将复杂的处理过程拆分成多个负责方，并且可以灵活替换和修改
 */
function nextCheck(self, target) {
    if (self.nextHandler !== undefined) {
        return self.nextHandler.handle(target);
    } else {
        console.log('校验通过');
        return true;
    }
}
const typeCheck = {
    nextHandler: undefined,
    handle(target) {
        if (typeof target !== 'string') {
            console.log('必须为字符串');
            return false;
        }
        return nextCheck(this, target);
    },
};
const emptyCheck = {
    nextHandler: undefined,
    handle(target) {
        if (target === '') {
            console.log('字符串不能为空');
            return false;
        }
        return nextCheck(this, target);
    },
};
const validCheck = {
    nextHandler: undefined,
    handle(target) {
        if (!/^(www\.).+(\.com)$/.test(target)) {
            console.log('字符串不合规');
            return false;
        }
        return nextCheck(this, target);
    },
};
// typeCheck.nextHandler = emptyCheck;
// emptyCheck.nextHandler = validCheck;
// console.log(typeCheck.handle('www.a.com'));

// 串联校验器 生成校验器链
function getCheckChian(...chains) {
    for (let i = 0, len = chains.length; i < len - 1; i++) {
        const chain = chains[i];
        if (!chain || typeof chain.handle !== 'function') {
            throw 'check is invalid!';
        }
        chain.nextHandler = chains[i + 1];
    }
    return chains[0];
}

const checkChian = getCheckChian(typeCheck, emptyCheck, validCheck);
// 服用校验链
checkChian.handle();
checkChian.handle('');
checkChian.handle('www');
checkChian.handle('www.baidu.com');

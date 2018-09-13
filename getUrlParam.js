/*

获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组
*/

function getUrlParam(sUrl, sKey) {
    var reg = /[\?|&](\w+)\=(\w+)/g;
    var res = {};
    sUrl.replace(reg, function(a, k, v) {
        if (res[k]) {
            var t = res[k];
            res[k] = [].concat(t, v);
        } else {
            res[k] = v;
        }
    });
    if (sKey) {
        return res[sKey] || '';
    }
    return res;
}

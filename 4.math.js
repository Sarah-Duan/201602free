//在NODE里每个JS文件都是一个独立的模块
//在模块内部声明的变量都是私有变量，其它模块无法直接访问

var a = 10;
//定义一个内部变量
function add(a,b){
    return a+b;
}
//导出这个变量
exports.add = add;
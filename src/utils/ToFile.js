/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-07-06 11:38:45
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-07-06 12:08:14
 */
class ToFile{
    constructor(){

    }
    /**
     * 
     * @param {fileName} 文件名字 
     * @param {fileFormat} 文件后缀 
     * @param {titles} excel表头 数组["姓名","年龄"] 
     * @param {dataSource} excel数据 二维数组 [["小明"，18],["小红",17]] 
     */
    static toExcel({ dataSource = [], titles = [], fileName = 'data', fileFormat = 'xlsx' }) {
            var dataType = "\uFEFF"; //解决乱码问题
            dataType += titles.join(',');  //添加表格的头
            dataType += '\n'; // 以上是导出的Excel文件头部
            // 从dataSource中取出数据存入数据源（dataType）
            dataSource.map(item => dataType += `${item.join(',')}\n`);
    
            // 使用Blob，获得二进制实例
            const csvData = new Blob([dataType], {
                type: 'text/csv'
            });
            this.downFile(csvData,fileName,fileFormat);
    }
    /**
     * 导出json文件
     * @param {fileName} 文件名字 
     * @param {fileFormat} 文件后缀 
     * @param {data} json字符串 JSON.stringify({name:'张三',age:23}); 
     */
    static toJson({fileName="data",fileFormat="json", data}) {
        var export_blob = new Blob([data]);
        this.downFile(export_blob,fileName,fileFormat);
    }
    static downFile(blobData,fileName,fileFormat){
        // 创建a标签
        const _a = document.createElement('a');
        /**
        * URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL
        * 这里相当于为a标签添加了一个下载地址
        */
       var urlObject = window.URL || window.webkitURL || window;
        _a.href = urlObject.createObjectURL(blobData);
        // 该a标签点击后会打开新的标签页，人机交互会更加舒适
        _a.target = '_blank';
        // 为a标签规定被下载的超链接目标
        _a.download = `${fileName}.${fileFormat}`;
        // 将这个制作好的a标签置入body，并在点击之后移除，降低外界感知
        document.body.appendChild(_a);
        _a.click();
        document.body.removeChild(_a);
    }
}
export const  pages = () => {
    // 第一个参数：目录，第二个参数：是否查找子级目录，第三个参数：指定查找到文件
    const files = require.context("./views",true,/\.jsx$/);
    const components = [];
    files.keys().forEach(key => {
        const splitFilesName = key.split("/");
        const jsonObj = {};
        const path = splitFilesName[1].toLowerCase();
        const component = files(key).default;

        jsonObj.path = path;
        jsonObj.component = component

        components.push(jsonObj);
    })
    return components;
}
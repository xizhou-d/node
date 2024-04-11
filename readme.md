## package.json中的type字段含义
如果最近的package.json文件包含一个顶级字段“type”，其值为“module”，则以.js结尾或没有任何扩展名的文件将作为ES模块进行加载。

 

如果最近的package.json缺少“type”字段，或者包含“type”:“commonjs”，则无扩展名的文件和.js结尾文件将被视为commonjs。如果一直到卷根，还是没找到package.json, Node.js则按默认规则运行，就像package.json中没有“type”字段。“无扩展”指的是不包含扩展名的文件路径，而不是在说明符中选择性地删除文件扩展名。

 

不管“type”字段的值是多少，.mjs文件总是被当作ES模块，而.cjs文件总是被当作CommonJS。

 

总的来说，关于type，知道下面4点就行了：

type字段的产生用于定义package.json文件和该文件所在目录根目录中.js文件和无拓展名文件的处理方式。值为'module'则当作es模块处理；值为'commonjs'则被当作commonJs模块处理
目前node默认的是如果pacakage.json没有定义type字段，则按照commonJs规范处理
node官方建议包的开发者明确指定package.json中type字段的值
无论package.json中的type字段为何值，.mjs的文件都按照es模块来处理，.cjs的文件都按照commonJs模块来处理
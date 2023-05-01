const path=require('path');
//directory name//

console.log(path.dirname("C:\Users\admin\AppData\Local\Temp"));

//

//gives extension

console.log(path.extname("C:\Users\admin\AppData\Local\Temp.js"));
//

//filename

console.log(path.basename("C:\Users\admin\AppData\Local\Temp.js"));

//

const mypath=path.parse("C:\Users\admin\AppData\Local\Temp.js");
console.log(mypath.root);
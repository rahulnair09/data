const os=require('os');
console.log(os.arch());

//free mem//

const free=os.freemem();
console.log(free);

//Total Mem//

console.log(os.totalmem());

// Hostname//
console.log(os.hostname());

//platform//
console.log(os.platform());

//tmp dir

console.log(os.tmpdir());

//os type

console.log(os.type());
const password = "this-issa-rizz";

const hash = await Bun.password.hash(password);
const testvalue = hash;
const isMatch = await Bun.password.verify(password, hash);
console.log(hash);
// check how random can it interate
const test2 = await Bun.password.hash(testvalue)
console.log(test2)
if(testvalue == isMatch)
{
    console.log("this is a shit")
    
}else{
    console.log("check run")
}

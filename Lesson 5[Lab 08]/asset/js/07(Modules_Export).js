//1. Add export key work before const  
export const myVar = "Export Var By Adding Export Keyword In the Front!!";

//export this function at last line
function exp1() {
    return "Export as a list!!!";
}
// export {exp1}
//export this function at last line
function exp2() {
    return "Export as an Alias!!!";
}
// export{exp2}
//export this function at last line
function exp3() {
    return "Import as an Alias!!!";
}
// export{exp3}
//2. List export(comma separated list )

export {exp1,exp2,exp3};
//3. Export exp2 with AliasName ==> exp2_Alias
export {exp2 as exp2_Alias}

//4. Export exp3
// export{exp3}
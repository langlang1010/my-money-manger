// var json = {}
// json.name = 'name'
// json.ary = [1,2,3,4]

// var strJson = JSON.stringify(json)

// console.log(strJson)



var ary = ['1','2','3']
var result = ""
for(var i=0; i<ary.length-1; i++) {
    result += ary[i]
    result += ','
}
result += ary[ary.length-1]
console.log(result)
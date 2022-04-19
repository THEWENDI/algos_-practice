var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

function isPresent2d(arr2d, value){
    for(var i = 0; i < arr2d.length; i++)
    {
        for(var x = 0; x < arr2d[i].length; x++)
        {
            if(arr2d[i][x] == value)
            {
                return true;
            }
        }
    }
    return false
}

console.log(isPresent2d(arr2d,0))

//flatten the array

function flatten(arr2d){
    var flat = [];
    for(i = 0; i < arr2d.length;i++){
        for(x = 0; x < arr2d[i].length;x++){
            flat.push(arr2d[i][x]);
        }
    }
    return flat;
}

var result = flatten([[2, 5, 8],[3, 6, 1],[5, 7, 7]]);
console.log(result);

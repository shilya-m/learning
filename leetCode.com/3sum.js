/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function getNumsObj(nums){
    const res = [], dupl = {};
    let i, k;
    for (i=0; i < nums.length; i++){
        k=nums[i];
        if (dupl[k]===undefined){
            dupl[k]= 1;
        }else if (dupl[k] < 2){
            dupl[k]++;
        }else if (k===0 && dupl[k]===2){
            dupl[k]++;
        }else continue;
    }
    return dupl;
}

var threeSum = function(nums) {
    const numsObj = getNumsObj(nums);
    const res = [];
    const vals = Object.keys(numsObj).sort((a,b)=>a-b);
    for(let v of vals){
        if (numsObj[v]>1){
            if (v==0){
                if (numsObj[v]>=3)  res.push([0,0,0])
            }else{
                if (numsObj[-2*v] > 0){
                    res.push([Number(v), Number(v), -2*v].sort((a,b)=>a-b));
                }
            }
        }
    }
    const valsI = vals.map(i=>Number(i));
    const nL1 = valsI.length-2,
        nL2 = valsI.length -1;
    let i,j;
    let v1,v2,v3;
    for (i=0; i< nL1; i++){
        v1 = valsI[i];
        for (j=i+1; j< nL2; j++){
            v2 = valsI[j];
            v3 = -v1 -v2;
            if (numsObj[v3] != undefined && v3!=v2 && v3!=v1) {
                res.push([v1,v2,v3].sort((a,b)=>a-b));
            }
        }
    }
    return removeDuplicates(res);
};

function removeDuplicates(values){
    const diff = [], res = [];
    let i, v, h;
    for (i=0; i < values.length; i++){
        v = values[i];
        h = v.join('-');
        if (diff.indexOf(h)> -1) continue;
        diff.push(h);
        res.push(v);        
    }
    return res;
}

console.log(threeSum([-4,-1,-1,0,1,2]));
console.log(threeSum([0,0,0,0,0,0,0,0]));
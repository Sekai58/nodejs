
const merge = (unsortedArr,low,mid,high)=>{
    let mergeArr =[]
    let i=low;
    let j=mid+1;
    let k=0;
    while(i<= mid && j<= high){
        if(unsortedArr[i]<unsortedArr[j]){
            mergeArr[k] = unsortedArr[i]
            i+=1;
            k+=1;
            console.log(i,k)
        }
        else{
            mergeArr[k] = unsortedArr[j]
            j+=1;
            k+=1;
            console.log(j,k)
    }
}
    while(i<=mid){
        mergeArr[k] = unsortedArr[i]
        i+=1
        k+=1
    }
    while(j<=high){
        mergeArr[k] = unsortedArr[j]
        j+=1
        k+=1
    }
    for (let i = low; i <= high; i++) {
        unsortedArr[i] = mergeArr[i - low];
      }
}

const mergeSort = (unsortedArr,low,high)=>{
    if(low<high){
        let mid=Math.floor((low+high)/2)
        mergeSort(unsortedArr,low,mid)
        mergeSort(unsortedArr,mid+1,high)
        merge(unsortedArr,low,mid,high)
    }
}

let a = [7,6,5,1,4,8,10]

mergeSort(a, 0 ,a.length-1)
console.log(a)

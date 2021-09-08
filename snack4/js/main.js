// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].



function meltArr(arr1,arr2){
    arr3 =[];
    if (arr1.length == arr2.length){
        for (var i=0; i<arr1.length; i++){
            arr3.push(arr1[i]);
            arr3.push(arr2[i]);
            
        }
        return arr3;
    }
}

array1 = ["a" , "b" , "c"];
array2 = ["1","2","3"];

meltArr(array1,array2);
console.log(arr3);



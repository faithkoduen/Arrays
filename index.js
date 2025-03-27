let arr1 = [3,7,34,90,12];
let arr2 = [true,"green","where",12,56];
console.log("Last element of arr1:",arr1[arr1.length-1]);
console.log("Last element of arr2:",arr2[arr2.length-1]);


let myPets = ["Cow","Bird","Snake","Dog"];
let petString = myPets.join(",");
console.log("joinedString;",petString);

let arr3 = [-5,9,3,2,-3,6,8,4,1];
arr3.sort((a,b) => a-b);
console.log("sorted array:",arr3);

let arr = ["boy","man","girl","school","girl","woman"];
let differentArr = [...newSet(arr)];
let duplicateArr = arr.filter((item,index)  =>arr.indexOf(item)!== index);
console.log("Array without duplicates:",differentArr);
console.log("Array of duplicates:",duplicateArr);


let arr5 = ["the","way","x","4"];
let searchWord = "food";
if (arr5.includes(searchWord)){
    console.log(searchWord);

}  else{
    console.log("The search word was not found");

}

let word = "renniw";
let sortedword = word.split("").sort().join("");
console.log("sorted string:",sortedword);


let fruits = ["Banana","Orange","Watermelon","Pineapple","Apple","Grapes","Palm","Pawpaw","Kiwi","Blueberry"];
fruit.splice(5,0,"Tomato");
console.log("Fruita array after insertion:",fruits);
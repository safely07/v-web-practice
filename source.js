let A = [1,2,3,4,5,6]

// function sumArray(nums) {
//     let result = 0
//     nums.forEach(element => {
//        result += element
//     });
//     return result
// }

function sumArray(nums) {
    return nums.reduce((sum,nowNum) => sum + nowNum, 0)
}

// function findMax(nums) {
//     let result = nums[0]
//     nums.forEach(element => {
//         if (result < element) result = element
//     });
//     return result
// }

function findMax(nums) {
    return nums.reduce((max,nowNum) => {
        if (max < nowNum) max = nowNum;
        return max
    },nums[0])
}

let data = {
  "products": [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
    { "id": 2, "name": "Book", "category": "Education", "price": 20 },
    { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
    { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
  ]
}

// Нужно преобразовать в:
/**
* {
* "Electronics": [
*   { "productName": "Laptop", "price": 1000 },
*    { "productName": "Phone", "price": 500 }
*  ],
*  "Education": [
*    { "productName": "Book", "price": 20 }
*  ],
*  "Office": [
*    { "productName": "Pen", "price": 2 }
*  ]
* }
**/

function groupByCategory(data) {
    return data.products.reduce((accum, nowData) => {
        const categoryName = nowData.category
        accum[categoryName] = accum[categoryName] || [];
        accum[categoryName].push({"productName": nowData.name, "price": nowData.price});
        return accum;
    }, {});
}

console.log(sumArray(A))
console.log(findMax(A))
console.log(groupByCategory(data))
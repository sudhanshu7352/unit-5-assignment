//arrow functions
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    
    
    let newArray =nums.map((e)=>e%2==0?e*2:e*3)
    return newArray
}

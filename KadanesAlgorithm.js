/** Max of Sub array Sum
 * Time Complexity/Space Complexity:
 * O(n)/O(n)
 */

function maxSumInSubArray(){
    let array = [1,-2,1,-3,4,2,1,3,2,-5,1,1];
    let sum = 0, max_so_far = array[0];
    let start = 0,end = 0, nextStart = 0;
    let ele = [];//for storing sum elements => O(n)
    array.forEach((element,index) => {
        sum += element;
        if(max_so_far < sum){
            max_so_far = sum;
            start = nextStart;
            end = index;
        }
        if(sum<0){
            sum = 0;
            nextStart = index + 1;
        }
    });
    console.log(`Start of sub-array is at ${start} index and end is at ${end}`);
    for (let index = start; index < end; index++) {
        ele.push(array[index]); 
    }
    console.log("The elements are :",...ele);//spread operator
};
maxSumInSubArray();
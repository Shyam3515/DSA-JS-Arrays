//Hard coded matrix
console.log('*****Hard coded matrix*****');
let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,0,1,2]
];

let output = [];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
        output.push(matrix[i][j])
    } 
    console.log(...output);
    output = [];
};

//User Input matrix
console.log('*****User Input matrix*****');
let user = [];
let rows = 3, columns = 3;
for (let i = 0; i < rows; i++) {
    user[i] = [];
    for (let j = 0; j < columns; j++){
        user[i][j] = Math.floor(Math.random() * 10) + 1;
        //console.log(i,j,user[i][j]);
    } 
};

//printing the result;
for (let i = 0; i < user.length; i++) {
    for (let j = 0; j < user[i].length; j++){
        output.push(user[i][j])
    } 
    console.log(...output);
    output = [];
};
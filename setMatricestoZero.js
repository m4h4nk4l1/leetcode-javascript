var setZeroes = function(matrix) {
    let indexes = []
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length;j++) {
            if(matrix[i][j]==0) {
                indexes.push([i,j])
            }
        }
    }
    
    for(let [r,c] of indexes) {
        dfs(matrix,r,c)
    }
    return matrix
};

const dfs = (mat,r,c) => {
    mat[r].fill(0);
    
    for(let i=0;i<mat.length;i++) {
        mat[i][c] = 0
    }
}
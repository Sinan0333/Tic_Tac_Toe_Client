export const checkWin = (blocks) => {

    for(let i=0;i<3;i++){
        if(blocks[i][0]===blocks[i][1] && blocks[i][1]===blocks[i][2] && blocks[i][0]!==""){
            return blocks[i][0]
        }
    }
    for(let i=0;i<3;i++){
        if(blocks[0][i]===blocks[1][i] && blocks[1][i]===blocks[2][i] && blocks[0][i]!==""){
            return blocks[0][i]
        }
    }
    if(blocks[0][0]===blocks[1][1] && blocks[1][1]===blocks[2][2] && blocks[0][0]!==""){
        return blocks[0][0]
    }
    if(blocks[0][2]===blocks[1][1] && blocks[1][1]===blocks[2][0] && blocks[0][2]!==""){
        return blocks[0][2]
    }

    return blocks.every((row)=>row.every((cell)=>cell!=="")) ? "draw" : false
}
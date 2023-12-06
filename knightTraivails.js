const knight=(start,end)=>{
    start=convertPoint(start);
    end=convertPoint(end);
    const board={};
    board[json.stringify(start)]=0;
    const q=[start];
    while(!(q[0][0]===end[0] && q[0][1]===end[1])){
        const loc=q.shift();
        const moves=checkMoves(getMoves(loc));
        moves.forEach(move => {
            //ADD THE NEXT MOVE INTO THE END OF THE QUEUE
            q.push(move);
            //ADD ONE SQUARE TO ITS BOARD POSITION AND 1 TO ITS MOVE COUNT
            board[json.stringify(move)]=board[json.stringify(loc)]+1;
        });
    }
    return board[json.stringify(end)];
}

//convert square form chess notaion to an array
const convertPoint=loc=>{
    const col={
        a:1,
        b:2,
        c:3,
        d:4,
        e:5,
        f:6,
        g:7,
        h:8,
    }
    //d3--->[3,4]
    const letter=loc.charAt(0);
    const num=loc.charAt(1);
    return [Number(num),col[letter]];
}

//Get all the night moves

const getMoves=loc=>{
    const moves=[];
    moves.push([loc[0]+1,loc[1]-2]);
    moves.push([loc[0]+1,loc[1]+2]);
    moves.push([loc[0]-1,loc[1]-2]);
    moves.push([loc[0]-1,loc[1]+2]);
    moves.push([loc[0]+2,loc[1]-1]);
    moves.push([loc[0]+2,loc[1]+1]);
    moves.push([loc[0]-2,loc[1]-1]);
    moves.push([loc[0]-2,loc[1]+1]);
    return moves;
    
}

//filter the next moves to only be valid on the board 
const checkMoves=moves=>{
    return moves.filter(move=>{
        return move[0]>=1 && move[0]<=8 && move[1]>=1 && move[1]<=8
    })
}
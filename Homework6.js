
//problem 1 + 

/*
const triangleStars=function(n, char)
{
	let a = Math.floor(n/2) * 2 + 1;
	let kes = (a - 1)/2 +1;
	let kes3 = (a - 1)/2;
	const kes1=function(p)
	{
		if(p===0)
			return;
		const stars=function(st)
		{
			if(st===0)
			{
				return "";
			}
			return char + stars(st-1);
		}
		const spaces=function(st)
		{
			if(st===0)
			{
				return "";
			}
			return " " + spaces(st-1);
		}
		console.log(spaces(p-1) + stars(2*(kes-p)+1));
		kes1(p-1);
	}
	const kes2=function(p)
	{
		if(p===0)
			return;
		const stars=function(st)
		{
			if(st===0)
			{
				return "";
			}
			return char + stars(st-1);
		}
		const spaces=function(st)
		{
			if(st===0)
			{
				return "";
			}
			return " " + spaces(st-1);
		}
		console.log(spaces(kes3 - p + 1) + stars(2*p - 1));
		kes2(p-1);
	}
	kes1(kes);
	kes2(kes3);
}
triangleStars(6,"@");*/

//problem 2+

/*

const triangleStars = function(n,char)
{
	let a = Math.floor(n/2) * 2 + 1;
	let kes1 = (a-1)/2+1;
	let kes2 = (a-1)/2;
	let kes1star = "";
	let kes2star = "";
	for(let i=1;i<=kes1;i++)
	{
		for(let j=kes1-i;j>=1;j--)
		{
			kes1star = kes1star + " ";
		}
		for(let j=1;j<=i*2-1;j++)
		{
			kes1star = kes1star + char;
		}
		console.log(kes1star);
		kes1star = "";
	}
	for(let i=1;i<=kes2;i++)
	{
		for(let j=kes2-i+1;j<=kes2;j++)
		{
			kes2star = kes2star + " ";
		}
		for(let j=2*(kes2-i)+1;j>=1;j--)
		{
			kes2star = kes2star + char;
		}
		console.log(kes2star);
		kes2star = "";
	}
}
triangleStars(20,"@"); */



const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// problem 3 + 

const nextMove = function(board,isX)
{
	const rand = function(num) {
	return Math.round(Math.random() * num);
};
	let x=-1;
	let y=-1;
	x = rand(2);
	y = rand(2);
	while(board[x][y] !== " ")
	{
		x = rand(2);
		y = rand(2);
	}
	return [x,y];
}


// problem 4 +

const makeMove = function(board,loc,isX)
{
	if(isX===true)
	{
		board[loc[0]][loc[1]] = "x";
		return 0;
	}
	else if (isX===false)
	{
		board[loc[0]][loc[1]] = "o";
		return 0;
	}
	else
	{
		return -1;
	}
}


// problem 5 +


const findWinner = function(board)
{
	let win={};
	let isOver=true;
	if((board[0][0] === board[0][1]) && (board[0][0] === board[0][2]) && (board[0][1] === board[0][2]))
	{
		if(board[0][0] === "x")
			win=	
			{
    			winner:"x",
    			winningLocations: [[0, 0],[0, 1],[0, 2]] 
			};
		if(board[0][0] === "o")
			win=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 0], [0, 1], [0, 2]] 
			};
	} 
	if((board[1][0] === board[1][1]) && (board[1][0] === board[1][2]) && (board[1][1] === board[1][2]))
	{
		if(board[1][0] === "x")
			win=
			{
	    		winner: 'x',
	    		winningLocations: [[1, 0], [1, 1], [1, 2]] 
			};
		if(board[1][0] === "o")
			win=
			{
	    		winner: 'o',
	    		winningLocations: [[1, 0], [1, 1], [1, 2]] 
			};
	}
	if((board[2][0] === board[2][1]) && (board[2][0] === board[2][2]) && (board[2][1] === board[2][2]))
	{

		if(board[2][0] === "x")
			win=
			{
	    		winner: 'x',
	    		winningLocations: [[2, 0], [2, 1], [2, 2]] 
			};
		if(board[2][0] === "o")
			win=
			{
	    		winner: 'o',
	    		winningLocations: [[2, 0], [2, 1], [2, 2]] 
			};
	}
	if((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[0][0] === board[2][0]))
	{
		if(board[0][0] === "x")
			win=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 0], [1, 0], [2, 0]] 
			};
		if(board[0][0] === "o")
			win=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 0], [1, 0], [2, 0]] 
			};
	}
	if((board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[0][1] === board[2][1]))
	{
		if(board[0][1] === "x")
			win=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 1], [1, 1], [2, 1]] 
			};
		if(board[0][1] === "o")
			win=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 1], [1, 1], [2, 1]] 
			};
	}
	if((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[0][2] === board[2][2]))
	{
		if(board[0][2] === "x")
			win=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 2], [1, 2], [2, 2]] 
			};
		if(board[0][2] === "o")
			win=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 2], [1, 2], [2, 2]] 
			};
	}
	if((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[0][0] === board[2][2]))
	{
		if(board[0][0] === "x")
			win=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 0],[1, 1], [2, 2]] 
			};
		if(board[0][0] === "o")
			win=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 0], [1, 1], [2, 2]] 
			};
	}
	if((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[0][2] === board[2][0]))
	{
		if(board[0][2] === "x")
			win=
			{
	    		winner: 'x',
	    		winningLocations: [[0, 2],[1, 1],[2, 0]] 
			};
		if(board[0][2] === "o")
			win=
			{
	    		winner: 'o',
	    		winningLocations: [[0, 2],[1, 1], board[2, 0]] 
			};
	}
	for(let i=0;i<3;i++)
		for(let j=0;j<3;j++)
			if(board[i][j]===" ")
				isOver=false;

	if(isOver && !win.hasOwnProperty("winner"))
	win=
	{
		winner: 'none'
	};
	if(win.hasOwnProperty("winner"))
		return win;
	else 
		return;
}

// problem 6 +

const game = function()
{
	
	makeMove(board,nextMove(board,true),true);		
	
	if(findWinner(board))
		{
			if(findWinner(board).winner==="x")
			{
				alert("X wins");
			}
			if(findWinner(board).winner==="none")
			{
				alert("tie");
			}
			return;
		}
	makeMove(board,nextMove(board,false),false);

	if(findWinner(board))
		{
			if(findWinner(board).winner==="o")
			{
				alert("O wins");
			}
			if(findWinner(board).winner==="none")
			{
				alert("tie");
			}
			return;
		}

	game();
}

// problem 7 -

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 610;
canvas.height = 610;

const gameBoard = function()
{
	const x1 = function()
	{
		ctx.beginPath();
		ctx.moveTo(0,canvas.height/3 + 5/2);
		ctx.lineTo(canvas.width,canvas.height/3 + 5/2);
		ctx.lineWidth = 5;
		ctx.stroke();
	}
	const x2 = function()
	{
		ctx.beginPath();
		ctx.moveTo(0,(canvas.height/3)*2 + 5/2);
		ctx.lineTo(canvas.width,(canvas.height/3)*2 + 5/2);
		ctx.lineWidth = 5;
		ctx.stroke();
	}
	const y1 = function()
	{
		ctx.beginPath();
		ctx.moveTo(canvas.width/3 + 5/2,0);
		ctx.lineTo(canvas.width/3 + 5/2,canvas.height);
		ctx.lineWidth = 5;
		ctx.stroke();
	}
	const y2 = function()
	{
		ctx.beginPath();
		ctx.moveTo((canvas.width/3)*2 + 5/2,0);
		ctx.lineTo((canvas.width/3)*2 + 5/2,canvas.height);
		ctx.lineWidth = 5;
		ctx.stroke();
	}
	x1();
	x2();
	y1();
	y2();
}

gameBoard();

const drawX = function(locations)
{
	const line1 = function()
	{
		ctx.beginPath();
		ctx.moveTo(locations[1]*(canvas.width/3+5) + 25,locations[0]*(canvas.height/3+5) + 25);
		ctx.lineTo(locations[1]*(canvas.width/3+5) + 175,locations[0]*(canvas.height/3+5) + 175);
		ctx.lineWidth = 5;
		ctx.stroke();
	}
	const line2 = function()
	{
		ctx.beginPath();
		ctx.moveTo(locations[1]*(canvas.width/3+5) + 25,locations[0]*(canvas.height/3+5) + 175);
		ctx.lineTo(locations[1]*(canvas.width/3+5) + 175,locations[0]*(canvas.height/3+5) + 25);
		ctx.lineWidth = 5;
		ctx.stroke();
	}
	line1();
	line2();
}

const drawO = function(locations)
{
	let x = (locations[1]*(canvas.width/3+5))+canvas.width/6;
 	let y = (locations[0]*(canvas.width/3+5))+canvas.width/6;
 	ctx.strokeStyle = "black";
 	ctx.beginPath();
	ctx.arc(x, y, 60,0,2*Math.PI);
	ctx.stroke();
}

const whostarts = Math.round(Math.random());
let Xmove;
if(whostarts)
	Xmove=true;
else
	Xmove=false;

canvas.addEventListener("click",function(evt)
{
	if((Xmove === true) && (findWinner(board)===undefined))
	{
		if(board[Math.floor(evt.offsetY/(canvas.height/3+5))][Math.floor(evt.offsetX/(canvas.width/3+5))]===" ")
		{
			drawX([Math.floor(evt.offsetY/(canvas.height/3+5)),Math.floor(evt.offsetX/(canvas.width/3+5))]);
			makeMove(board,[Math.floor(evt.offsetY/(canvas.height/3+5)),Math.floor(evt.offsetX/(canvas.width/3+5))],true);
			Xmove=false;
		}
	}	
});

const loop = function()
{
	if(Xmove===false)
	{
		if(findWinner(board)!=undefined)
		{	
			if(findWinner(board).winner==="none")
				alert("Tie");
			else
				alert("X wins");
			return;
		}
		let nextO=nextMove(board,false);
		makeMove(board,nextO,false);
		drawO(nextO);
		Xmove = true;
	}
	if(findWinner(board)!=undefined)		
	{
		if(findWinner(board).winner==="none")
				alert("Tie");
			else
				alert("O wins");
			return;
	}
	requestAnimationFrame(loop);
}
loop();
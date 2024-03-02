//your JS code here. If required.
const game=document.getElementById("tictactoe");

const text=["X","O"];
const win=["012","345","678","036","147","258","048","246"];

for (let i = 0; i < 9; i++) {
	const cell=document.createElement("button");
	cell.id=i;  
	cell.setAttribute("class","cell");
	cell.onclick=handleXO; 
	game.append(cell);
}
let player=[
	{
		name:"boby",
		sign:"X",
		pattern:[]
	},
	{
		name:"sony",
		sign:"O",
		pattern:[]
	}
]
let start=0;
function handleXO(e) {
	if (start==2) {
		start=0
	};
	player[start].pattern.push(e.target.id);
	e.target.textContent=player[start++].sign;	
	e.target.disabled=true;
	
}
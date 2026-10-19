function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalCost = 0;
	//sort the array 
	arr.sort((a,b) => a-b);
	while(arr.length > 1){
		let first = arr.shift();
		let second = arr.shift();

		let currentCost = first + second;
		totalCost += currentCost;
		arr.push(currentCost);
		arr.sort((a,b) => a-b);
	}
  return totalCost;
}

module.exports=mincost;

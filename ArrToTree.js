/*
	关系型数组转换成树形结构对象

	关系型数组
	var obj = [
    	{ id:3, parent:2 },
    	{ id:1, parent:null },
    	{ id:2, parent:1 },
	]
	期望结果：
	o = {
	  obj: {
	    id: 1,
    	parent: null,
    	child: {
    	  	id: 2,
    	 	parent: 1,
    	  	child: {
   		       id: ,3,
    	       parent: 2
      		}
    	}
  	  }
	}

*/

function arr2Tree(arr) {
	var map = {};
	arr.forEach(item => {
		item.children = [];
		map[item.id] = item;
	});

	var res = [];
	arr.forEach(item => {
		if (item.parent) {
			map[item.parent].children.push(item);
		} else {
			res.push(item);
		}
	});
	return res;
}

var obj = [
    { id:3, parent:2 },
    { id:4, parent:1 },
    { id:1, parent:null },
    { id:2, parent:1 },
    { id:6, parent:5 },
    { id:5, parent:null },
]

console.log(arr2Tree(obj));


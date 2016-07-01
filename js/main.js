function clickCount(){
	var elem = document.getElementById('kitten');
	var elem2 = document.getElementById('cat');
	var num = document.getElementById('iterator');
	var num2 = document.getElementById('iterator2');
	var i = 0;
	var j = 0;
	var numStr = "";
	var numStr2 = "";
	elem.addEventListener('click',function(){
		i++;
		numStr = i.toString();
		num.innerHTML = numStr;
	}, false);
	elem2.addEventListener('click',function(){
		j++;
		numStr2 = j.toString();
		num2.innerHTML = numStr2;
	}, false);
};

clickCount();

function catGen(){
	var cTitle = document.getElementsByClassName('catTitle');
	for(var i=0; i<cTitle.length; i++){
		cTitle[i].innerHTML = 'Cat' + i.toString();
	};
};

catGen();

/*function catClicker(){
	var catImg = document.getElementsByClassName('cat');
	//var num = document.getElementsByClassName('iterator');
	var j = 0;
/*	for(var i=0; i<catImg.length;i++){
		catImg[i].addEventListener('click',function(){
			j++;
			var num = j.toString();
			document.getElementsByClassName('iterator')[1].innerHTML = num;
			console.log(document.getElementsByClassName('iterator')[0].innerHTML);
		}, false);
	};*/
	/*document.getElementById('catContainer').addEventListener("click",function(e){
		if(e.target && e.target.matches('img.cat')){
			console.log("clicked!");
			j++;
			('iterator').innerHTML = j;
		};
	}, false);
};

catClicker();*/

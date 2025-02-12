let img = document.querySelectorAll('.img')

img.forEach(function(event) {event.addEventListener('mousemove', function(e){
	var x = e.offsetX
	var y = e.offsetY
	
	console.log(x, y);
	
	var rotateX = -1/7.5 * x + 20
	var rotateY = 1/7.5 * y - 20
	
	event.style = `transform : rotateX({$rotateX}deg) rotateY({$rotateY}deg)`
	})
})

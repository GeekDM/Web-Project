let container = document.querySelectorAll('.stack_container')
let overlay = document.querySelectorAll('.overlay')

container.forEach(function(event) {event.addEventListener('mousemove', function(e){
	var x = e.offsetX
	var y = e.offsetY
	
	console.log(x, y)
		
	var rotateX = 1/7.5 * y - 20
	var rotateY = -1/7.5 * x + 20

	event.style = `transform : perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
	})
})

overlay.forEach(function(event2) {event2.addEventListener('mousemove', function(e2){
	var x = e2.offsetX
	var y = e2.offsetY
	
	event2.style = `background-position : ${x/5 + y/5}%`
	
	})
})

container.forEach(function(event3) {event3.addEventListener('mouseout', function(){
	overlay.style = 'filter : opacity(0)'
	event3.style = 'transform : perspective(300px) rotateX(0deg) rotateY(0deg)'
		}
	)}
)
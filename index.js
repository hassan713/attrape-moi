
	let box = document.getElementById("box");
	let non = document.getElementById("non");
	let oui = document.getElementById("oui");
	let h2 = document.getElementById("h2");
	let h3 = document.getElementById("h3");

	non.onmousemove = function(){
		// box.style.backgroundColor="red";

		let ll = Math.random()*400 ;
		let kk = Math.random()*400 ;
		box.style.left = ll + "px";
		box.style.top = kk + "px";
	}

	oui.onclick = function(){
		// h2.removeAttribute("id");
		h3.innerHTML = " moi aussi ";
		h3.style.fontSize = "40px";
		oui.setAttribute("id", "ok");
		non.setAttribute("id", "ok");

	}
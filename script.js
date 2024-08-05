function highlight(e) {
    //Write your code here	

	let bold = document.querySelectorAll("strong");

	for(let t of bold){
		t.style.color = "green";
	}


}


function return_normal() {
    //Write your code here
  let bold = document.querySelectorAll("strong");

	for(let t of bold){
		t.style.color = "black";
	}

    
}

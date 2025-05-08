function displayProductCategory() {
	var prodCategory = document.getElementById('categoryEntry').value;

		switch (prodCategory) {
			case "C":
				document.getElementById("displayCategory").innerHTML="Clothing";
				break;
			case "E":
				document.getElementById("displayCategory").innerHTML="Electronics";
				break;
			case "L":
				document.getElementById("displayCategory").innerHTML="Literature";
				break;
			default:
				window.alert("Invalid Input");
		}
}
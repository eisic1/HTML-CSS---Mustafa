//function postaviElemente(){	
	function pretragaPredmet() {
	  var input, filter, table, tr, td, i, txtValue;
	  input = document.getElementById("predmet");
	  filter = input.value.toUpperCase();
	  tr = document.getElementsByTagName("tr");
	  for (i = 0; i < tr.length; i++) {
	    td = tr[i].getElementsByClassName("da")[0];
	    if (td) {
	      txtValue = td.textContent || td.innerText;
	      if (txtValue.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
	}
	//pretragaPredmet();

	function pretragaNastavnik() {
	  var input, filter, table, tr, td, i, txtValue;
	  input = document.getElementById("nastavnik");
	  filter = input.value.toUpperCase();
	  tr = document.getElementsByTagName("tr");
	  for (i = 0; i < tr.length; i++) {
	    td = tr[i].getElementsByClassName("ne")[0];
	    if (td) {
	      txtValue = td.textContent || td.innerText;
	      if (txtValue.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
	}
	//pretragaNastavnik();

	function pretragaGodina(){
		var input, table, i, filter, tr, x, y;
		input = document.getElementById("godina");
		filter = input.value;
		console.log(filter);
		x = document.getElementsByClassName("prva");
		y = document.getElementsByClassName("druga");

		if (filter == "2") {
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}
		}
		else if(filter == "1"){
			for (i = 0; i < y.length; i++) {
				y[i].style.display = "none";
			}
		}
		else{
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "";
			}
			for (i = 0; i < y.length; i++) {
				y[i].style.display = "";
			}
		}
	}
	//pretragaGodina();
//}
//postaviElemente();
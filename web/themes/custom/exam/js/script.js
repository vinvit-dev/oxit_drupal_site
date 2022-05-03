
let projects = document.querySelectorAll(".node--projects-teaser");

function Projects () {
	projects.forEach(function(project) {
		project.querySelectorAll(".node-readmore a")[0].innerHTML = "Details";
		type = project.querySelectorAll(".field--name-field-service-type a")[0];
		if(type.innerHTML == "PHP development"){
			type.style.color = "#9b58b5";
		}
		if(type.innerHTML == "Drupal project"){
			type.style.color = "#32ade1";
		}
		if(type.innerHTML == "App development"){
			type.style.color = "#e84c3d";
		}
		if(type.innerHTML == "Web development"){
			type.style.color = "#1bbc9b";
		}
	});

}

Projects();

let users_names = document.getElementsByClassName('field--name-field-full-name');
let users_positions = document.getElementsByClassName('block-field-blockuseruserfield-position');
console.log(users_names);
for(i = 0; i < users_names.length; i++){

  link = users_names[i].getElementsByTagName('a');
  position = users_positions[i].getElementsByTagName('div');
  a = document.createElement("a");
  a.href = link[0].href;
  a.innerHTML = "Look at me";
  a.classList.add("link-on-user");
  position[0].after(a);
}

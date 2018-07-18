var jobs = []
var posts = 0;

function rowBuilder(){
  if(posts == 0){
    return {
      begin: '<div class="row">',
      end: ''
    }
  } else if(posts < 2) {
    return {
      begin: '',
      end: ''
    }
  } else{
    posts = -1;
    return {
      begin: '',
      end: '</div>'
    }
  }
}

function showJob(job) {
  var container = document.getElementById("container");
  var html;

  if(job != undefined) {

    html = rowBuilder();

    console.log("Begin: " + html.begin + "\nEnd: " + html.end);

    container.innerHTML +=
      html.begin +
      '<div class="card col-sm-12 col-md-6 col-lg-4 mb-3"><img class="card-img-top" src="./venturus/developer.png" alt="Card image cap"><div class="card-body"><h5 class="card-title">' +
      job.name +'</h5><p class="card-text"><p>Descrição: '+
      job.description + '</p><p>Habilidades Necessárias: ' +
      job.habilities + '</p><p>Diferenciais: ' +
      job.diferences + '</p><p>Salário Base: ' +
      job.salary + '</p><p>Área: ' +
      job.area + '</p><p>Vaga para PCD: ' +
      job.pcd +
      '</p></p><a href="#" class="btn btn-sm btn-primary">Edit</a><a href="#" class="btn btn-sm btn-danger">Remove</a></div></div>';
  }

  posts++;
}

function getJob(){
  var form = document.forms["myForm"];

  var job = {
    name: form.name.value,
    description: form.description.value,
    habilities: form.habilities.value,
    diferences: form.diferences.value,
    salary: form.salary.value,
    area: form.area.value,
    pcd: form.pcd.value
  }

  if( form != undefined) jobs.push(job);
  showJob(job);
}

const SERVICE = new WeakMap();

export class AddProfessorController {

  constructor(ProfessorsService, $rootScope, $modalInstance, Upload, $timeout, $scope) {
    'ngInject';

    SERVICE.set(this, ProfessorsService.resource);
    this.$modalInstance = $modalInstance;
    this.$rootScope = $rootScope;
    this.Upload = Upload;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.newProfessor = {};


    //this.EL("inp").addEventListener("change", this.readFile, false);



  }

//   EL(id) { return document.getElementById(id); } // Get el by ID helper function
//
//  readFile() {
//  if (this.files && this.files[0]) {
//    var FR= new FileReader();
//    FR.onload = function(e) {
//      //this.EL("img").src       = e.target.result;
//      this.EL("b64").innerHTML = e.target.result;
//    };
//    FR.readAsDataURL( this.files[0] );
//  }
//}




  //---------------- UPLOAD FILE ----------------
  uploadPic(file) {
    console.log(this);


    if ((file )|| true) {
      var FR= new FileReader();
      FR.onload = (e) => {
        this.newProfessor.image_json = e.target.result;
        console.log(this.newProfessor);
      };
      FR.readAsDataURL( file );
    }


  //file.upload = this.Upload.upload({
  //  url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
  //  data: {file: file}
  //});
  //
  //file.upload.then( (response) => {
  //  console.log(response);
  //  this.$timeout( () => {
  //
  //  });
  //},  (response) => {
  //  if (response.status > 0)
  //    this.$scope.errorMsg = response.status + ': ' + response.data;
  //},  (evt) => {
  //  // Math.min is to fix IE which reports 200% sometimes
  //  file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
  //});


}






  addNewProfessor(newProfessor) {
    console.log(JSON.stringify(newProfessor));

    SERVICE.get(this).add({}, JSON.parse('{"professor":'+JSON.stringify(newProfessor)+'}'));


    console.log('new professor posted to api');
    //this.$rootScope.$broadcast('NewProfessorAdded', newProfessor);
    this.$modalInstance.dismiss();
  }




  closeRegistrationForm(){
    console.log("close modal vella");
    this.$modalInstance.dismiss();
  }

}



function insertFile(){
    var uploader=document.getElementById("uploader");
    var uploadbtn=document.getElementById("uploadbtn");
    uploadbtn.addEventListener('change',function(e){
        var file=e.target.files[0];
    var storageRef =firebase.storage().ref("PictureLicense/"+file.name);
    var task = storageRef.put(file);
    task.on('state_changed',function progress(snapshot){
        var percentage =(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        uploader.value=percentage;
        },function error(err){
            console.log(err.message);
        },function complate(){
            console.log("Upload Complete");
        });
    
    });
}
 
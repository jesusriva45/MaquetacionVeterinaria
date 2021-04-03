

document.getElementById('idFoto').onchange=function(e){
    let reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=function(){
        let preview=document.getElementById('imagePreview');
            image=document.createElement('img');
            image.src=reader.result;
            image.style.width="100%";
            image.style.height="400px";
            preview.append(image);
    }

    document.getElementById('foto').setAttribute("value",document.getElementById('idFoto').files[0].name);
}

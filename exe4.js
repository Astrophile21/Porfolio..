function sendMail(){
    var obj={
        name:document.getElementById("name").value,
        email:document.getElementById("mail").value,
        message:document.getElementById("message").value
    }
    emailjs.init("XLP57sReDekEl1pAQ")
    console.log(obj)
emailjs.send('service_0rlus6c','template_o45ouou',obj)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("mail").value="";
        document.getElementById("message").value="";
        alert("The message send succefully");
    }
)
.catch(err=>console.log(err)
);
}

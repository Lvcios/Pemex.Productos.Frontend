class AdminMessage{
    constructor(name, email, text){
        this.name = name;
        this.email = email;
        this.message = text;
    }
}


function saveMessageToAdmin(message){
    console.log(message)
    $.ajax({
        type: "POST",
        url:`${apiConf.host}notification/sendToAdmin`,
        data: message,
        success: (response) =>{
            console.log(response)
            if(response.id){
                $("#modal-form-send-message-admin").modal("hide")
                alert("Mensaje guardado!")
            }
            else{
                alert("Ocurrio un error!")
            }
        }
      });
}
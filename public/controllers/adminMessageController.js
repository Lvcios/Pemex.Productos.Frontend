let formSendMessageAdmin = $("#form-send-message-admin")

formSendMessageAdmin.submit(event =>{    
    event.preventDefault();
    let message = getAdminMessageFromForm();
    saveMessageToAdmin(message)
})

function sendFormAdmin() {
    let message = getAdminMessageFromForm();
    saveMessageToAdmin(message)
};

function getAdminMessageFromForm(){
    let name = formSendMessageAdmin.find("input[name='name']").val();
    let email = formSendMessageAdmin.find("input[name='email']").val();
    let message = formSendMessageAdmin.find("textarea[name='message']").val();
    let adminMessage = new AdminMessage(name, email, message);
    return adminMessage;
}
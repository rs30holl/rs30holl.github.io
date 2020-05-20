function sendEmail(){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "rsh930@gmail.com",
        Password: "Avengers930",
        To: 'rsh930@gmail.com',
        From: "rsh930@gmail.com",
        Subject: "New visit",
        Body: "Someone clicked on your link.",
    });
}
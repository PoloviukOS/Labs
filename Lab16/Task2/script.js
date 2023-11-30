const mails = [];

function handleEmailToggle(event) {
    if (event.target.type === 'checkbox') {
        let emailsString = document.querySelector("#emailsString");
        let item = event.target.value;
        
        if (mails.includes(item)) {
            mails.splice(mails.indexOf(item), 1);
        } else {
            mails.push(item);
        }

        emailsString.value = mails.join("; ");
    }
}

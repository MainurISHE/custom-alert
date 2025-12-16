const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const customAlert = (message) => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.append(overlay);
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content'
    overlay.append(contentDiv)

    const messageH1 = document.createElement('h1');
    messageH1.textContent = message;
    contentDiv.append(message);

    const closeButton = document.createElement('button');
    closeButton.className = 'closeBtn';
    closeButton.textContent = 'OK';
    contentDiv.append(closeButton);
    closeButton.addEventListener('click', () => {
        overlay.remove()
    })

    overlay.addEventListener('click', (event) => {
        if (event.target.className === 'overlay') {
            overlay.remove();
        }

    })
}


button.addEventListener('click', () => {
    customAlert('Learn frontend!');
})

button2.addEventListener('click', () => {
    customAlert('Do Homework');
})

button3.addEventListener('click', () => {
    customAlert('Learn frontend!');
})
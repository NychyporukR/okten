let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
for (const session of sessions) {
    const block = document.createElement('div');
    block.innerText = JSON.stringify(session);
    document.body.append(block);
}
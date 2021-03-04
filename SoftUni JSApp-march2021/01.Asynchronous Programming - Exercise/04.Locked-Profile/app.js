async function lockedProfile() {
    const main = document.getElementById('main')
    const profileDiv = document.querySelector('.profile');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const response = await fetch(url);
    const data = await response.json();
    console.log(Object.values(data));
    Object.values(data).map(createCard).forEach(p => main.appendChild(p));
}

function createCard(p) {
    const profileDiv = document.querySelector('.profile');
    const hr = createElements('hr');
    const emailLabel = createElements('label', 'Email:')
    const inputEmail = createElements('input');
    inputEmail.value = p.email;
    inputEmail.type = 'email';
    inputEmail.disabled = true;
    inputEmail.readonly = true;
    const ageLabel = createElements('label', 'Age:');
    const inputAge = createElements('input');
    inputAge.value = p.age;
    inputAge.type = 'email';
    inputAge.disabled = true;
    inputAge.readonly = true;
    const hiddenDiv = createElements('div');
    hiddenDiv.style.display = 'none'
    hiddenDiv.appendChild(hr);
    hiddenDiv.appendChild(emailLabel);
    hiddenDiv.appendChild(inputEmail);
    hiddenDiv.appendChild(ageLabel);
    hiddenDiv.appendChild(inputAge);
    const userProfile = createElements('div', undefined, 'profile');
    const img = createElements('img', undefined, 'userIcon');
    img.src = "./iconProfile2.png"
    const lockLabel = createElements('label', 'Lock');
    let radioLock = createElements('input');
    radioLock.type = 'radio';
    radioLock.value = 'lock';
    radioLock.name = p.username;
    radioLock.checked = true;
    const unlockLabel = createElements('label', 'Unlock');
    let radioUnlock = createElements('input');
    radioUnlock.type = 'radio';
    radioUnlock.value = 'unlock';
    radioUnlock.name = p.username;
    radioUnlock.checked = false;
    const br = createElements('br');
    const usernameLabel = createElements('label', 'Username');
    const usernameInput = createElements('input');
    usernameInput.value = p.username
    usernameInput.type = 'text';
    usernameInput.disabled = true;
    usernameInput.readonly = true;
    usernameInput.name = p.username;
    const showBtn = createElements('button', 'Show more');
    console.log(radioUnlock);
    userProfile.appendChild(img);
    userProfile.appendChild(lockLabel);
    userProfile.appendChild(radioLock);
    userProfile.appendChild(unlockLabel);
    userProfile.appendChild(radioUnlock);
    userProfile.appendChild(br);
    userProfile.appendChild(hr);
    userProfile.appendChild(usernameLabel);
    userProfile.appendChild(usernameInput);
    userProfile.appendChild(hiddenDiv);
    userProfile.appendChild(showBtn);
    radioLock == true ? radioUnlock = false : radioUnlock = true;

    showBtn.addEventListener('click', () => {
        let isLocked = userProfile
            .querySelector('input[type=radio]:checked').value === 'lock';
        if (isLocked) {
            return;
        }
        let isVisible = hiddenDiv.style.display === 'block';
        hiddenDiv.style.display = isVisible ? 'none' : 'block';
        showBtn.textContent = !isVisible ? 'Hide it' : 'Show more';
    })
    return userProfile;
}

function createElements(type, content, className) {
    const result = document.createElement(type);
    result.textContent = content;
    if (className) {
        result.className = className;
    }
    return result;
}
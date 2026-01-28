const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionSection = document.getElementById('questionSection');
const successSection = document.getElementById('successSection');
const reactionImage = document.getElementById('reactionImage'); 
const happyImage1 = document.getElementById('happyImage1'); 
const happyImage2 = document.getElementById('happyImage2'); 
const happyImage3 = document.getElementById('happyImage3');

let noBtnSize = 100;
const shrinkAmount = 10;
const minSize = 20;
const maxYesBtnSize = 300;
const noOptions = ["RIA PLEASE I LOVE YOU", "RIA MY LOVE", 'Please??', 'PLEASE I BEG', 'RIA PLEASEEE!', 'RIA I NEED THIS']

const sadImages = [
    'images/pikachu-sad.gif',
    'images/pikachu-sad2.gif',
    'images/pikachu-sad3.gif',
    'images/togepi-sad.gif',
]


let currentImageIndex = 0;
reactionImage.src = 'images/pikachu-flower.gif'; //initial image

noBtn.addEventListener('click', function() {
    noBtnSize = Math.max(noBtnSize - shrinkAmount, minSize);
    
    // Move to random position within the container
    const containerWidth = document.querySelector('.container').offsetWidth;
    const containerHeight = document.querySelector('.container').offsetHeight;
    
    const randomX = Math.random() * (containerWidth - 150);
    const randomY = Math.random() * (containerHeight - 150);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.transform = `scale(${noBtnSize / 100})`;
    
    currentImageIndex = (currentImageIndex + 1) % sadImages.length;
    reactionImage.src = sadImages[currentImageIndex];

    let randomIndex = Math.floor(Math.random() * noOptions.length);
    
    if (noBtnSize <= 60) {
        noBtn.textContent = noOptions[randomIndex];
    }
    else if (noBtnSize <= 70) {
        noBtn.textContent = 'But I loveeeeee youu';
    }
    else if (noBtnSize <= 80) {
        noBtn.textContent = 'Whyyyyy??';
    }
    else if (noBtnSize <= 90) {
        noBtn.textContent = 'Really bruh';
    }

    const currentYesSize = 1 + ((100 - noBtnSize) / 100);
    yesBtn.style.transform = `scale(${currentYesSize})`;
});

yesBtn.addEventListener('click', function() {
    questionSection.style.display = 'none';
    successSection.style.display = 'block';
    happyImage1.src = 'images/pikachu-and-togepi-happy.gif'
    happyImage2.src = 'images/dedenne-happy.gif'
    happyImage3.src = 'images/frieren-kiss.gif'

    const container = document.querySelector('.container');
    container.style.maxWidth = '700px'; // Increase from 500px
    container.style.transition = 'max-width 0.5s ease'; // Smooth animation
});
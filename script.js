// Get all elements
const nameCard = document.getElementById('nameCard');
const apologyCard = document.getElementById('apologyCard');
const birthDateInput = document.getElementById('birthDate');
const submitNameBtn = document.getElementById('submitName');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const popupMsg = document.getElementById('popupMsg');
const heartsContainer = document.getElementById('hearts');
const apologyText = document.getElementById('apologyText');

let userBirthDate = '';

// Step 1: Submit birth date
submitNameBtn.addEventListener('click', function() {
	const birthDate = birthDateInput.value;
	
	if (!birthDate) {
		alert('Masukin tanggal lahir dulu sayang! 🥰');
		return;
	}
	
	userBirthDate = birthDate;
	const dateObj = new Date(birthDate);
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDate = dateObj.toLocaleDateString('id-ID', options);
	
	// Update apology text with birth date
	apologyText.textContent = `Maaf ya sayangg, kalo dipaa sering badmood sama sayang. Sayang lahir di tanggal ${formattedDate}, dan dipaa benar-benar menyayangi sayang! 💕`;
	
	// Hide name card and show apology card
	nameCard.style.display = 'none';
	apologyCard.style.display = 'block';
});

// Step 2: Handle "Maafin" button (Yes)
yesBtn.addEventListener('click', function() {
	showPopup('Terima Kasih Sayang! 💖', 'Aku janji akan lebih baik lagi. Kamu adalah yang terbaik untuk dipaa! 💕✨', 'yes');
});

// Step 2: Handle "Enggak" button (No)
noBtn.addEventListener('click', function() {
	showPopup('Ayolah Sayang... 🥺', 'Aku beneran menyayangi sayang dengan sepenuh hati. Maafin dipaa ya 💔', 'no');
	
	// Make "No" button run away (cute effect)
	const randomX = Math.random() * 200 - 100;
	const randomY = Math.random() * 200 - 100;
	noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Function to show popup
function showPopup(title, message, type) {
	popupTitle.textContent = title;
	popupMsg.textContent = message;
	
	// Clear previous hearts
	heartsContainer.innerHTML = '';
	
	// Add floating hearts
	for (let i = 0; i < 5; i++) {
		const heart = document.createElement('span');
		heart.classList.add('heart');
		
		if (type === 'yes') {
			heart.textContent = '💖';
			heart.style.animationDelay = (i * 0.2) + 's';
		} else {
			heart.textContent = '🥺';
			heart.style.animationDelay = (i * 0.15) + 's';
		}
		
		heartsContainer.appendChild(heart);
	}
	
	// Show popup
	popup.classList.add('active');
	
	// Close popup after 4 seconds
	setTimeout(function() {
		popup.classList.remove('active');
	}, 4000);
}

// Close popup when clicking outside
popup.addEventListener('click', function(e) {
	if (e.target === popup) {
		popup.classList.remove('active');
	}
});
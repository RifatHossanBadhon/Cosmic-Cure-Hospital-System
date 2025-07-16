document.addEventListener('DOMContentLoaded', () => {
    const profileTypeSelect = document.getElementById('profileTypeSelect');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword'); 
    const loginBtn = document.getElementById('loginBtn');
    const loginError = document.getElementById('loginError');
    if (loginEmail) loginEmail.value = 'rifat';
    if (loginPassword) loginPassword.value = '100';    
    function handleLogin() {
        const email = loginEmail.value;
        const password = loginPassword.value;
        const profileType = profileTypeSelect.value;
        loginError.textContent = '';
        loginError.classList.remove('error-message'); 
        if (email === 'rifat' && password === '100') {
            switch (profileType) {
                case 'patient':
                    showPage('patient-profile');
                    break;
                case 'doctor':
                    showPage('doctor-profile');
                    break;
                case 'admin':
                    showPage('admin-profile');
                    break;
                case 'pharmacist':
                    showPage('pharmacy-profile');
                    break;
                default:
                    loginError.textContent = 'Please select a profile type.';
                    loginError.classList.add('error-message');
            }
        } else {
            loginError.textContent = 'Invalid email or password.';
            loginError.classList.add('error-message');
        }
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
    }
    if (loginPassword) {
        loginPassword.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleLogin();
            }
        });
    }
    const doctorSelect = document.getElementById('doctorSelect');
    const appointmentDate = document.getElementById('appointmentDate');
    const appointmentTime = document.getElementById('appointmentTime');
    const confirmAppointmentBtn = document.getElementById('confirmAppointmentBtn');
    const appointmentMessage = document.getElementById('appointmentMessage');

    if (confirmAppointmentBtn) {
        confirmAppointmentBtn.addEventListener('click', () => {
            const selectedDoctor = doctorSelect.value;
            const date = appointmentDate.value;
            const time = appointmentTime.value;

            appointmentMessage.textContent = ''; 
            appointmentMessage.classList.remove('error-message', 'success'); 

            if (!selectedDoctor || !date || !time) {
                appointmentMessage.textContent = 'Please fill all appointment details.';
                appointmentMessage.classList.add('error-message');
            } else {
                const doctorName = selectedDoctor.split(' - ')[0];
                const fee = selectedDoctor.split(' - ')[1];
                appointmentMessage.textContent = `Appointment with ${doctorName} on ${date} at ${time} (Fee: ${fee}) confirmed! You will receive a notification shortly.`;
                appointmentMessage.classList.add('success');
                console.log(`Appointment Booked: Doctor: ${selectedDoctor}, Date: ${date}, Time: ${time}`);
                doctorSelect.value = '';
                appointmentDate.value = '';
                appointmentTime.value = '';
            }
        });
    }
    initializeDropdowns();
    initializeSlideshow();
    initializeThemeToggle();
    if(document.getElementById('home')) {
        showPage('home');
    } else {
        const firstSection = document.querySelector('.page-section');
        if(firstSection) {
            showPage(firstSection.id);
        }
    }
});
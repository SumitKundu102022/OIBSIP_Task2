//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar Links
            
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                })
            // active sections for animation on scroll
            sec.classList.add("show-animate");
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove("show-animate");
        }
    });

    // sticky head
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


//email message
const form = document.querySelector('form');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const mobileNumber = document.querySelector("#Mobile number");
const subject = document.querySelector("#Subject");
const message = document.querySelector("#Message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${mobileNumber.value}<br> Message: ${message.value}`;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "sonukumar123098567@gmail.com",
      Password: "680EDCF6C090EF4E7EF956617D1BF1E5FD92",
      To: "sonukumar123098567@gmail.com",
      From: "sonukumar123098567@gmail.com",
      Subject: subject.value,
      Body: bodyMessage
    }).then((message) => alert(message));

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
});
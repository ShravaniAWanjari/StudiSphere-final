document.addEventListener('DOMContentLoaded', function () {
  const typingLine1 = document.getElementById('typing-line');
  const textToType1 = "Welcome to StudiSphere – Your Virtual Study Haven!";
  const typingLine2 = document.getElementById('LPh2');
  const textToType2 = "Your Virtual Study Haven, Sign up Now! Study alone or with your mates, and tailor your space for peak productivity.";
  const signupButton = document.getElementById('signupButton');
  let index1 = 0;

  signupButton.style.opacity = '0'; // Initially hide the button
  signupButton.style.visibility = 'hidden';

  function typeText1() {
    typingLine1.textContent = textToType1.slice(0, index1);
    index1++;
    if (index1 <= textToType1.length) {
      setTimeout(typeText1, 50);
    } else {
      // Animation 1 complete, start Animation 2 after a short delay
      setTimeout(startAnimation2, 500); // Wait for 1 second before Animation 2
    }
  }

  function startAnimation2() {
    let index2 = 0;

    function typeText2() {
      typingLine2.textContent = textToType2.slice(0, index2);
      index2++;
      if (index2 <= textToType2.length) {
        setTimeout(typeText2, 20);
      } else {
        // Animation 2 complete, show the button with fade-in effect
        fadeInButton();
      }
    }

    typeText2();
  }

  function fadeInButton() {
    signupButton.style.transition = 'opacity 1s';
    signupButton.style.opacity = '1';
    signupButton.style.visibility = 'visible';
  }

  typeText1();
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItem => {
  const questionButton = faqItem.querySelector('.faq-question');
  const answerElement = faqItem.querySelector('.faq-answer');

  questionButton.addEventListener('click', () => {
    // Closes previously open FAQ
    faqItems.forEach(item => item.classList.remove('active'));

    // Toggles the clicked item's active state
    faqItem.classList.toggle('active');

    answerElement.style.transition = 'max-height 0.3s ease-in-out';
  });
});
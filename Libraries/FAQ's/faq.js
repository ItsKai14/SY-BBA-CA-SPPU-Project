const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItem => {
  const questionButton = faqItem.querySelector('.faq-question');
  const answerElement = faqItem.querySelector('.faq-answer');

  questionButton.addEventListener('click', () => {
    faqItem.classList.toggle('active');
  });
});
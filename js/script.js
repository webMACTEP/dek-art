document.addEventListener('DOMContentLoaded', function () {
    // Выбираем все элементы с классом 'faq-question'
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            // Получаем родительский элемент .faq-item
            const faqItem = this.parentElement;

            // Проверяем, открыт ли уже этот FAQ
            const isActive = faqItem.classList.contains('active');

            // Закрываем все открытые FAQ
            document.querySelectorAll('.faq-item.active').forEach(function(activeItem) {
                activeItem.classList.remove('active');
            });

            // Если этот FAQ был закрыт, открываем его
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

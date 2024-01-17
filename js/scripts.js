window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.item__tabs-our__project'),
          tabsContent = document.querySelectorAll('.img-items-our__project'),
          tabsParent = document.querySelector('.tabs-our__project');

    function hideTabContent() {
        tabsContent.forEach(content => {
            content.classList.add('hide');
            content.classList.remove('show');
        });
        tabs.forEach(tab => {
            tab.classList.remove('item__tabs-our__project_active');
        });
    };

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('item__tabs-our__project_active');
    };
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('item__tabs-our__project')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
            
    });
    hideTabContent();
    showTabContent();
});
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Strip the active states from all existing tab buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });

            // Clear out active utility classes from all text body panels
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Assign active focus classes back to the clicked menu button target
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            // Extract target attribute index value and surface the matching container panel
            const tabTargetId = button.getAttribute('data-tab');
            const targetPanel = document.getElementById(`panel-${tabTargetId}`);
            
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});
// your_custom_app/public/js/pos_custom.js

$(document).on('app_ready', function() {
    const observer = new MutationObserver((mutations) => {
        // 1. Check if the "Past Order List" screen is currently active/visible
        const isPastOrderScreenActive = $('.point-of-sale-app .past-order-list').is(':visible');
        
        if (isPastOrderScreenActive) {
            // 2. Only find and hide the button within the summary panel if we are on that screen
            const printBtn = $('.past-order-summary .print-btn');
            
            if (printBtn.length && printBtn.is(':visible')) {
                // printBtn.hide();
                
                // For role restriction later:
                if (frappe.user_roles.includes('receptionist')) {
                    printBtn.hide();
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

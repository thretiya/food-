const statusElement = document.getElementById('status');
const updateButton = document.getElementById('update-status');

// Simulated order statuses
const statuses = ["Pending", "Processing", "Shipped", "Out for Delivery", "Delivered"];
let currentStatusIndex = 0;

updateButton.addEventListener('click', () => {
    // Update the status if there are more statuses
    if (currentStatusIndex < statuses.length - 1) {
        currentStatusIndex++;
        statusElement.textContent = statuses[currentStatusIndex];

        // Change the status color based on the current status
        switch (statuses[currentStatusIndex]) {
            case "Pending":
                statusElement.style.color = "#e74c3c"; // Red
                break;
            case "Processing":
                statusElement.style.color = "#f39c12"; // Orange
                break;
            case "Shipped":
                statusElement.style.color = "#3498db"; // Blue
                break;
            case "Out for Delivery":
                statusElement.style.color = "#2ecc71"; // Green
                break;
            case "Delivered":
                statusElement.style.color = "#8e44ad"; // Purple
                break;
        }
    } else {
        alert("Order is already delivered!");
    }
});

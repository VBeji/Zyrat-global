
document.getElementById('tracking-form').addEventListener('submit', function(event) {
    // event.preventDefault();
    // Get the entered tracking number
var trackingNumber = document.getElementById('tracking-number').value;

// Redirect to the details page with the tracking number as a query parameter
window.location.href = 'details.html?tracking=' + trackingNumber;

  
    // Get the entered tracking number
    var trackingNumber = document.getElementById('tracking-number').value;
    alert('Entering tracking number: ' + trackingNumber)
  
    // You can perform an API call or fetch data using the tracking number
    // Replace this line with your actual API call or code to fetch shipment details
  
    // For demonstration purposes, I'll show a sample shipment details
    var shipmentDetails = {
      trackingNumber: trackingNumber,
      status: 'In Transit',
      location: 'New York',
      estimatedDeliveryDate: '2022-05-15'
    };
  
    // Display the shipment details on the page
    var shipmentDetailsElement = document.getElementById('shipment-details');
    shipmentDetailsElement.innerHTML = `
      <h2>Shipment Details</h2>
      <p><strong>Tracking Number:</strong> ${shipmentDetails.trackingNumber}</p>
      <p><strong>Status:</strong> ${shipmentDetails.status}</p>
      <p><strong>Location:</strong> ${shipmentDetails.location}</p>
      <p><strong>Estimated Delivery Date:</strong> ${shipmentDetails.estimatedDeliveryDate}</p>
    `;
  });
  
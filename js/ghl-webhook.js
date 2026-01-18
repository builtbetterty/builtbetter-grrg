/**
 * GoHighLevel Webhook Integration
 * Shared function to send contact data (name, email, phone) to GoHighLevel webhook
 * Use this function anywhere on the website where forms collect name, email, and phone
 */

function sendToGoHighLevel(formData) {
    // GoHighLevel webhook URL
    const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/qnvZEbXVFq6KUFRXaMdQ/webhook-trigger/82fd8cd9-3ac8-4881-a23c-447c5aae3df1';
    
    // Ensure we have required fields
    if (!formData.name || !formData.email || !formData.phone) {
        console.warn('GoHighLevel webhook: Missing required fields (name, email, phone)');
        return;
    }
    
    // Prepare contact data for GoHighLevel webhook
    // Split name into first and last name
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || formData.name;
    const lastName = nameParts.slice(1).join(' ') || '';
    
    const webhookData = {
        firstName: firstName,
        lastName: lastName,
        email: formData.email,
        phone: formData.phone
    };
    
    // Add optional fields if present
    if (formData.dob) webhookData.dateOfBirth = formData.dob;
    if (formData.employment) webhookData.employmentStatus = formData.employment;
    if (formData.source) webhookData.source = formData.source;
    if (formData.formName) webhookData.formName = formData.formName;
    
    webhookData.timestamp = new Date().toISOString();
    
    // Send data to GoHighLevel webhook
    fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(webhookData)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => {
                throw new Error(`HTTP ${response.status}: ${text}`);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Form data sent to GoHighLevel webhook successfully:', data);
    })
    .catch(error => {
        console.error('Error sending to GoHighLevel webhook:', error);
        // Continue even if webhook call fails - don't block user flow
    });
}


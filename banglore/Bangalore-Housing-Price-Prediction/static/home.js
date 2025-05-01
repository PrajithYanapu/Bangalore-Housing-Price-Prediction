// Global variables
const API_BASE_URL = ''; // Leave empty if same domain, or set your API base URL

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    
    // Get form elements
    const sqft = document.getElementById("sqft");
    const bhk = document.getElementById("bhk");
    const bathrooms = document.getElementById("bath");
    const location = document.getElementById("uiLocations"); // Fixed typo from "uiLocations"
    const area = document.getElementById("uiAreas");
    const availability = document.getElementById("uiAvailability");
    const estPrice = document.getElementById("uiEstimatedPrice");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const errorMessage = document.getElementById("errorMessage");

    // Validate inputs
    if (!sqft.value || !bhk.value || !bathrooms.value || !location.value || !area.value || !availability.value) {
        errorMessage.innerHTML = "<h4>Please fill all the fields</h4>";
        errorMessage.style.display = "block";
        return;
    }

    // Show loading spinner and hide previous messages
    loadingSpinner.style.display = "block";
    errorMessage.style.display = "none";
    estPrice.style.display = "none";

    // Prepare data
    const data = {
        sqft: parseFloat(sqft.value),
        bhk: parseInt(bhk.value),
        bath: parseInt(bathrooms.value),
        loc: location.value,
        area: area.value,
        avail: availability.value
    };

    console.log("Sending data:", data);

    // Make API call
    $.ajax({
        url: `${API_BASE_URL}/predict`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            console.log("API response:", response);
            loadingSpinner.style.display = "none";
            
            if (response.error) {
                errorMessage.innerHTML = `<h4>Error: ${response.error}</h4>`;
                errorMessage.style.display = "block";
            } else if (response.prediction_text) {
                estPrice.innerHTML = `<h2>${response.prediction_text}</h2>`;
                estPrice.style.display = "block";
            } else {
                errorMessage.innerHTML = "<h4>Unexpected response from server</h4>";
                errorMessage.style.display = "block";
            }
        },
        error: function(xhr, status, error) {
            console.error("API error:", status, error);
            loadingSpinner.style.display = "none";
            
            let errorMsg = "An error occurred while processing your request";
            if (xhr.responseJSON && xhr.responseJSON.error) {
                errorMsg = xhr.responseJSON.error;
            } else if (xhr.responseText) {
                errorMsg = xhr.responseText;
            }
            
            errorMessage.innerHTML = `<h4>Error: ${errorMsg}</h4>`;
            errorMessage.style.display = "block";
        }
    });
}

async function loadDropdownData(endpoint, elementId, propertyName) {
    try {
        console.log(`Loading ${propertyName} data...`);
        const response = await $.get(`${API_BASE_URL}/${endpoint}`);
        
        if (response && response[propertyName]) {
            const selectElement = document.getElementById(elementId);
            selectElement.innerHTML = ''; // Clear existing options
            
            // Add default option
            const defaultOption = new Option(`Select ${propertyName}`, '');
            defaultOption.disabled = true;
            defaultOption.selected = true;
            selectElement.add(defaultOption);
            
            // Add options from response
            response[propertyName].forEach(item => {
                selectElement.add(new Option(item, item));
            });
            
            console.log(`Loaded ${response[propertyName].length} ${propertyName} options`);
        } else {
            console.error(`Invalid response format for ${endpoint}`);
        }
    } catch (error) {
        console.error(`Failed to load ${propertyName}:`, error);
    }
}

function onPageLoad() {
    console.log("Document loaded");
    
    // Load all dropdown data
    loadDropdownData('get_location_names', 'uiLocations', 'locations');
    loadDropdownData('get_area_names', 'uiAreas', 'area');
    loadDropdownData('get_availability_names', 'uiAvailability', 'availability');
    
    // Set up form submission
    document.getElementById('predictionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        onClickedEstimatePrice();
    });
    
    // Input validation for numeric fields
    document.getElementById('sqft').addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9.]/g, '');
    });
    
    document.getElementById('bhk').addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    
    document.getElementById('bath').addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}

window.onload = onPageLoad;
document.addEventListener("DOMContentLoaded", async function () {
    const locationSelect = document.getElementById("location");
    const form = document.getElementById("prediction-form");
    const resultDiv = document.getElementById("result");

    locationSelect.innerHTML = "<option>Loading...</option>";

    try {
        //const response = await fetch("http://127.0.0.1:5000/get_locations");
        const response = await fetch("/api/get_locations");
        const data = await response.json();

        if (data.locations && data.locations.length > 0) {
            locationSelect.innerHTML = "";
            data.locations.forEach(loc => {
                let option = new Option(loc, loc);
                locationSelect.appendChild(option);
            });
        } else {
            locationSelect.innerHTML = "<option>Error: No locations found</option>";
        }
    } catch (error) {
        console.error("Error loading locations:", error);
        locationSelect.innerHTML = "<option>Error loading locations</option>";
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const totalSqft = document.getElementById("total_sqft").value;
        const bath = document.getElementById("bath").value;
        const bhk = document.getElementById("bhk").value;
        const location = document.getElementById("location").value;

        if (!totalSqft || totalSqft < 500 || !bath || bath < 1 || !bhk || bhk < 1 || !location) {
            resultDiv.textContent = "Please fill all fields correctly.";
            resultDiv.style.color = "red";
            return;
        }

        const requestData = {
            total_sqft: parseFloat(totalSqft),
            bath: parseInt(bath),
            bhk: parseInt(bhk),
            location: location
        };

        try {
            /*const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData)
            });*/

            const response = await fetch("/api/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData)
            });

            const data = await response.json();

            if (data.predicted_price !== undefined) {
                resultDiv.textContent = `Predicted Price: ₹${data.predicted_price.toFixed(2)} lakhs`;
                resultDiv.style.color = "green";
            } else {
                resultDiv.textContent = "Error in prediction. Please try again.";
                resultDiv.style.color = "red";
            }
        } catch (error) {
            console.error("Error in prediction:", error);
            resultDiv.textContent = "Error in prediction. Please try again.";
            resultDiv.style.color = "red";
        }
    });
});

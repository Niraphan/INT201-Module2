// Define a class named CookieUtil
class CookieUtil {
    // Static method to get the value of a cookie by name
    static get(name) {
        // Construct the cookie name with proper encoding
        let cookieName = `${encodeURIComponent(name)}=`;

        // Find the start index of the cookie in the document's cookie string
        let cookieStart = document.cookie.indexOf(cookieName);

        // Initialize the cookie value to null
        let cookieValue = null;

        // If the cookie is found
        if (cookieStart > -1) {
            // Find the end index of the cookie value
            let cookieEnd = document.cookie.indexOf(';', cookieStart);

            // If the cookie is the last one in the document, set the end index to the end of the cookie string
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length;
            }

            // Decode and extract the cookie value
            cookieValue = decodeURIComponent(
                document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
            );
        }

        // Return the cookie value
        return cookieValue;
    }

    // Static method to set a cookie with a given name, value, and optional expiration date
    static set(name, value, expires) {
        // Construct the cookie text with proper encoding for name and value
        let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

        // If an expiration date is provided and it is a Date object
        if (expires instanceof Date) {
            // Append the expiration date to the cookie text
            cookieText += `;expires=${expires.toISOString()}`;
        }

        // Set the cookie in the document
        document.cookie = cookieText;
    }

    // Static method to unset (delete) a cookie by setting its value to a blank string and expiration date to the past
    static unset(name) {
        // Set the cookie to a blank string and the expiration date to January 1, 1970 (or use max-age=0)
        CookieUtil.set(name, '', new Date(0));
    }
}

// Export the CookieUtil class for use in other modules
export { CookieUtil };

// Add an event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the stored background color from the cookie
    const storedBackgroundColor = CookieUtil.get('background-color');

    // If a background color is stored, apply it to the body
    if (storedBackgroundColor) {
        document.body.style.backgroundColor = storedBackgroundColor;
    }

    // Add an event listener to the input element with the specified ID
    const inputElement = document.getElementById('your-input-id'); // Replace with your actual input ID
    inputElement.addEventListener('input', function () {
        // Update the background color of the body
        const newBackgroundColor = inputElement.value;
        document.body.style.backgroundColor = newBackgroundColor;

        // Save the background color in a cookie with a 3-day expiration
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 3); // 3 days from now
        CookieUtil.set('background-color', newBackgroundColor, expirationDate);
    });
});

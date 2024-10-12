// Function to create and add floating pizza bubbles to the page
function createPizzaBubbles() {
    // Create a container to hold the bubbles
    const bubbleContainer = document.createElement('div');
    
    // Generate 5 pizza bubbles
    for (let i = 0; i < 5; i++) {
      const bubble = document.createElement('div');  // Create a new bubble
      bubble.classList.add('pizza-bubble');          // Assign bubble styling class
      bubbleContainer.appendChild(bubble);           // Add bubble to container
    }
  
    // Append the container of bubbles to the body
    document.body.appendChild(bubbleContainer);
  }
  
  // Run the function to add bubbles when the page loads
  window.onload = createPizzaBubbles;
const video = document.querySelector('video');

// Check if the video element is found
if (video) {
    // Create an audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create a source node from the video element
    const source = audioContext.createMediaElementSource(video);

    // Create a gain node
    const gainNode = audioContext.createGain();

    // Set the gain (volume) higher than 1.0 to amplify
    gainNode.gain.value = 2; // 200%

    // Connect the source to the gain node
    source.connect(gainNode);

    // Connect the gain node to the audio context's destination
    gainNode.connect(audioContext.destination);
} else {
    console.log('Video element not found');
}

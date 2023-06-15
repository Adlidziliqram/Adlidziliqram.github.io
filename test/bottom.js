playerInstance.on("ready", function() {

    // Move the timeslider in-line with other controls
    const playerContainer = playerInstance.getContainer();
    const buttonContainer = playerContainer.querySelector(".jw-button-container");
    const spacer = buttonContainer.querySelector(".jw-spacer");
    const timeSlider = playerContainer.querySelector(".jw-slider-time");
    buttonContainer.replaceChild(timeSlider, spacer);

    // Forward 10 seconds
    const rewindContainer = playerContainer.querySelector(
        ".jw-display-icon-rewind"
    );
    const forwardContainer = rewindContainer.cloneNode(true);
    const forwardDisplayButton = forwardContainer.querySelector(
        ".jw-icon-rewind"
    );
    forwardDisplayButton.style.transform = "scaleX(-1)";
    forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
    const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
    nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

    // control bar icon
    playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
    const rewindControlBarButton = buttonContainer.querySelector(
        ".jw-icon-rewind"
    );
    const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
    forwardControlBarButton.style.transform = "scaleX(-1)";
    forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
    rewindControlBarButton.parentNode.insertBefore(
        forwardControlBarButton,
        rewindControlBarButton.nextElementSibling
    );

    // add onclick handlers
    [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
        button.onclick = () => {
            playerInstance.seek(playerInstance.getPosition() + 10);
        };
    });
    });
/*
bottom
*/
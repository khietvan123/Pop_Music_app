function main() {
  function addSocialMedia() {
    //create a section for the social media
    const socialMediaContainer = document.querySelector(
      "#social-media-container",
    );
    const section = document.createElement("section");
    section.className = "social-media-class";

    //create label for the social media
    const label = document.createElement("label");
    const inputSocialMedia = document.createElement("input");

    //add label and input attributes
    label.innerText = "Add an URL of your chosen Artist's social media:";
    label.for = "social-media-url";
    inputSocialMedia.type = "url";
    inputSocialMedia.className = "input-request";
    inputSocialMedia.name = "social-media-url";

    //add label and input to section
    section.appendChild(label);
    section.appendChild(inputSocialMedia);

    //add section to the social media container in the html(the div)
    socialMediaContainer.appendChild(section);

    return socialMediaContainer;
  }

  function addSong() {
    //create a section the song
    const songContainer = document.querySelector("#input-song-container");
    const section = document.createElement("section");
    section.className = "song-class";

    //label for the song
    const label = document.createElement("label");
    label.innerText = "Add an URL of a song:";
    label.for = "song-url";

    //input the song url
    const inputSong = document.createElement("input");
    inputSong.type = "url";
    inputSong.name = "song-url";
    inputSong.className = "input-request";

    //create the explicit button
    const explicitButton = document.createElement("input");
    explicitButton.type = "checkbox";
    explicitButton.name = "song-url";
    explicitButton.value = "Explicit"; //if check, the value will be explicit

    const explicitLabel = document.createElement("label");
    explicitLabel.innerText = "Explicit lyrics";

    //add song to the section
    const container = document.createElement("div");
    container.className = "input-song-container";

    container.appendChild(inputSong);
    container.appendChild(explicitLabel);
    container.appendChild(explicitButton);

    section.appendChild(label);
    section.appendChild(container);

    //add section to the song div in the html
    songContainer.appendChild(section);

    return songContainer;
  }

  const socialMediaButton = document.querySelector("#add-social-media-button");
  const songButton = document.querySelector("#add-song-button");

  songButton.addEventListener("click", addSong);
  socialMediaButton.addEventListener("click", addSocialMedia);
}

document.addEventListener("DOMContentLoaded", main);

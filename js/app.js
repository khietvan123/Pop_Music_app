/**
 * WEB222 – Assignment 3
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Khiet Van Phan
 *      Student ID: 147072235
 *      Date:       7/15/2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.

const artists = window.artists;
const songs = window.songs;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "Song and Artist App Data");

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const artistNameElement = document.getElementById("artist-name");
  const cardHolder = document.getElementById("cardHolder");

  // Function to create artist buttons in the menu
  function createArtistButtons() {
    if (window.artists) {
      window.artists.forEach((artist) => {
        const button = document.createElement("button");
        button.textContent = artist.name;
        button.setAttribute("data-artist-id", artist.artistId);
        button.addEventListener("click", function () {
          showArtistDetails(artist);
        });
        menu.appendChild(button);
      });

      // Show details for the first artist by default
      // if (window.artists.length > 0) {
      //   showArtistDetails(window.artists[0]);
      // }
    }
  }

  // Function to calculate duration in mm:ss format
  function durationCal(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  // Function to create a song card
  function createSongCard(song) {
    // Create a <div> to hold the card
    const card = document.createElement("div");
    card.classList.add("card");

    // Create a song image
    console.log(song);
    const songImg = document.createElement("img");
    songImg.src = song.imgUrl;
    songImg.alt = "Avatar";
    songImg.crossOrigin = true;
    songImg.style.width = "100%";
    songImg.classList.add("card-image");

    // Make the image clickable and open the song's URL in a new tab
    songImg.addEventListener("click", () => {
      window.open(song.mediaUrl, "_blank");
    });

    // Create a container div
    const container = document.createElement("div");
    container.classList.add("container");

    // Create and append the song title
    const title = document.createElement("h4");
    title.innerHTML = `<b>${song.title}</b>`;
    container.appendChild(title);

    // Create and append the explicit lyrics status
    const explicitLyrics = document.createElement("p");
    explicitLyrics.textContent = song.explicitLyrics
      ? "Explicit Lyrics"
      : "Clean song";
    container.appendChild(explicitLyrics);

    // Create and append the song duration
    const duration = document.createElement("p");
    duration.textContent = `Duration: ${durationCal(song.duration)}`;
    container.appendChild(duration);

    // Append the image and container to the card
    card.appendChild(songImg);
    card.appendChild(container);

    // Return the card's <div> element to the caller
    return card;
  }

  // Function to show details for a selected artist
  function showArtistDetails(artist) {
    // Clear previous details
    artistNameElement.innerHTML = "";
    cardHolder.innerHTML = "";

    // Create and append the artist name as an H2 element
    const artistName = document.createElement("h2");
    artistName.textContent = artist.name;
    artistNameElement.appendChild(artistName);

    // Create and append a list of social media links
    const linksList = document.createElement("ul");
    artist.links.forEach((link) => {
      const linkItem = document.createElement("li");
      const linkAnchor = document.createElement("a");
      linkAnchor.href = link.url;
      linkAnchor.textContent = link.name;
      linkAnchor.target = "_blank"; // Open link in a new tab
      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    });
    artistNameElement.appendChild(linksList);

    // Filter songs for the selected artist
    const filteredSongs = window.songs.filter(
      (song) => song.artistId === artist.artistId,
    );

    // Populate card holder with filtered songs
    filteredSongs.forEach((song) => {
      const songCard = createSongCard(song);
      cardHolder.appendChild(songCard);
    });
  }

  // Initialize the app by creating artist buttons
  createArtistButtons();
});

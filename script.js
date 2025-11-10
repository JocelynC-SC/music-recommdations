const moods = {
  calm: {
    bg: "linear-gradient(135deg, #E8F7EE, #B8C4BB)",
    songs: [
      {
        title: "Reunion",
        artist: "Korea Girl",
        link: "https://open.spotify.com/track/5GqGm6w4b2F5xJvCkRMYzk",
        img: "image0.jpeg"
      }
    ]
  },
  melancholy: {
    bg: "linear-gradient(135deg, #663F46, #3C362A)",
    songs: [
      {
        title: "So Real",
        artist: "Jeff Buckley",
        link: "https://open.spotify.com/track/5kJAKnZ0WnNQYpYyFWIVXN",
        img: "image1.jpeg"
      }
    ]
  },
  nostalgic: {
    bg: "linear-gradient(135deg, #3C362A, #B8C4BB)",
    songs: [
      {
        title: "Heart of Glass",
        artist: "Blondie",
        link: "https://open.spotify.com/track/0qZTwrunzX2Vd7uY3eyOh9",
        img: "image2.jpeg"
      }
    ]
  },
  dreamy: {
    bg: "linear-gradient(135deg, #C9D6EA, #E8F7EE)",
    songs: [
      {
        title: "While You Were Sleeping",
        artist: "Laufey",
        link: "https://open.spotify.com/track/4r8R9nK0YZX4Yb3Ee3Zhi3",
        img: "image3.jpeg"
      }
    ]
  },
  hopeful: {
    bg: "linear-gradient(135deg, #B8C4BB, #E8F7EE)",
    songs: [
      {
        title: "Mass Anasthesia",
        artist: "Mediavolo",
        link: "https://open.spotify.com/track/1sdMf2t2WWhd8uYQX3GibE",
        img: "image4.jpeg"
      }
    ]
  }
};

const buttons = document.querySelectorAll("button");
const body = document.body;
const gallery = document.getElementById("gallery");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const mood = moods[btn.dataset.mood];
    body.style.background = mood.bg;
    gallery.classList.remove("show");
    gallery.innerHTML = "";

    // Populate new mood songs
    mood.songs.forEach(song => {
      const card = document.createElement("div");
      card.classList.add("song-card");
      card.innerHTML = `
        <img src="${song.img}" alt="${song.title}">
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
        <a class="song-link" href="${song.link}" target="_blank">Listen on Spotify →</a>
      `;
      gallery.appendChild(card);
    });

    setTimeout(() => {
      gallery.classList.add("show");
    }, 100);
  });
});

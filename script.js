document.addEventListener('DOMContentLoaded', () => {
    const albumsContainer = document.querySelector('.albums-container');
    const albumPanelsContainer = document.getElementById('album-panels-container');

    const albumData = {
        "New Jeans": {
            coverImage: "images/new_jeans_album.jpg",
            releaseDate: "August 8, 2022",
            songs: ["Attention", "Hype Boy", "Cookie", "Hurt"],
            spotifyLink: "https://open.spotify.com/album/1HMLpmZAnNyl9pxvOnTovV?si=aW6Eun0TT3SSWLhb94IbCg",
            youtubeLinks: {
                "NewJeans (뉴진스) 'Attention' Official MV": "https://youtu.be/js1CtxSY38I?si=8bP7DzkMS6ydfdk3",
                "NewJeans (뉴진스) 'Hype Boy' Official MV (MINJI ver.)": "https://youtu.be/Rrf8uQFvICE?si=n5BjGfDH4ko8U4nh",
                "NewJeans (뉴진스) 'Hype Boy' Official MV (DANIELLE&HAERIN ver.)": "https://youtu.be/9wUKhEgnllc?si=jJTLC_bKsPri4j07",
                "NewJeans (뉴진스) 'Hype Boy' Official MV (HYEIN ver.)": "https://youtu.be/j6r7Px6w2ik?si=1eFnsrsjzm8OLBtA",
                "NewJeans (뉴진스) 'Hype Boy' Official MV (HANNI ver.)": "https://youtu.be/jM-K-h9gUdM?si=nNmhmQ2stZj_WGsi",
                "NewJeans (뉴진스) 'Cookie' Official MV": "https://youtu.be/VOmIplFAGeg?si=0S_7vTxt2fqAnh3o",
                "NewJeans (뉴진스) 'Hurt' Official MV": "https://youtu.be/tVIXY14aJms?si=g1e0Joxuir4gs3iR"
            }
        },
        "Ditto": {
            coverImage: "images/ditto_album.png",
            releaseDate: "December 19, 2022",
            songs: ["Ditto"],
            spotifyLink: "https://open.spotify.com/album/7bnqo1fdJU9nSfXQd3bSMe?si=1iS5kYAtS06_SjZfSRQUMw",
            youtubeLinks: {
                "NewJeans (뉴진스) 'Ditto' Official MV (side A)": "https://youtu.be/pSUydWEqKwE?si=lwXbVhbyB3HvK_FP",
                "NewJeans (뉴진스) 'Ditto' Official MV (side B)": "https://youtu.be/V37TaRdVUQY?si=Ss2Bldx8STzCUwFi"
            }
        },
        "OMG": {
            coverImage: "images/omg_album.jpg",
            releaseDate: "January 2, 2023",
            songs: ["OMG", "Ditto"],
            spotifyLink: "https://open.spotify.com/album/45ozep8uHHnj5CCittuyXj?si=OKAyJkKqQkmaGxcBJo3JVQ",
            youtubeLinks: {
                "NewJeans (뉴진스) 'OMG' Official MV": "https://youtu.be/_ZAgIHmHLdc?si=MSVF2YTZW0W469_g",
                "NewJeans (뉴진스) 'Ditto' Official MV (side A)": "https://youtu.be/pSUydWEqKwE?si=lwXbVhbyB3HvK_FP",
                "NewJeans (뉴진스) 'Ditto' Official MV (side B)": "https://youtu.be/V37TaRdVUQY?si=Ss2Bldx8STzCUwFi"
            }
        },
        "Tell Me (FRNK Remix)": {
            coverImage: "images/tell_me_album.jpg",
            releaseDate: "July 7, 2023",
            songs: ["Tell me (FRNK Remix)"],
            spotifyLink: "",
            youtubeLinks: {
                "NewJeans (뉴진스) 'Tell me (FRNK Remix)'": "https://youtu.be/3AyaOSiNHRE?si=Fs_8A1DBWDBTTMGr"
            }
        },
        "Zero": {
            coverImage: "images/zero_album.png",
            releaseDate: "April 3, 2023",
            songs: ["Zero"],
            spotifyLink: "https://open.spotify.com/album/2zYcjcNUzcgMntymoukwZR?si=bItC6v2PRL2lnKfCMumR_Q",
            youtubeLinks: {
                "NewJeans (뉴진스) 'Zero' Official MV": "https://youtu.be/XIOoqJyx8E4?si=yewJtNLSrVlrAw9U"
            }
        },
        "Be Who You Are": {
            coverImage: "images/be_who_you_are_album.jpg",
            releaseDate: "June 15, 2023",
            songs: ["Be Who You Are (Real Magic) (feat. J.I.D, NewJeans & Camilo"],
            spotifyLink: "https://open.spotify.com/album/1Pk1W5xbmAqG6wBNL4sjq5?si=jVPAbmEiSFCIz6Jp53z50Q",
            youtubeLinks: {
                "Be Who You Are (Music Video) | Coke Studio | Jon Batiste, J.I.D, NewJeans, Cat Burns, Camilo": "https://youtu.be/XEsrFIQOWZg?si=4FbKFR-7WPfMCqO7"
            }
        },
        "Zero (J.I.D Remix)": {
            coverImage: "images/zero_remix_album.jpg",
            releaseDate: "May 17, 2023",
            songs: ["Zero (J.I.D Remix)"],
            spotifyLink: "https://open.spotify.com/album/45wwQll1Ay4A1Rz79wWuNt?si=UAijntgwQW6fL-r7HxfxgQ",
            youtubeLinks: {
                "Zero (J.I.D Remix)": "https://youtu.be/qNmi3ir7ptE?si=qvq9XlFV5pUYt2WQ",
                "NewJeans x J.I.D | Zero (Remix) | Coke Studio": "https://youtu.be/HX9vJaXD8WE?si=gQSIvxjCU3LirrFU"
            }
        },
        "NewJeans ‘Super Shy’": {
            coverImage: "images/get_up_album.jpg",
            releaseDate: "July 7, 2023",
            songs: ["Super Shy", "New Jeans"],
            spotifyLink: "https://open.spotify.com/album/5V729UqvhwNOcMejx0m55I?si=5hU2uh7sSO6CQMv0YUJajQ",
            youtubeLinks: {
                "NewJeans (뉴진스) 'Super Shy' Official MV": "https://youtu.be/ArmDp-zijuc?si=F34SFNRQUWgNrrVc",
                "NewJeans (뉴진스) 'Cool With You' Official MV (side A)": "https://youtu.be/zsYSSVoQnP4?si=iiRtn_SsEBAwpZtN",
                "NewJeans (뉴진스) 'Cool With You' & 'Get Up' Official MV (side B)": "https://youtu.be/nJDMAjwxthM?si=jkkj4GeNKG9Gmo_c"
            }
        },
        "Get Up": {
            coverImage: "images/get_up_album.jpg",
            releaseDate: "July 21, 2023",
            songs: ["New Jeans", "Super Shy", "ETA", "Cool With You", "Get Up", "ASAP"],
            spotifyLink: "https://open.spotify.com/album/4N1fROq2oeyLGAlQ1C1j18?si=4t0yxhziScy0QF9e4GsYHg",
            youtubeLinks: {
                "NewJeans (뉴진스) 'Super Shy' Official MV": "https://youtu.be/ArmDp-zijuc?si=F34SFNRQUWgNrrVc",
                "NewJeans (뉴진스) 'Cool With You' Official MV (side A)": "https://youtu.be/zsYSSVoQnP4?si=iiRtn_SsEBAwpZtN",
                "NewJeans (뉴진스) 'Cool With You' & 'Get Up' Official MV (side B)": "https://youtu.be/nJDMAjwxthM?si=jkkj4GeNKG9Gmo_c",
                "Get Up": "https://youtu.be/SXM1q0CTfew?si=fHDVwXOlB15Lbc7i",
                "NewJeans (뉴진스) 'ASAP' Official MV": "https://youtu.be/dJdqn5v4Dkw?si=pFJfmiP6ZdQyD6Jy",
            }
        },
        "A Time Called You (Original Soundtrack From the Netflix Series)": {
            coverImage: "images/a_time_called_you_album.jpg",
            releaseDate: "September 8, 2023",
            songs: ["Beautiful Restriction"],
            spotifyLink: "https://open.spotify.com/album/5qHH0SHWf5yQxG4yqHnIzY?si=uAOQm7nwQrK9RXetRFSZZQ",
            youtubeLinks: {} // No official MV
        },
        "GODS": {
            coverImage: "images/gods_album.jpg",
            releaseDate: "October 4, 2023",
            songs: ["GODS"],
            spotifyLink: "https://open.spotify.com/album/0rAaP1OBxVCn2cIUZNjGRs?si=J61xpwHVQp62CAW0AxEBcQ",
            youtubeLinks: {
                "GODS ft. NewJeans (뉴진스) (Official Music Video) | Worlds 2023 Anthem - League of Legends": "https://youtu.be/C3GouGa0noM?si=RONKcA9nKS2w4KPD"
            }
        },
        "NewJeans x MY DEMON": {
            coverImage: "images/my_demon_album.jpg",
            releaseDate: "November 24, 2023",
            songs: ["Our Night is More Beautiful Than Your Day", "Our Night is More Beautiful Than Your Day (Inst."],
            spotifyLink: "https://open.spotify.com/album/31chdu7JhVd0sC9X7sURNb?si=tw_28AbhTxeZYztlWLICBQ",
            youtubeLinks: {} // No official MV
        },
        "NJWMX": {
            coverImage: "images/njwmx_album.jpg",
            releaseDate: "April 26, 2024",
            songs: ["Ditto (250 Remix)", "OMG (FRNK Remix)", "Attention (250 Remix)", "Hype Boy (250 Remix)", "Cookie (FRNK Remix)", "Hurt (250 Remix)", "Ditto (250 Remix) (Instrumental)", "OMG (FRNK Remix) (Instrumental)", "Attention (250 Remix) (Instrumental)", "Hype Boy (250 Remix) (Instrumental)", "Cookie (FRNK Remix) (Instrumental)", "Hurt (250 Remix) (Instrumental)"],
            spotifyLink: "https://open.spotify.com/album/6XRGc3GNodkhSrPwHnx1KX?si=cjfXj-itTGignIF0Taj-LQ",
            youtubeLinks: {}
        },
        "How Sweet": {
            coverImage: "images/how_sweet_album.jpg",
            releaseDate: "May 24, 2024",
            songs: ["How Sweet", "Bubble Gum", "How Sweet (Instrumental)",  "Bubble Gum (Instrumental)"],
            spotifyLink: "https://open.spotify.com/album/0EhZEM4RRz0yioTgucDhJq?si=FHPA8gyeQneLsx3b0Vk0SA",
            youtubeLinks: {
                "NewJeans (뉴진스) 'How Sweet' Official MV": "https://youtu.be/Q3K0TOvTOno?si=PXMLVNd3N_6h0rUF",
                "NewJeans (뉴진스) 'Bubble Gum' Official MV": "https://youtu.be/ft70sAYrFyY?si=8Ew8EV0c27N5tjB6"
            }
        },
        "Supernatural": {
            coverImage: "images/supernatural_album.jpg",
            releaseDate: "June 21, 2024",
            songs: ["Supernatural", "Right Now", "Supernatural (Instrumental)", "Right Now (Instrumental)"],
            spotifyLink: "https://open.spotify.com/album/1FVw30SoC91lq1UZ6N9rwN?si=eRrvTK_fQL-nU9DJBohfBA",
            youtubeLinks: {
                "NewJeans (뉴진스) ‘Supernatural’ Official MV (Part.1)": "https://youtu.be/ZncbtRo7RXs?si=4qx9FKJQzoKswXxl",
                "NewJeans (뉴진스) ‘Supernatural’ Official MV (Part.2)": "https://youtu.be/A4S8zl50AdM?si=SKqAMQtHySdM_mdj",
                "NewJeans (뉴진스) 'Right Now' Official MV": "https://youtu.be/m6pTbEz4w3o?si=XcOwiORwBEXQHRSJ"
            }
        }
    };

    // Create all album panels on page load and hide them initially
    for (const albumName in albumData) {
        const panel = createAlbumPanel(albumName);
        if (panel) {
            panel.style.display = 'none';  // Initially hidden
            albumPanelsContainer.appendChild(panel);
        }
    }

    // Function to create an album panel
    function createAlbumPanel(albumName) {
        const album = albumData[albumName];

        if (!album) {
            console.error(`Album data not found for ${albumName}`);
            return null;
        }

        const panel = document.createElement('div');
        panel.classList.add('album-panel');
        panel.dataset.albumName = albumName;

        const closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', closeAlbumPanel);

        const title = document.createElement('h3');
        title.textContent = albumName;

        const cover = document.createElement('img');
        cover.src = album.coverImage;
        cover.alt = albumName;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = `Release Date: ${album.releaseDate}`;

        const songsList = document.createElement('ul');
        album.songs.forEach(song => {
            const songItem = document.createElement('li');
            songItem.textContent = song;
            songsList.appendChild(songItem);
        });

        const spotifyButton = document.createElement('a');
        spotifyButton.classList.add('spotify-button');
        spotifyButton.href = album.spotifyLink;
        spotifyButton.textContent = 'Listen on Spotify';
        spotifyButton.target = '_blank';

        panel.appendChild(closeButton);
        panel.appendChild(title);
        panel.appendChild(cover);
        panel.appendChild(releaseDate);
        panel.appendChild(songsList);
        panel.appendChild(spotifyButton);

        if (album.youtubeLinks) {
            for (const song in album.youtubeLinks) {
                const youtubeButton = document.createElement('a');
                youtubeButton.classList.add('youtube-button');
                youtubeButton.href = album.youtubeLinks[song];
                youtubeButton.textContent = `Watch "${song}" on YouTube`;
                youtubeButton.target = '_blank';
                panel.appendChild(youtubeButton);
            }
        }

        return panel;
    }

    // Function to open an album panel
    function openAlbumPanel(albumName) {
        // Hide all panels first
        const allPanels = document.querySelectorAll('.album-panel');
        allPanels.forEach(panel => panel.style.display = 'none');

        // Find and show the selected panel
        const panel = document.querySelector(`.album-panel[data-album-name="${albumName}"]`);
        if (panel) {
            panel.style.display = 'block'; // Show the selected panel
            albumPanelsContainer.style.display = 'flex';
        }
    }

    // Function to close an album panel
    function closeAlbumPanel(event) {
        albumPanelsContainer.style.display = 'none';
    }

    // Event listeners for album clicks
    albumsContainer.addEventListener('click', (event) => {
        const albumElement = event.target.closest('.album');
        if (albumElement) {
            const albumName = albumElement.dataset.albumName;
            openAlbumPanel(albumName);
        }
    });
});
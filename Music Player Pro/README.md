/*Explain this code logic  step by step */
This JavaScript code manages the functionality of a music player app. Let's break it down step-by-step to understand the logic behind each part:

Step-by-Step Breakdown:

Step 1 : DOM Selection:

        const wrapper = document.querySelector(".wrapper"),
        musicImg = wrapper.querySelector(".img-area img"),
        musicName = wrapper.querySelector(".song-details .name"),
        musicArtist = wrapper.querySelector(".song-details .artist"),
        mainAudio = wrapper.querySelector("#main-audio"),
        playPauseBtn = wrapper.querySelector(".play-pause"),
        prevBtn = wrapper.querySelector("#prev"),
        nextBtn = wrapper.querySelector("#next"),
        progressArea = wrapper.querySelector(".progress-area"),
        progressBar = wrapper.querySelector(".progress-bar"),
        musicList = wrapper.querySelector(".music-list"),
        showMoreBtn = wrapper.querySelector("#more-music"),
        hideMusicBtn = musicList.querySelector("#close");
~~EXPLAIN ~~

       1) const wrapper = document.querySelector(".wrapper"),

        Breakdown of the Line:
          A) const:  This keyword declares a constant variable. In this case,
          it means that once wrapper is assigned a value (the selected DOM element),
          it can't be reassigned to something else. However,
          you can still modify the contents or properties of the selected DOM element.

          B) document: Refers to the global document object, which represents the entire HTML page loaded into the browser.
          The document object allows access to various parts of the page, 
          such as elements, styles, and content.

          C) querySelector(".wrapper"): This method is used to find and select the first HTML element that matches the given CSS selector.
            ".wrapper": This is a CSS class selector.
            It tells the querySelector method to find an element in the document that has a class of wrapper. 
            The dot (.) before the class name indicates that it’s selecting by class (as in CSS).
            This will return the first element in the document that has the class "wrapper". 
            If there are multiple elements with this class, only the first one will be selected.
            
          D) Assignment to wrapper: The selected element (the first element with the class wrapper) is assigned to the wrapper variable,
          allowing you to easily reference and manipulate this element later in your JavaScript code.

        2) musicImg = wrapper.querySelector(".img-area img"),

            means that the code is selecting (or referencing) the <img> element inside a parent element with the class .
            img-area, and it assigns this selected image element to the variable musicImg.
  
            Breakdown:
               A) wrapper.querySelector(".img-area img"): This means the code is looking for an <img> element within an element that has the class .
               B)img-area. The .img-area class is likely used to style the container for the album artwork or song cover image.
               C)wrapper: This is a reference to an HTML element with the class .wrapper, which likely acts as the parent container for the music player.
               D)musicImg: This variable will now hold a reference to the image element,
                allowing the code to update its properties, like changing the source (src) to show a new album cover when a song changes.
            
        3)  musicName = wrapper.querySelector(".song-details .name"),

            assigns to the variable musicName a reference to a specific HTML element within your music player application. 
            Let's break down what this line does:

            Breakdown:
                wrapper: This is a reference to the main container element in your HTML with the class .wrapper. It's assumed that all the music player's elements are nested inside this container.
                
                wrapper.querySelector(".song-details .name"): This method searches within the wrapper element for the first descendant element that matches the CSS selector .song-details .name.
                
                .song-details .name: This is a CSS selector that targets an element with the class .name that is a descendant of an element with the class .song-details.
                .song-details: An element that likely contains details about the song, such as the song name and artist.
                .name: The specific element within .song-details that displays the song's name.
                Assignment to musicName: The selected element is assigned to the variable musicName, allowing you to manipulate it later in your JavaScript code.
                
                Purpose:
                By selecting the song name element and storing it in the musicName variable, your script can dynamically update the text content of this element. This is essential for displaying the correct song title when:
                
                A new song starts playing.
                The user navigates to the next or previous track.
                The playlist is shuffled or repeated.

          4) musicArtist = wrapper.querySelector(".song-details .artist"),

                selects an element inside the wrapper that has the class artist, which is nested inside another element with the class song-details.
                This element likely represents the artist's name in the music player. Let’s break it down:

                Breakdown of the Code:
                
                wrapper:  This is a reference to a previously selected HTML element,
                probably the main container for the music player interface. It was likely defined earlier in the code using:

                const wrapper = document.querySelector(".wrapper");

                The wrapper element contains all other elements related to the music player, including song details, play buttons, and more.

                querySelector(".song-details .artist"):

                querySelector: This method selects the first element that matches the given CSS selector inside the wrapper element.
                .song-details .artist: This is a CSS selector that looks for an element with the class artist inside an element with the class song-details.
                .song-details: Refers to a parent container that likely holds the details of the song (like the name and artist).
                .artist: Refers to the element within .song-details that specifically holds the artist’s name.
                Assignment to musicArtist:
                
                The selected element (which has the class artist and is inside the .song-details element) is stored in the variable musicArtist.
                This variable is used later in the code to dynamically update or interact with the artist name when different songs are played.

        5) mainAudio = wrapper.querySelector("#main-audio"),

                selects an audio element from the HTML that has the ID main-audio and assigns it to the variable mainAudio.
                This element is used to play audio files (songs) in the music player.

                Breakdown of the Code:
                wrapper:
                
                This variable likely refers to the container for the entire music player interface, selected earlier using:

                selects an audio element from the HTML that has the ID main-audio and assigns it to the variable mainAudio. This element is used to play audio files (songs) in the music player.

                querySelector("#main-audio"):

              querySelector: This method is used to find and select the first element that matches the provided CSS selector within the wrapper element.
              "#main-audio": This is an ID selector, which selects the element with the ID main-audio.
              #: The hash (#) indicates an ID selector in CSS.
              main-audio: This is the specific ID of the audio element that is responsible for playing the song.
              This selector is specific because each ID must be unique in an HTML document, so this will always select one element—the audio player element.
              Assignment to mainAudio:
              
              The selected element, which is the audio player with the ID main-audio, is assigned to the variable mainAudio.
              This allows you to reference and control the audio player using the mainAudio variable in your JavaScript code.
              
        6) playPauseBtn = wrapper.querySelector(".play-pause")
        
            Purpose: This selects the element that controls the play/pause functionality of the music player.
            Logic:
            wrapper.querySelector(".play-pause") looks for an element with the class .play-pause inside the wrapper.
            The playPauseBtn variable is used to handle play/pause events. It allows the user to start or stop the music.
            
        7)  prevBtn = wrapper.querySelector("#prev")
        
            Purpose: This selects the button that allows the user to go to the previous song.
            Logic:
            #prev is an id selector that targets the button or element with the id="prev".
            The prevBtn is used to trigger the functionality that switches to the previous song when clicked.

        8) nextBtn = wrapper.querySelector("#next")

            Purpose: This selects the button that allows the user to skip to the next song.
            Logic:
            #next is an id selector targeting the button or element with the id="next".
            The nextBtn variable will be used to trigger the "next song" functionality when the user clicks it.
            
        9) progressArea = wrapper.querySelector(".progress-area")

            Purpose: This selects the element that represents the entire area of the progress bar.
            Logic:
            .progress-area is a class selector that targets the element showing the overall progress of the current song.
            The progressArea variable is used to handle updates to the progress bar and 
            to detect clicks when the user wants to seek to a specific part of the song.
            
        10) progressBar = wrapper.querySelector(".progress-bar")
        
            Purpose: This selects the element inside the progress area that visually shows the current progress of the song.
            
            Logic:
            .progress-bar is a class selector that refers to the bar that fills up as the song plays, 
            representing how much of the song has been played.
            The progressBar variable is used to update the width of this bar as the song progresses.

        11)  musicList = wrapper.querySelector(".music-list")
        
              Purpose: This selects the element that contains the list of all songs.
              Logic:
              .music-list is a class selector that targets the list (or container) where all songs are displayed,
              allowing the user to see available tracks.
              The musicList variable can be used to show or hide the song list or dynamically update it.

        12) showMoreBtn = wrapper.querySelector("#more-music")
        
            Purpose: This selects the button that allows the user to expand and show the list of songs (the playlist).
            Logic:
            #more-music is an id selector that targets the button or element that, 
            when clicked, expands or reveals the playlist.
            The showMoreBtn is used to toggle the visibility of the musicList.

        13) hideMusicBtn = musicList.querySelector("#close")
        
            Purpose: This selects the button that closes or hides the music list.
            
            Logic:
            #close is an id selector that targets a button inside the musicList element to hide or collapse the playlist.
            The hideMusicBtn is used to collapse the song list when clicked.
            
3) Loading and Playing Music:

        function loadMusic(indexNumb) {
        musicName.innerText = allMusic[indexNumb - 1].name;
        musicArtist.innerText = allMusic[indexNumb - 1].artist;
        musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
        mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
        }
   
        The loadMusic function updates the song name, 
        artist, image, and audio source for the given music index. 
        It dynamically updates the UI and prepares the song to be played.

       Parameters:
        indexNumb: This parameter represents the index of the song in the allMusic array that you want to load. The allMusic array holds details about all the songs available in your music player.
        Logic and Steps:
        musicName.innerText = allMusic[indexNumb - 1].name;:
        
        This line selects the name of the song from the allMusic array using the index indexNumb - 1.
        indexNumb - 1: Subtracting 1 adjusts for the fact that arrays are 0-indexed, while indexNumb is assumed to start from 1.
        allMusic[indexNumb - 1].name: This retrieves the name of the song from the allMusic object at the given index.
        musicName.innerText: This updates the text inside the element referenced by musicName, displaying the song's name in the player.
        musicArtist.innerText = allMusic[indexNumb - 1].artist;:
        
        Similar to the song name, this line retrieves the artist's name from the allMusic array.
        allMusic[indexNumb - 1].artist: This selects the artist's name.
        musicArtist.innerText: Updates the text of the HTML element storing the artist's name to reflect the currently playing song.
        musicImg.src = images/${allMusic[indexNumb - 1].img}.jpg;:
        
        This line updates the album cover image displayed in the player.
        allMusic[indexNumb - 1].img: This retrieves the file name for the song's associated image from the allMusic array.
        musicImg.src: Updates the src attribute of the musicImg element to point to the correct album art file. The image path is dynamically constructed using template literals (${}).
        mainAudio.src = songs/${allMusic[indexNumb - 1].src}.mp3;:
        
        This updates the audio file to play the correct song.
        allMusic[indexNumb - 1].src: Retrieves the file name of the song's audio file from the allMusic array.
        mainAudio.src: Sets the src attribute of the mainAudio element to point to the correct .mp3 file so the player can load and play the selected song.
        
4) Play and Pause Music:

        function playMusic() {
            wrapper.classList.add("paused");
            playPauseBtn.querySelector("i").innerText = "pause";
            mainAudio.play();
        }
        
        function pauseMusic() {
            wrapper.classList.remove("paused");
            playPauseBtn.querySelector("i").innerText = "play_arrow";
            mainAudio.pause();
        }


        

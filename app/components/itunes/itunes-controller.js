import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(songs) {
    removeClass();
  console.log(songs)

  //YOUR CODING STARTS HERE
  let template =""
  
      for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    // if(song.preview.indexOf("video") == 0){
    template += `

    <div class="col-xs-12 col-md-12 ">
        <div class="row mt-3 mb-3">
            <div class="col-xs-12 col-sm-4">
               <div><img class="img-fluid img-res" src="${song.albumArt}" alt="${song.collection}"></div>
            </div>
            <div class="col-xs-12 col-sm-8">
                <div class="card">
                    <div class="card-body">
                        <div class="card-text">
                            <p>Album: ${song.collection}</p>
                            <p>Artist: ${song.artist}</p>
                            <p>Song: ${song.title}</p>
                            <p>Album Price: ${song.price}</p>
                        </div>    
                    <audio class="audio" controls class="mb-2" onplay="playAudio()">
                        <source src="${song.preview}"/>
                    </audio>
                    </div>
                </div>
            </div>
        </div>            
    </div>
`
// }
  }


document.getElementById('songs').innerHTML = template

}

function playAudio(){
    let audios = document.getElementsByTagName('audio')
    for (let i = 0; i < audios.length; i++) {
        if (audios[i] != song.target) {
            audios[i].pause()
        }
        
    }
}

//PUBLIC
class ItunesController {
    constructor(){
    }
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}
function removeClass(){
    document.getElementById('center').classList.remove('center-place')
}


export default ItunesController
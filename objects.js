var playlist = {
  abon: 'hahaha'
}

function updatePlaylist(playlist, artistName, songTitle) {
  object.assign({}, playlist, {[artistName]: songTitle})
}
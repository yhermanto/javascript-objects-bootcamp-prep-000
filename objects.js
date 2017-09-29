var playlist = {
  abon: 'hahaha'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return object.assign({}, playlist, {[artistName]: songTitle})
}

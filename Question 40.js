function make_album(artist, title, tracks) {
    var make_album = { artist: artist, title: title };
    if (tracks) {
        make_album["tracks"] = tracks;
    }
    return make_album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));

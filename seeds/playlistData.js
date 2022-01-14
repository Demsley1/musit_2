const {Playlist}= require('../models')

const playlistData=[
    {
        artist: 'The Weeknd',
        song_title: 'Sacrifice',
        genre: 'R&B'
    },
    {
        artist: 'Ed Sheeran',
        song_title: 'PeruFireboy DML',
        genre: 'R&B'
    },
    {
        artist: 'USZA',
        song_title: 'I Hate',
        genre: 'R&B'
    },
    {
        artist: 'Blxst',
        song_title: 'About You',
        genre: 'R&B'
    },
    {
        artist: 'The Weeknd',
        song_title: 'I Heard Youre Married',
        genre: 'R&B'
    },
    {
        artist: 'Burna Boy',
        song_title: 'B. DOR',
        genre: 'R&B'
    },
    {
        artist: 'Free6LACK',
        song_title: 'Rent',
        genre: 'R&B'
    },
    {
        artist: 'PARTYNEXTDOOR',
        song_title: 'Make a MallPreme',
        genre: 'R&B'
    },
    {
        artist: 'Dave Brubeck',
        song_title: 'Take Five',
        genre: 'Other'
    },
    {
        artist: 'Miles Davis',
        song_title: 'So What',
        genre: 'Other'
    },
    {
        artist: 'Duke Ellington',
        song_title: 'Take The A Train',
        genre: 'Other'
    },
    {
        artist: 'Thelonious Monk',
        song_title: 'Round Midnight',
        genre: 'Other'
    },
    {
        artist: 'John Coltrane',
        song_title: 'My Favorite Things',
        genre: 'Other'
    },
    {
        artist: 'John Coltrane',
        song_title: 'A Love Supreme (Acknowledgment)s',
        genre: 'Other'
    },
    {
        artist: 'Miles Davis',
        song_title: 'All Blues',
        genre: 'Other'
    },
    {
        artist: 'Weather Report',
        song_title: 'Birdland',
        genre: 'Other'
    },
    {
        artist: 'Panic at the disco',
        song_title: 'High Hopes',
        genre: 'Rock'
    },
    {
        artist: 'AWOLNATION',
        song_title: 'Sail',
        genre: 'Rock'
    },
    {
        artist: 'Nirvana',
        song_title: 'smells like teen spirit',
        genre: 'Rock'
    },
    {
        artist: 'Linkin’ park',
        song_title: 'Bleed it Out',
        genre: 'Rock'
    },
    {
        artist: 'Bon Jovi',
        song_title: 'Livin’ on a Prayer',
        genre: 'Rock'
    },
    {
        artist: 'Guns N Roses',
        song_title: 'Sweet child of mine',
        genre: 'Rock'
    },
    {
        artist: 'Foo Fighters',
        song_title: 'The Pretender l',
        genre: 'Rock'
    },
    {
        artist: '3 Doors Down',
        song_title: 'It’s not my Tiime',
        genre: 'Rock'
    },
    {
        artist: 'Jay-z',
        song_title: 'U don’t know',
        genre: 'Rap'
    },
    {
        artist: 'Dr Dre',
        song_title: 'still D.R.E',
        genre: 'Rap'
    },
    {
        artist: '50 cent',
        song_title: 'In da club',
        genre: 'Rap'
    },
    {
        artist: 'Future',
        song_title: 'March Madness',
        genre: 'Rap'
    },
    {
        artist: 'Drake',
        song_title: '6pm in New York',
        genre: 'Rap'
    },
    {
        artist: 'J. Cole',
        song_title: 'Middle Child',
        genre: 'Rap'
    },
    {
        artist: 'Wale',
        song_title: 'On Chill',
        genre: 'Rap'
    },
    {
        artist: 'Tupac',
        song_title: 'Hail Mary',
        genre: 'Rap'
    },
    {
        artist: 'BTS',
        song_title: 'Butter',
        genre: 'Pop'
    },
    {
        artist: 'Doja Cat & SZA',
        song_title: 'Kiss Me More',
        genre: 'Pop'
    },
    {
        artist: 'Justin Bieber',
        song_title: 'Peaches',
        genre: 'Pop'
    },
    {
        artist: 'Lil Nas X',
        song_title: 'MONTERO',
        genre: 'Pop'
    },
    {
        artist: 'The Weeknd',
        song_title: 'Blinding Lights',
        genre: 'Pop'
    },
    {
        artist: 'STAY',
        song_title: 'The Kid LAROI & J Biebs',
        genre: 'Pop'
    },
    {
        artist: 'Beyoncé',
        song_title: 'Single Ladies',
        genre: 'Pop'
    },
    {
        artist: 'STAY',
        song_title: 'The Kid LAROI & J Biebs',
        genre: 'Pop'
    },
    {
        artist: 'Rihanna',
        song_title: 'Umbrella',
        genre: 'Pop'
    },
    {
        artist: 'Taylor Swift',
        song_title: 'Shake it Off',
        genre: 'Pop'
    },
    {
        artist: 'Britney Spears',
        song_title: 'Toxic',
        genre: 'Pop'
    },
    {
        artist: 'Adele',
        song_title: 'Rolling in the Deep',
        genre: 'Pop'
    },
    {
        artist: 'Katy Perry',
        song_title: 'Firework',
        genre: 'Pop'
    },
    {
        artist: 'Amy Winehouse',
        song_title: 'Rehab',
        genre: 'Pop'
    },
    {
        artist: 'Johnny Cash',
        song_title: 'I Walk the Line',
        genre: 'Country'
    },
    {
        artist: 'Dolly Parton',
        song_title: 'Jolene',
        genre: 'Country'
    },
    {
        artist: 'Garth Brooks',
        song_title: 'Friends in Low Places',
        genre: 'Country'
    },
    {
        artist: 'George Strait',
        song_title: 'All My Ex’s Live in Texas',
        genre: 'Country'
    },
    {
        artist: 'Patsy Cline',
        song_title: 'Walkin After Midnight',
        genre: 'Country'
    },
    {
        artist: 'Chris Stapleton',
        song_title: 'Tennessee Whiskey',
        genre: 'Country'
    },
    {
        artist: 'Deanna Carter',
        song_title: 'Strawberry Wine',
        genre: 'Country'
    },
    {
        artist: 'Old Crow Medicine Show',
        song_title: 'Wagon Wheel',
        genre: 'Country'
    },
    {
        artist: 'Queen',
        song_title: 'Bohemian Rhapsody',
        genre: 'Rock'
    },
    {
        artist: 'The Cranberries',
        song_title: 'Zombie',
        genre: 'Rock'
    },
    {
        artist: 'Jimi Hendrix',
        song_title: 'All Along The Watchtower',
        genre: 'Rock'
    },
    {
        artist: 'AC/DC',
        song_title: 'Thunderstruck',
        genre: 'Rock'
    },
    {
        artist: 'The Killers',
        song_title: 'Mr.Brightside',
        genre: 'Rock'
    },
    {
        artist: 'Billy Idol',
        song_title: 'White Wedding -Pt.1',
        genre: 'Rock'
    },
    {
        artist: 'Foo Fighters',
        song_title: 'Everlong',
        genre: 'Rock'
    },
    {
        artist: 'The Kingsmen',
        song_title: 'Louie Louie',
        genre: 'Rock'
    },
    {
        artist: 'Zomby',
        song_title: 'Fly 2',
        genre: 'Other'
    },
    {
        artist: 'UZ',
        song_title: 'UNDERGRND',
        genre: 'Other'
    },
    {
        artist: 'Louie Zong',
        song_title: 'Hello, World',
        genre: 'Other'
    },
    {
        artist: 'Louie Zong',
        song_title: 'Wagon Wheel',
        genre: 'Other'
    },
    {
        artist: 'Coki',
        song_title: 'All of a Sudden',
        genre: 'Other'
    },
    {
        artist: 'Zomboy',
        song_title: 'Lone Wolf',
        genre: 'Other'
    },
    {
        artist: 'Foreign Beggars',
        song_title: 'Still Getting It',
        genre: 'Other'
    },
    {
        artist: 'Flux Pavilion',
        song_title: 'Bass Cannon',
        genre: 'Other'
    },
];

const seedPlaylist = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylist;
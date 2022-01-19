const { Playlist } = require('../models');

const playlistData = [
    {
<<<<<<< HEAD
        title: 'playlist1',
        user_id: 2
=======
        artist: 'The Weeknd',
        song_title: 'Sacrifice',
        genre: 'Other',
        user_id: '2'
>>>>>>> 3739e302b596547686e8581ba0b1c27b14b7aa58
    },
    {
        title: 'playlist2',
        user_id: 2
    },
    {
<<<<<<< HEAD
        title: 'playlist3',
=======
        artist: 'SZA',
        song_title: 'I Hate U',
        genre: 'R&B',
        user_id: 2
    },
    {
        artist: 'Blxst',
        song_title: 'About You',
        genre: 'R&B',
        user_id: 2
    },
    {
        artist: '(feat. Lil Wayne) The Weeknd',
        song_title: 'I Heard Youre Married',
        genre: 'R&B',
        user_id: 2

    },
    {
        artist: '(feat. Wizkid) Burna Boy',
        song_title: 'B. DOR',
        genre: 'Other',
        user_id: '2'

    },
    {
        artist: 'Free6LACK',
        song_title: 'Rent',
        genre: 'Other',
        user_id: '2'
    },
    {
        artist: 'PARTYNEXTDOOR',
        song_title: 'Make a MallPreme',
        genre: 'Other',
        user_id: '2'

    },
    {
        artist: 'Dave Brubeck',
        song_title: 'Take Five',
        genre: 'Other',
        user_id: 2

    },
    {
        artist: 'Miles Davis',
        song_title: 'So What',
        genre: 'Other',
        user_id: 2
    },
    {
        artist: 'Duke Ellington',
        song_title: 'Take The A Train',
        genre: 'Other',
        user_id: 2
    },
    {
        artist: 'Thelonious Monk',
        song_title: 'Round Midnight',
        genre: 'Other',

        user_id: 2
    },
    {
        artist: 'John Coltrane',
        song_title: 'My Favorite Things',
        genre: 'Other',
        user_id: 2
},
    {
        artist: 'John Coltrane',
        song_title: 'A Love Supreme (Acknowledgment)s',
        genre: 'Other',
        user_id: 2
    },
    {
        artist: 'Miles Davis',
        song_title: 'All Blues',
        genre: 'Other',
        user_id: 2
    },
    {
        artist: 'Weather Report',
        song_title: 'Birdland',
        genre: 'Other',
        user_id: 2
    },
    {
        artist: 'Panic at the disco',
        song_title: 'High Hopes',
        genre: 'Rock',
        user_id: 3
    },
    {
        artist: 'AWOLNATION',
        song_title: 'Sail',
        genre: 'Rock',
        user_id: 3
    },
    {
        artist: 'Nirvana',
        song_title: 'smells like teen spirit',
        genre: 'Rock',
        user_id: 3
    },
    {
        artist: 'Linkin Park',
        song_title: 'Bleed it Out',
        genre: 'Rock',
        user_id: 3
    },
    {
        artist: 'Bon Jovi',
        song_title: "Livin' on a Prayer",
        genre: 'Rock',
        user_id: 3
    },
    {
        artist: 'Guns N Roses',
        song_title: 'Sweet child of mine',
        genre: 'Rock',

        user_id: 3
    },
    {
        artist: 'Foo Fighters',
        song_title: 'The Pretender l',
        genre: 'Rock',
        user_id: 3
    },
    {
        artist: '3 Doors Down',
        song_title: "It's not my Time",
        genre: 'Rock',
        user_id: 3
    },
    {
        artist: 'Jay-z',
        song_title: "U don't know",
        genre: 'Rap',
        user_id: 3
    },
    {
        artist: 'Dr Dre',
        song_title: 'still D.R.E',
        genre: 'Rap',
>>>>>>> 3739e302b596547686e8581ba0b1c27b14b7aa58
        user_id: 3
    },
    {
        title: 'playlist4',
        user_id: 3
    },
    {
        title: 'playlist5',
        user_id: 4
    },
    {
<<<<<<< HEAD
        title: 'playlist6',
=======
        artist: 'Justin Bieber',
        song_title: 'Peaches',
        genre: 'Pop',
        user_id: 4
    },
    {
        artist: 'Lil Nas X',
        song_title: 'MONTERO',
        genre: 'Pop',
        user_id: 4
    },
    {
        artist: 'The Weeknd',
        song_title: 'Blinding Lights',
        genre: 'Pop',
        user_id: 4
    },
    {
        artist: 'STAY',
        song_title: 'The Kid LAROI & J Biebs',
        genre: 'Pop',
        user_id: 4
    },
    {
        artist: 'Beyoncé',
        song_title: 'Single Ladies',
        genre: 'Pop',
        user_id: 4
    },
    {
        artist: 'STAY',
        song_title: 'The Kid LAROI & J Biebs',
        genre: 'Pop',
        user_id: 5
    },
    {
        artist: 'eevee',
        song_title: 'Rosemary',
        genre: 'Other',
        user_id: 4
    },
    {
        artist: 'The Whitest Boy Alive',
        song_title: 'Intentions',
        genre: 'Other',
        user_id: 4
    },
    {
        artist: 'Jennifer Lara',
        song_title: 'I Am in Love',
        genre: 'Other',
        user_id: 4
    },
    {
        artist: 'Mk.gee',
        song_title: 'You',
        genre: 'Other',
        user_id: 4
    },
    {
        artist: 'BAD BAD NOT GOOD',
        song_title: 'Time moves Slow',
        genre: 'Other',
        user_id: 4
    },
    {
        artist: 'Chris Botti',
        song_title: 'La belle dame sans regrets',
        genre: 'Other',
        user_id: '4'
    },
    {
        artist: 'Hiatus Kaiyote',
        song_title: 'Red Room',
        genre: 'Other',
        user_id: '4'
    },
    {
        artist: 'Beyoncé',
        song_title: 'Single Ladies (Put a Ring on It)',
        genre: 'Other',
        user_id: '5'
    },
    {
        artist: 'Rihanna featuring Jay-Z',
        song_title: 'Umbrella',
        genre: 'Pop',
        user_id: 5
    },
    {
        artist: 'Taylor Swift',
        song_title: 'Shake it Off',
        genre: 'Pop',
        user_id: 5
    },
    {
        artist: 'Britney Spears',
        song_title: 'Toxic',
        genre: 'Pop',
        user_id: 5
    },
    {
        artist: 'Adele',
        song_title: 'Rolling in the Deep',
        genre: 'Pop',
        user_id: 5
    },
    {
        artist: 'Katy Perry',
        song_title: 'Firework',
        genre: 'Pop',
        user_id: 5
    },
    {
        artist: 'Amy Winehouse',
        song_title: 'Rehab',
        genre: 'Pop',
        user_id: 5
    },
    {
        artist: 'Johnny Cash',
        song_title: 'I Walk the Line',
        genre: 'Country',
        user_id: 5
    },
    {
        artist: 'Dolly Parton',
        song_title: 'Jolene',
        genre: 'Country',
        user_id: 5
    },
    {
        artist: 'Garth Brooks',
        song_title: 'Friends in Low Places',
        genre: 'Country',
        user_id: 5
    },
    {
        artist: 'George Strait',
        song_title: "All My Ex's Live in Texas",
        genre: 'Country',
        user_id: 5
    },
    {
        artist: 'Patsy Cline',
        song_title: 'Walkin After Midnight',
        genre: 'Country',
        user_id: 5
    },
    {
        artist: 'Chris Stapleton',
        song_title: 'Tennessee Whiskey',
        genre: 'Country',
>>>>>>> 3739e302b596547686e8581ba0b1c27b14b7aa58
        user_id: 5
    },
    {
        title: 'playlist7',
        user_id: 5
    },
    {
<<<<<<< HEAD
        title: 'playlist8',
=======
        artist: 'Old Crow Medicine Show',
        song_title: 'Wagon Wheel',
        genre: 'Country',
        user_id: 5
    },
    {
        artist: 'Queen',
        song_title: 'Bohemian Rhapsody',
        genre: 'Rock',
        user_id: 1
    },
    {
        artist: 'The Cranberries',
        song_title: 'Zombie',
        genre: 'Rock',
        user_id: 1
    },
    {
        artist: 'Jimi Hendrix',
        song_title: 'All Along The Watchtower',
        genre: 'Rock',
        user_id: 1
    },
    {
        artist: 'AC/DC',
        song_title: 'Thunderstruck',
        genre: 'Rock',
        user_id: 1
    },
    {
        artist: 'The Killers',
        song_title: 'Mr.Brightside',
        genre: 'Rock',
        user_id: 1
    },
    {
        artist: 'Billy Idol',
        song_title: 'White Wedding -Pt.1',
        genre: 'Rock',
        user_id: 1
    },
    {
        artist: 'Foo Fighters',
        song_title: 'Everlong',
        genre: 'Rock',
        user_id: 1
    },
    {
        artist: 'The Kingsmen',
        song_title: 'Louie Louie',
        genre: 'Rock',
        user_id: 1
    },
    {
        artist: 'Zomby',
        song_title: 'Fly 2',
        genre: 'Other',
        user_id: 1
    },
    {
        artist: 'UZ',
        song_title: 'UNDERGRND',
        genre: 'Other',
        user_id: 1
    },
    {
        artist: 'Louie Zong',
        song_title: 'Hello, World',
        genre: 'Other',
        user_id: 1

    },
    {
        artist: 'Louie Zong',
        song_title: 'Wagon Wheel',
        genre: 'Other',
        user_id: 1

    },
    {
        artist: 'Coki',
        song_title: 'All of a Sudden',
        genre: 'Other',
        user_id: 1

    },
    {
        artist: 'Zomboy',
        song_title: 'Lone Wolf',

        user_id: 1

    },
    {
        artist: 'Foreign Beggars',
        song_title: 'Still Getting It',
        genre: 'Other',

>>>>>>> 3739e302b596547686e8581ba0b1c27b14b7aa58
        user_id: 1

    },
    {
        title: 'playlist9',
        user_id: 1
    }
]

const seedPlaylist = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylist;
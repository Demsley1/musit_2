const { Music }= require('../models')

const musicData=[
    {
        artist: 'The Weeknd',
        song_title: 'Sacrifice',
        genre: 'Other',
        user_id: 2,
        playlist_id: 1
    },
    {
        artist: 'Ed Sheeran',
        song_title: 'PeruFireboy DML',
        genre: 'Other',
        user_id: 2,
        playlist_id: 1
    },
    {
        artist: 'SZA',
        song_title: 'I Hate U',
        genre: 'Other',
        user_id: 2,
        playlist_id: 1
    },
    {
        artist: 'Blxst',
        song_title: 'About You',
        genre: 'Other',
        user_id: 2,
        playlist_id: 1
    },
    {
        artist: 'The Weeknd',
        song_title: 'I Heard Youre Married',
        genre: 'Other',
        user_id: 2,
        playlist_id: 1
    },
    {
        artist: 'Burna Boy',
        song_title: 'B. DOR',
        genre: 'Other',
        user_id: 2,
        playlist_id: 1
    },
    {
        artist: 'Free6LACK',
        song_title: 'Rent',
        genre: 'Other',
        user_id: 2,
        playlist_id: 1
    },
    {
        artist: 'PARTYNEXTDOOR',
        song_title: 'Make a MallPreme',
        genre: 'Other',
        user_id: 2,
        playlist_id: 1
    },
    {
        artist: 'Dave Brubeck',
        song_title: 'Take Five',
        genre: 'Other',
        user_id: 2,
        playlist_id: 2
    },
    {
        artist: 'Miles Davis',
        song_title: 'So What',
        genre: 'Other',
        user_id: 2,
        playlist_id: 2
    },
    {
        artist: 'Duke Ellington',
        song_title: 'Take The A Train',
        genre: 'Other',
        user_id: 2,
        playlist_id: 2
    },
    {
        artist: 'Thelonious Monk',
        song_title: 'Round Midnight',
        genre: 'Other',
        user_id: 2,
        playlist_id: 2
    },
    {
        artist: 'John Coltrane',
        song_title: 'My Favorite Things',
        genre: 'Other',
        user_id: 2,
        playlist_id: 2
    },
    {
        artist: 'John Coltrane',
        song_title: 'A Love Supreme (Acknowledgment)s',
        genre: 'Other',
        user_id: 2,
        playlist_id: 2
    },
    {
        artist: 'Miles Davis',
        song_title: 'All Blues',
        genre: 'Other',
        user_id: 2,
        playlist_id: 2
    },
    {
        artist: 'Weather Report',
        song_title: 'Birdland',
        genre: 'Other',
        user_id: 2,
        playlist_id: 2
    },
    {
        artist: 'Panic at the disco',
        song_title: 'High Hopes',
        genre: 'Rock',
        user_id: 3,
        playlist_id: 3
    },
    {
        artist: 'AWOLNATION',
        song_title: 'Sail',
        genre: 'Rock',
        user_id: 3,
        playlist_id: 3
    },
    {
        artist: 'Nirvana',
        song_title: 'smells like teen spirit',
        genre: 'Rock',
        user_id: 3,
        playlist_id: 3
    },
    {
        artist: "Linkin' park",
        song_title: 'Bleed it Out',
        genre: 'Rock',
        user_id: 3,
        playlist_id: 3
    },
    {
        artist: 'Bon Jovi',
        song_title: "Livin' on a Prayer",
        genre: 'Rock',
        user_id: 3,
        playlist_id: 3
    },
    {
        artist: 'Guns N Roses',
        song_title: 'Sweet child of mine',
        genre: 'Rock',
        user_id: 3,
        playlist_id: 3
    },
    {
        artist: 'Foo Fighters',
        song_title: 'The Pretender l',
        genre: 'Rock',
        user_id: 3,
        playlist_id: 3
    },
    {
        artist: '3 Doors Down',
        song_title: "It's not my Time",
        genre: 'Rock',
        user_id: 3,
        playlist_id: 3
    },
    {
        artist: 'Jay-z',
        song_title: "U don't know",
        genre: 'Rap',
        user_id: 3,
        playlist_id: 4
    },
    {
        artist: 'Dr Dre',
        song_title: 'still D.R.E',
        genre: 'Rap',
        user_id: 3,
        playlist_id: 4
    },
    {
        artist: '50 cent',
        song_title: 'In da club',
        genre: 'Rap',
        user_id: 3,
        playlist_id: 4
    },
    {
        artist: 'Future',
        song_title: 'March Madness',
        genre: 'Rap',
        user_id: 3,
        playlist_id: 4
    },
    {
        artist: 'Drake',
        song_title: '6pm in New York',
        genre: 'Rap',
        user_id: 3,
        playlist_id: 4
    },
    {
        artist: 'J. Cole',
        song_title: 'Middle Child',
        genre: 'Rap',
        user_id: 3,
        playlist_id: 4
    },
    {
        artist: 'Wale',
        song_title: 'On Chill',
        genre: 'Rap',
        user_id: 3,
        playlist_id: 4
    },
    {
        artist: 'Tupac',
        song_title: 'Hail Mary',
        genre: 'Rap',
        user_id: 3,
        playlist_id: 4
    },
    {
        artist: 'BTS',
        song_title: 'Butter',
        genre: 'Pop',
        user_id: 4,
        playlist_id: 5
    },
    {
        artist: 'Doja Cat & SZA',
        song_title: 'Kiss Me More',
        genre: 'Pop',
        user_id: 4,
        playlist_id: 5
    },
    {
        artist: 'Justin Bieber',
        song_title: 'Peaches',
        genre: 'Pop',
        user_id: 4,
        playlist_id: 5
    },
    {
        artist: 'Lil Nas X',
        song_title: 'MONTERO',
        genre: 'Pop',
        user_id: 4,
        playlist_id: 5
    },
    {
        artist: 'The Weeknd',
        song_title: 'Blinding Lights',
        genre: 'Pop',
        user_id: 4,
        playlist_id: 5
    },
    {
        artist: 'STAY',
        song_title: 'The Kid LAROI & J Biebs',
        genre: 'Pop',
        user_id: 4,
        playlist_id: 5
    },
    {
        artist: 'Beyoncé',
        song_title: 'Single Ladies',
        genre: 'Pop',
        user_id: 4,
        playlist_id: 5
    },
    {
        artist: 'STAY',
        song_title: 'The Kid LAROI & J Biebs',
        genre: 'Pop',
        user_id: 5,
        playlist_id: 6
    },
    {
        artist: 'Rihanna',
        song_title: 'Umbrella',
        genre: 'Pop',
        user_id: 5,
        playlist_id: 6
    },
    {
        artist: 'Taylor Swift',
        song_title: 'Shake it Off',
        genre: 'Pop',
        user_id: 5,
        playlist_id: 6
    },
    {
        artist: 'Britney Spears',
        song_title: 'Toxic',
        genre: 'Pop',
        user_id: 5,
        playlist_id: 6
    },
    {
        artist: 'Adele',
        song_title: 'Rolling in the Deep',
        genre: 'Pop',
        user_id: 5,
        playlist_id: 6
    },
    {
        artist: 'Katy Perry',
        song_title: 'Firework',
        genre: 'Pop',
        user_id: 5,
        playlist_id: 6
    },
    {
        artist: 'Amy Winehouse',
        song_title: 'Rehab',
        genre: 'Pop',
        user_id: 5,
        playlist_id: 6
    },
    {
        artist: 'Johnny Cash',
        song_title: 'I Walk the Line',
        genre: 'Country',
        user_id: 5,
        playlist_id: 7
    },
    {
        artist: 'Dolly Parton',
        song_title: 'Jolene',
        genre: 'Country',
        user_id: 5,
        playlist_id: 7
    },
    {
        artist: 'Garth Brooks',
        song_title: 'Friends in Low Places',
        genre: 'Country',
        user_id: 5,
        playlist_id: 7
    },
    {
        artist: 'George Strait',
        song_title: "All My Ex's Live in Texas",
        genre: 'Country',
        user_id: 5,
        playlist_id: 7
    },
    {
        artist: 'Patsy Cline',
        song_title: 'Walkin After Midnight',
        genre: 'Country',
        user_id: 5,
        playlist_id: 7
    },
    {
        artist: 'Chris Stapleton',
        song_title: 'Tennessee Whiskey',
        genre: 'Country',
        user_id: 5,
        playlist_id: 7
    },
    {
        artist: 'Deanna Carter',
        song_title: 'Strawberry Wine',
        genre: 'Country',
        user_id: 5,
        playlist_id: 7
    },
    {
        artist: 'Old Crow Medicine Show',
        song_title: 'Wagon Wheel',
        genre: 'Country',
        user_id: 5,
        playlist_id: 7
    },
    {
        artist: 'Queen',
        song_title: 'Bohemian Rhapsody',
        genre: 'Rock',
        user_id: 1,
        playlist_id: 8
    },
    {
        artist: 'The Cranberries',
        song_title: 'Zombie',
        genre: 'Rock',
        user_id: 1,
        playlist_id: 8
    },
    {
        artist: 'Jimi Hendrix',
        song_title: 'All Along The Watchtower',
        genre: 'Rock',
        user_id: 1,
        playlist_id: 8
    },
    {
        artist: 'AC/DC',
        song_title: 'Thunderstruck',
        genre: 'Rock',
        user_id: 1,
        playlist_id: 8
    },
    {
        artist: 'The Killers',
        song_title: 'Mr.Brightside',
        genre: 'Rock',
        user_id: 1,
        playlist_id: 8
    },
    {
        artist: 'Billy Idol',
        song_title: 'White Wedding -Pt.1',
        genre: 'Rock',
        user_id: 1,
        playlist_id: 8
    },
    {
        artist: 'Foo Fighters',
        song_title: 'Everlong',
        genre: 'Rock',
        user_id: 1,
        playlist_id: 8
    },
    {
        artist: 'The Kingsmen',
        song_title: 'Louie Louie',
        genre: 'Rock',
        user_id: 1,
        playlist_id: 8
    },
    {
        artist: 'Zomby',
        song_title: 'Fly 2',
        genre: 'Other',
        user_id: 1,
        playlist_id: 9
    },
    {
        artist: 'UZ',
        song_title: 'UNDERGRND',
        genre: 'Other',
        user_id: 1,
        playlist_id: 9
    },
    {
        artist: 'Louie Zong',
        song_title: 'Hello, World',
        genre: 'Other',
        user_id: 1,
        playlist_id: 9
    },
    {
        artist: 'Louie Zong',
        song_title: 'Wagon Wheel',
        genre: 'Other',
        user_id: 1,
        playlist_id: 9
    },
    {
        artist: 'Coki',
        song_title: 'All of a Sudden',
        genre: 'Other',
        user_id: 1,
        playlist_id: 9
    },
    {
        artist: 'Zomboy',
        song_title: 'Lone Wolf',
        genre: 'Other',
        user_id: 1,
        playlist_id: 9
    },
    {
        artist: 'Foreign Beggars',
        song_title: 'Still Getting It',
        genre: 'Other',
        user_id: 1,
        playlist_id: 9
    },
    {
        artist: 'Flux Pavilion',
        song_title: 'Bass Cannon',
        genre: 'Other',
        user_id: 1,
        playlist_id: 9
    }
];

const seedMusic = () => Music.bulkCreate(musicData);

module.exports = seedMusic;
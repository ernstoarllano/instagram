export const seedDatabase = (firebase: Function) => {
  const users = [
    {
      userId: process.env.uuid,
      username: 'ernstoarllano',
      fullName: 'Ernesto Arellano',
      emailAddress: 'ernesto@arellano.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now(),
    },
    {
      userId: '2',
      username: 'lfc',
      fullName: 'Liverpool Football Club',
      emailAddress: 'liverpool@footballclub.com',
      following: ['2', '3', '4'],
      followers: [process.env.uuid],
      dateCreated: Date.now(),
    },
    {
      userId: '3',
      username: 'papaklopp',
      fullName: 'Jürgen Klopp',
      emailAddress: 'jürgen@klopp.com',
      following: ['2', '3', '4'],
      followers: [process.env.uuid],
      dateCreated: Date.now(),
    },
    {
      userId: '4',
      username: 'egyptianking',
      fullName: 'Mohamed Salah',
      emailAddress: 'mohamed@salah.com',
      following: ['2', '3', '4'],
      followers: [process.env.uuid],
      dateCreated: Date.now(),
    },
    {
      userId: '5',
      username: 'pplcallmegiorgio',
      fullName: 'Walker',
      emailAddress: 'walker@walker.com',
      following: [process.env.uuid],
      followers: [process.env.uuid],
      dateCreated: Date.now(),
    },
  ]

  for (let u = 0; u < users.length; u++) {
    firebase.firestore().collection('users').add(users[u])

    if (users[u].username === 'lfc') {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: '1',
          userId: '2',
          imageSrc: `/avatars/lfc.jpg`,
          caption:
            'We are delighted to announce that Mo Salah has signed a new long-term contract with the club!',
          likes: [],
          comments: [
            {
              displayName: 'egyptianking',
              comment: 'Salah Stays.',
            },
            {
              displayName: 'papaklopp',
              comment: 'Mo is one of the best players in the world!',
            },
          ],
          userLatitude: '53.4308294°',
          userLongitude: '-2.96083°',
          dateCreated: Date.now(),
        })
    }
  }
}

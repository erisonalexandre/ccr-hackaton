export default function () {
  return {
    isLogged: true,
    userSession: '123ui12h3123',
    user: {
      profilePicture: 'https://pbs.twimg.com/profile_images/1256071075441541126/_BesNopU_400x400.jpg',
      firstName: 'João',
      lastName: 'Bernardes',
      telephone: '+55929999999999',
      birthday: '1986/08/23',
      vehiclePlate: 'AAA0001',
      finishedRegister: true,
      health: [
        {
          id: 1,
          date: '2020/06/12 23:00:00',
          description: 'Tomei água'
        },
        {
          id: 2,
          date: '2020/06/12 21:00:00',
          description: 'Fiz exercícios'
        }
      ],
      trips: [
        {
          id: 1,
          start: 'novo hamburgo rs',
          destination: 'cidade baixa, porto alegre rs',
          timeTraveled: '112:37:52',
          kmTraveled: 60,
          name: 'de novo hamburgo até cidade baixa',
          date: '2020/06/10'
        },
        {
          id: 2,
          start: 'campo bom rs',
          destination: 'florianopois sc',
          timeTraveled: '203:37:52',
          kmTraveled: 500,
          name: 'de campo bom até florianopolis',
          date: '2020/06/09'
        },
        {
          id: 3,
          start: 'campo bom rs',
          destination: 'florianopois sc',
          timeTraveled: '10:37:52',
          kmTraveled: 500,
          name: 'de campo bom até florianopolis',
          date: '2020/06/08'
        }
      ]
    },
    map: {
      start: 'são paulo sp',
      destination: 'brasilia df',
      dateStart: '2020/06/13 22:27:00'
    },
    health: [
      {
        id: 1,
        date: '2020/06/12 23:00:00',
        description: 'Fiz exercícios'
      },
      {
        id: 2,
        date: '2020/06/12 21:00:00',
        description: 'Tomei água'
      }
    ],
    rankings: {
      prize: 'Corte de cabelo',
      points: 60,
      podium: [
        {
          name: 'Tiago',
          position: 1,
          points: 820,
          isUser: false,
          profilePicture: 'https://pbs.twimg.com/profile_images/1256071075441541126/_BesNopU_400x400.jpg'
        },
        {
          name: 'Manuela',
          position: 2,
          points: 770,
          isUser: false,
          profilePicture: 'https://pbs.twimg.com/profile_images/1256071075441541126/_BesNopU_400x400.jpg'
        },
        {
          name: 'Robson',
          position: 3,
          points: 710,
          isUser: false,
          profilePicture: 'https://pbs.twimg.com/profile_images/1256071075441541126/_BesNopU_400x400.jpg'
        },
        {
          name: 'João',
          position: 4,
          points: 700,
          isUser: false,
          profilePicture: 'https://pbs.twimg.com/profile_images/1256071075441541126/_BesNopU_400x400.jpg'
        },
        {
          name: 'Iago',
          position: 5,
          points: 690,
          isUser: false,
          profilePicture: 'https://pbs.twimg.com/profile_images/1256071075441541126/_BesNopU_400x400.jpg'
        }
      ],
      position: 72
    }
  }
}

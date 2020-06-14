export default function () {
  return {
    isLogged: true,
    userSession: '123ui12h3123',
    user: {
      profilePicture: 'https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      firstName: 'João',
      lastName: 'Bernardes',
      telephone: '+55929999999999',
      birthday: '1986/08/23',
      vehiclePlate: 'AAA-0001',
      finishedRegister: true,
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
        date: '2020/06/12 20:00:00',
        description: 'Fiz exercícios',
        isDone: true,
        points: 10,
        type: 'exercise'
      },
      {
        id: 2,
        date: '2020/06/12 21:00:00',
        description: 'Tomei água',
        isDone: true,
        points: 10,
        type: 'drink_water'
      },
      {
        id: 3,
        date: '2020/06/13 12:15:00',
        description: 'Descanso de tarde',
        isDone: true,
        points: 10,
        type: 'sleep'
      }
    ],
    rankings: {
      prize: 'Corte de cabelo',
      prizeThumbnail: '/statics/img/thumbnail-prize.jpg',
      points: 60,
      podium: [
        {
          name: 'Tiago',
          position: 1,
          points: 820,
          isUser: false,
          profilePicture: 'https://images.unsplash.com/photo-1533101585792-27f81a845550?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Manuela',
          position: 2,
          points: 770,
          isUser: false,
          profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Robson',
          position: 3,
          points: 710,
          isUser: false,
          profilePicture: 'https://images.unsplash.com/photo-1562457753-6867bda028cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'João',
          position: 4,
          points: 700,
          isUser: false,
          profilePicture: 'https://images.unsplash.com/photo-1535643302794-19c3804b874b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Iago',
          position: 5,
          points: 690,
          isUser: false,
          profilePicture: 'https://images.unsplash.com/photo-1542803293-cde7da05c348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
      ],
      position: 72
    }
  }
}

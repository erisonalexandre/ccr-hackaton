export default function () {
  return {
    isLogged: false,
    userSession: null,
    user: {
      profilePicture: "https://www.pngkey.com/png/detail/121-1219231_user-default-profile.png",
      firstName: "João",
      lastName: "Bernardes",
      telephone: "+55929999999999",
      birthday: "1986/08/23",
      vehiclePlate: "AAA0001",
      finishedRegister: true,
      health: [
        {
          id: 1,
          date: "2020/06/12 23:00:00",
          description: "Tomei água"
        },
        
        {
          id: 2,
          date: "2020/06/12 21:00:00",
          description: "Fiz exercícios"
        }
      ],
      trips: [
        {
          id: 1,
          start: "novo hamburgo rs",
          destination: "cidade baixa, porto alegre rs",
          timeTraveled: "112:37:52",
          name: "de novo hamburgo até cidade baixa",
          date: "2020/06/10"
        },
        {
          id: 2,
          start: "campo bom rs",
          destination: "florianopois sc",
          timeTraveled: "203:37:52",
          name: "de novo hamburgo até cidade baixa",
          date: "2020/06/10"
        }
      ]
    },
    map: {
      start: "são paulo sp",
      destination: "brasilia df",
      dateStart: "2020/06/13 22:27:00"
    },
    health: [
      {
        id: 1,
        date: "2020/06/12 23:00:00",
        description: "Fiz exercícios"
      },
      {
        id: 2,
        date: "2020/06/12 21:00:00",
        description: "Tomei água"
      }
    ],
    rankigs: {
      prize: "Corte de cabelo",
      points: 700,
      podium: [
        {
          name: "Tiago",
          points: 820,
          isUser: false
        },
        {
          name: "Manuela",
          points: 770,
          isUser: false
        },
        {
          name: "Robson",
          points: 710,
          isUser: false
        },
        {
          name: "João",
          points: 700,
          isUser: true
        },
        {
          name: "Iago",
          points: 690,
          isUser: false
        }
      ],
      position: 4
    }
  }
}

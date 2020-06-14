function getChallenge () {
  const challenges = [
    {
      description: 'Durma oito horas',
      points: 10,
      type: 'sleep'
    },
    {
      description: 'faça um descanso curto',
      points: 10,
      type: 'rest'
    },
    {
      description: 'Faça uma caminhada',
      points: 10,
      type: 'exercise'
    },
    {
      description: 'Beba um copo água',
      points: 10,
      type: 'drink_water'
    },
    {
      description: 'Meça seu peso',
      points: 10,
      type: 'weight'
    },
    {
      description: 'Meça sua pressão',
      points: 10,
      type: 'important_data'
    }
  ]

  return challenges[(Math.random() * challenges.length)]
}

export {
  getChallenge
}

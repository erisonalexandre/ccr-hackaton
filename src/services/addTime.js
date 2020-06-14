function addTimes (arr) {
  var times = [0, 0, 0]

  var hours = times[0]
  var minutes = times[1]
  var seconds = times[2]

  for (const time of arr) {
    const splited = (time || '').split(':')
    hours += isNaN(parseInt(splited[0])) ? 0 : parseInt(splited[0])
    minutes += isNaN(parseInt(splited[1])) ? 0 : parseInt(splited[1])
    seconds += isNaN(parseInt(splited[2])) ? 0 : parseInt(splited[2])
  }

  if (seconds >= 60) {
    var m = (seconds / 60) << 0
    minutes += m
    seconds -= 60 * m
  }

  if (minutes >= 60) {
    var h = (minutes / 60) << 0
    hours += h
    minutes -= 60 * h
  }

  return ('' + hours).padStart(2, '0') + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
}

export {
  addTimes
}

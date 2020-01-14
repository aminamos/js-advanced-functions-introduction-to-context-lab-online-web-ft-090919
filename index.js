function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arr) {
  let objarr = []
  for (let i=0;i<arr.length;i++) {
    objarr.push(createEmployeeRecord(arr[i]))
  }
  return objarr
}

function createTimeInEvent(obj,stamp) {
  let date = stamp.split(' ')[0]
  let time = stamp.split(' ')[1]
  let timeObj = {
    type: 'TimeIn',
    hour: parseInt(time),
    date: date
  }
  obj.timeInEvents.push(timeObj)
  return obj
}

function createTimeOutEvent(obj,stamp) {
  let date = stamp.split(' ')[0]
  let time = stamp.split(' ')[1]
  let timeObj = {
    type: 'TimeOut',
    hour: parseInt(time),
    date: date
  }
  obj.timeOutEvents.push(timeObj)
  return obj
}

function hoursWorkedOnDate(obj,d8) {
  let h1 = obj.timeInEvents.find(element => element.date == d8).hour / 100
  let h2 = obj.timeOutEvents.find(element => element.date == d8).hour / 100

  return (h2 - h1)
}

function wagesEarnedOnDate(obj,d8) {
  return hoursWorkedOnDate(obj,d8) * obj.payPerHour
}

function allWagesFor(obj) {

}

function findEmployeeByFirstName(arr,name) {
  return arr.find(function(e) {
    return e.firstName == name
  })
}

function calculatePayroll() {

}
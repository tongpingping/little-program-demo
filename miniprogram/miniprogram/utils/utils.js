function formatDate(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return {
    year,
    month,
    day
  }
}

module.exports = {
  formatDate: formatDate
}
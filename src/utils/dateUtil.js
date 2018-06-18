export const monthDiff = (start, end) => {
  const tempDate = new Date(start)
  var monthCount = 0
  while ((tempDate.getMonth() + '' + tempDate.getFullYear()) !== (end.getMonth() + '' + end.getFullYear())) {
    monthCount++
    tempDate.setMonth(tempDate.getMonth() + 1)
  }
  return monthCount + 1
}

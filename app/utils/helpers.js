export const truncate = (string, length) => {
  return string.length > length + 3 ? string.substring(0, length) + "..." : string
}

export const convert_to_sqrMeter = (number) => parseInt(number * 0.093)

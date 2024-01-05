export function truncate(str: string) {
  let maxLength = 72;

  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}

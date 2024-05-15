export default function split(string, { delimiter, index }) {
  return string.split(delimiter)[index || 0];
}

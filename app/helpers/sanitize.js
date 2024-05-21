import { htmlSafe } from '@ember/template';

export default function sanitize(input) {
  const sanitizedInput = input.trim();
  return htmlSafe(sanitizedInput);
}

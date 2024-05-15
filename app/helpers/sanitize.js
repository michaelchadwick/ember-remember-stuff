import { htmlSafe } from '@ember/template';

export default function sanitize(string) {
  return htmlSafe(string);
}

export const splitByFirstAnchorTag = (
  html: string,
): [string, string, string] => {
  const match = html.match(/<a\b[^>]*>(.*?)<\/a>/i);

  if (!match) return [html, "", ""];

  const start = match.index!;
  const end = start + match[0].length;

  return [html.slice(0, start), match[0], html.slice(end)];
};

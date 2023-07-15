export type Mods = Record<string, string | boolean | undefined>

export const classNames = (
  cls: string,
  mods: Mods = {},
  others: Array<string | undefined> = []
): string => [
  cls,
  ...others.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');

type Mods = Record<string, string | boolean> 

export const classNames = (cls: string, mods: Mods = {}, others: string[] = []): string => {
  return [
    cls,
    ...others,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, _]) => className)
  ].join(' ')
}
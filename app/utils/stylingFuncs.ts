export type ClassNameStrings = string[]
export function classNames(...classes: ClassNameStrings) {
  return classes.filter(Boolean).join(' ')
}
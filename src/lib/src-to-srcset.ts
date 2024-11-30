export function srcToSrcset(
  src: string,
  widths: number[],
  fileExtension?: string,
): string {
  const splited = src.split(".");
  const fileName = splited.pop();
  const pathName = splited.join(".");

  return widths
    .map(
      (width) => `${pathName}-${width}w.${fileExtension ?? fileName} ${width}w`,
    )
    .join(", ");
}

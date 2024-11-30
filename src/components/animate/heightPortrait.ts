export default function heightPortrait(height: number): string | null {
  const ranges = [
    { max: 1080, value: "1800px" },
    { max: 1117, value: "1800px" },
  ];

  for (const range of ranges) {
    if (height < range.max) {
      return range.value;
    }
  }

  return null;
}

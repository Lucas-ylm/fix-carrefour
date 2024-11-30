export default function heightText(height: number): string | null {
  const ranges = [
    { max: 500, value: "2500px" },
    { max: 650, value: "2500px" },
    { max: 750, value: "2500px" },
    { max: 832, value: "2500px" },
    { max: 900, value: "2500px" },
    { max: 982, value: "2500px" },
    { max: 1080, value: "2500px" },
    { max: 1117, value: "2500px" },
  ];

  for (const range of ranges) {
    if (height < range.max) {
      return range.value;
    }
  }

  return null;
}

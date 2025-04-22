export const generateMockGraphData = (days: number) => {
  const labels = Array.from({ length: days }, (_, i) => `${i + 1}.02`);
  const input = Array(days)
    .fill(0)
    .map(() => Math.floor(Math.random() * 5000));
  const output = Array(days)
    .fill(0)
    .map(() => Math.floor(Math.random() * 5000));
  return { labels, input, output };
};

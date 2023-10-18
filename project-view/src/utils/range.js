export default function range(size, start) {
  return Array(size)
    .fill(start)
    .map((x, y) => x + y);
}

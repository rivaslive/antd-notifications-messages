export default function generateUniqueId() {
  return `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
}

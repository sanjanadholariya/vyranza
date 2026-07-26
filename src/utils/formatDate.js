export function formatISTTimestamp(date = new Date()) {
  try {
    const d = new Date(date);
    const formatted = d.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    return `${formatted} IST`;
  } catch (e) {
    return new Date(date).toLocaleString();
  }
}

/**
 * Formats the given seconds into a time string in the format "MM:SS".
 *
 * @param {number} seconds - The number of seconds to format.
 * @return {string} The formatted time string.
 */
export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(remainingSeconds).padStart(2, '0')
  return `${formattedMinutes}:${formattedSeconds}`
}
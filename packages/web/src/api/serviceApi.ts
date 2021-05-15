type MoodLevel = { level: number };

export function sendMoodToServer(_: MoodLevel) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
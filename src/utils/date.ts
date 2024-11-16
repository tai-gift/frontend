export const calculateTimeRemaining = (endTime: bigint) => {
  // Convert current time to seconds since epoch
  const now = BigInt(Math.floor(Date.now() / 1000));

  // Calculate total seconds remaining
  const totalSecondsLeft = Number(endTime - now);

  // If time has passed, return all zeros
  if (totalSecondsLeft <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  // Calculate hours, minutes, seconds
  const hours = Math.floor(totalSecondsLeft / 3600);
  const minutes = Math.floor((totalSecondsLeft % 3600) / 60);
  const seconds = totalSecondsLeft % 60;

  return { hours, minutes, seconds };
};

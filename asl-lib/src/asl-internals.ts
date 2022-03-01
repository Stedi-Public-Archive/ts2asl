
export const internalWaitSeconds = async (seconds: number): Promise<void> => {
  return new Promise((resolve: Function) => {
    setTimeout(resolve, seconds * 1000);
  });
}




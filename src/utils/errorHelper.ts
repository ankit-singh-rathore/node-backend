export const isDuplicateEmailError = (error: unknown): boolean => {
  return (
    error instanceof Error &&
    /already exists/i.test(error.message)
  );
};

export const getErrorResponse = (
  error: unknown,
  defaultMessage = 'Internal server error'
) => {
  const message = error instanceof Error ? error.message : defaultMessage;
  const status = isDuplicateEmailError(error) ? 400 : 500;

  return { status, message };
};

export function handleApiError(response: Response) {
  if (!response.ok) {
    return response.json()
      .then(error => {
        throw new Error(error.error?.message || 'API request failed');
      })
      .catch(() => {
        throw new Error('Failed to parse error response');
      });
  }
  return response.json();
}
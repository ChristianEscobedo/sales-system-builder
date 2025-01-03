export async function parseApiResponse(response: Response) {
  try {
    const text = await response.text();
    return JSON.parse(text);
  } catch (error) {
    console.error("Failed to parse API response:", error);
    throw new Error("Invalid API response");
  }
}
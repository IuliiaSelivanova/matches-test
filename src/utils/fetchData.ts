export default async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    console.log(text);
    if (!response.ok) {
      if (response.status === 404) {
        console.warn("Ошибка 404: Данные не найдены");
        return null;
      }
      throw new Error(
        `Ошибка ${response.status}: ${response.statusText}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.log(
      "Ошибка: не удалось загрузить информацию",
      error,
    );
    return null;
  }
}

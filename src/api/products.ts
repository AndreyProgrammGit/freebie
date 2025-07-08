export const getProducts = async () => {
  try {
    const response = await fetch("/db.json");
    return await response.json();
  } catch (error) {
    return [];
  }
};

const client = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    let actualData = await response.json();
    return actualData;
  } catch (error) {
    throw new Error(`There was an error with fetching data: ${error.message}`);
  }
};

export default client;

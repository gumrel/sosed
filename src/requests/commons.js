// const address = "Москва, Арбат улица, дом 1";
// export const GEO_HTTPS_KOORD = `https://geocode-maps.yandex.ru/1.x/?apikey=c552cd40-8535-42a2-973b-76e4d47c57da&geocode=${encodeURIComponent(
//   address
// )}&format=json`;

export const request = async () => {
  try {
    const result = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.REACT_APP_GEO}&geocode=Москва,+Арбат+улица,+дом+1&format=json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await result.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

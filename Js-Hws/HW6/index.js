const findYouByIP = async () => {
  const ipAddress = (
    await (await fetch(`https://api.ipify.org/?format=json`)).json()
  ).ip;
  const physicalAddress = `http://ip-api.com/json/${ipAddress}`;
  const physicalAddressInfo = await (await fetch(physicalAddress)).json();
  const { countryCode, country, region, city, regionName } =
    physicalAddressInfo;
  document.querySelector("#root").innerHTML = `
    <h1>CountryCode: ${countryCode}</h1>
    <h2>Country: ${country}</h2>
    <h2>Region: ${region}</h2>
    <h2>City: ${city}</h2>
    <h2>RegionName: ${regionName}</h2>
  `;
};

document.querySelector("#find-ip").addEventListener("click", findYouByIP);

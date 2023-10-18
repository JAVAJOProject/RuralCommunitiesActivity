import { API_BASE_URL } from './api-config';

async function networkCall(api, method, requestBody) {
  let options = {
    headers: new Headers({
      // 'X-AUTH-TOKEN': token,
      'Content-Type': 'application/json',
      credentials: 'include',
    }),
    url: API_BASE_URL + api,
    method: method,
  };

  if (requestBody) {
    options.body = JSON.stringify(requestBody);
  }

  return fetch(options.url, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      console.log('http error');
      console.log(error);
    });
}

export async function fetchOneContentGET(api) {
  try {
    const data = await networkCall(api, 'GET', null);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDataGET(api) {
  try {
    const dataPromise = await networkCall(api, 'GET', null);
    const data = await Promise.all(dataPromise);
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchDataPOST(api, requestBody) {
  try {
    const dataPromise = await networkCall(api, 'POST', requestBody);
    const data = await networkCall(dataPromise);
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchDataETC(api, method, requestBody) {
  try {
    const dataPromise = await networkCall(api, method, requestBody);
    const data = await Promise.all(dataPromise);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function networkImgCall(api, method, requestBody) {
  let options = {
    headers: new Headers({
      // 'X-AUTH-TOKEN': token,
      // 'Content-Type': 'image/',
      credentials: 'include',
    }),
    url: API_BASE_URL + api,
    method: method,
  };

  if (requestBody) {
    options.body = JSON.stringify(requestBody);
  }

  return fetch(options.url, options)
    .then((response) => {
      if (response.ok) {
        return response.blob();
      } else {
        console.log(response.status);
      }
    })
    .then((data) => {
      const imgUrl = URL.createObjectURL(data);
      URL.revokeObjectURL(data);
      return imgUrl;
    })
    .catch((error) => {
      console.log('http error');
      console.log(error);
    });
}

export async function fetchImgGET(fullData, idName, api) {
  const dataPromise = fullData.map(async (data) => {
    const img = await networkImgCall(`${api}/${data[idName]}`, 'GET', null);
    return img;
  });
  const data = await Promise.all(dataPromise);
  return data;
}

async function networkPOSTImgCall(api, method, requestData, requestFiles) {
  const formData = new FormData();
  requestFiles.forEach((file) => formData.append('files', file));
  formData.append(
    'data',
    new Blob([JSON.stringify(requestData)], { type: 'application/json' })
  );

  let options = {
    headers: new Headers({
      // 'X-AUTH-TOKEN': token,
      'Content-Type': 'multipart/form-data',
      credentials: 'include',
    }),
    url: API_BASE_URL + api,
    method: method,
    body: formData,
  };

  return fetch(options.url, options)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
    })
    .catch((error) => {
      console.log('http error');
      console.log(error);
    });
}

export async function fetchDataAndImgPOST(api, requestData, requestFiles) {
  const dataPromise = await networkPOSTImgCall(
    api,
    'POST',
    requestData,
    requestFiles
  );
  const data = await Promise.all(dataPromise);
  return data;
}

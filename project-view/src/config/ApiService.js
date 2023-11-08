import { API_BASE_URL } from "./api-config";

async function networkCall(api, method, requestBody, isTextResult) {
  let options = {
    headers: new Headers({
      // 'X-AUTH-TOKEN': token,
      "Content-Type": "application/json",
      credentials: "include",
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
        return isTextResult ? response.text() : response.json();
      } else {
        return isTextResult ? response.text() : response.json();
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
    });
}

export async function fetchOneContentGET(api, isTextResult) {
  try {
    const data = await networkCall(api, "GET", null, isTextResult);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDataGET(api, isTextResult) {
  try {
    const dataPromise = await networkCall(api, "GET", null, isTextResult);
    const data = await Promise.all(dataPromise);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// post or so + obj
export async function fetchDataPOSTAndArr(api, requestBody, isTextResult) {
  try {
    const dataPromise = await networkCall(
      api,
      "POST",
      requestBody,
      isTextResult
    );
    const data = await Promise.all(dataPromise);
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchDataPOSTAndObj(api, requestBody, isTextResult) {
  try {
    const data = await networkCall(api, "POST", requestBody, isTextResult);
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchDataETCAndObj(
  api,
  method,
  requestBody,
  isTextResult
) {
  try {
    const data = await networkCall(api, method, requestBody, isTextResult);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// post or so + form
async function networkCallForm(api, method, formRef, isTextResult) {
  const formData = new FormData(formRef);
  const objData = {};
  formData.forEach((value, key) => {
    objData[key] = value;
  });
  const jsonData = JSON.stringify(objData);

  let options = {
    headers: new Headers({
      // 'X-AUTH-TOKEN': token,
      "Content-Type": "application/json",
      credentials: "include",
    }),
    url: API_BASE_URL + api,
    method: method,
    body: jsonData,
  };

  return fetch(options.url, options)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return isTextResult ? response.text() : response.json();
      } else {
        console.log(response.status);
        return isTextResult ? response.text() : response.json();
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
    });
}

export async function fetchFormPOSTAndArr(api, formRef, isTextResult) {
  try {
    const dataPromise = await networkCallForm(
      api,
      "POST",
      formRef.current,
      isTextResult
    );
    const data = await Promise.all(dataPromise);
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchFormPOSTAndObj(api, formRef, isTextResult) {
  try {
    const data = await networkCallForm(
      api,
      "POST",
      formRef.current,
      isTextResult
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function fetchFormETCAndObj(api, method, formRef, isTextResult) {
  try {
    const data = await networkCallForm(
      api,
      method,
      formRef.current,
      isTextResult
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

// image + get
async function networkImgCall(api, method, requestBody) {
  let options = {
    headers: new Headers({
      // 'X-AUTH-TOKEN': token,
      credentials: "include",
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
      console.log("http error");
      console.log(error);
    });
}

export async function fetchImgGET(fullData, idName, api) {
  const dataPromise = fullData.map(async (data) => {
    const img = await networkImgCall(`${api}/${data[idName]}`, "GET", null);
    return img;
  });
  const data = await Promise.all(dataPromise);
  return data;
}

// image + post + form
async function networkPOSTImgCall(api, method, formRef, isTextResult) {
  const formData = new FormData();

  const requestFiles = new FormData(formRef).getAll("files");
  requestFiles.forEach((file) => formData.append("files", file));

  const requestBody = new FormData(formRef);
  requestBody.delete("files");
  formData.append(
    "data",
    new Blob([JSON.stringify(Object.fromEntries(requestBody.entries()))], {
      type: "application/json",
    })
  );

  let options = {
    headers: new Headers({
      // 'X-AUTH-TOKEN': token,
      credentials: "include",
    }),
    url: API_BASE_URL + api,
    method: method,
    body: formData,
  };

  return fetch(options.url, options)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return isTextResult ? response.text() : response.json();
      } else {
        console.log(response.status);
        return isTextResult ? response.text() : response.json();
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
    });
}

export async function fetchDataAndImgPOST(api, formRef, isTextResult) {
  const data = await networkPOSTImgCall(
    api,
    "POST",
    formRef.current,
    isTextResult
  );
  return data;
}

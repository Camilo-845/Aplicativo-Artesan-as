const backendURL: string = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/";

export interface Artesania {
  idArtesania: number;
  nombre: string;
  imagen: string;
  descripcion: string;
}

async function fetchData<T>(url: string, options?: RequestInit): Promise<T | { error: string }> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      return { error: `Error ${res.status}: ${(await res.json()).result}` };
    }
    return await res.json();
  } catch (err) {
    return { error: `Fetch failed: ${err}` };
  }
}

export async function getArtesanias(page = 1, limit = 20): Promise<Artesania[] | { error: string }> {
  return fetchData<Artesania[]>(`${backendURL}artesania/get?page=${page}&limit=${limit}`);
}

export async function getOneArtesania(idArtesia: number): Promise<Artesania | { error: string }> {
  return fetchData<Artesania>(`${backendURL}artesania/get/${idArtesia}`);
}

export async function updateOneArtesania(params: Artesania): Promise<Artesania | { error: string }> {
  return fetchData<Artesania>(`${backendURL}artesania/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
}

export async function deleteOneArtesania(params: Artesania): Promise<{ idArtesania?: number; error?: string }> {
  return fetchData<{ idArtesania: number }>(`${backendURL}artesania/delete/${params.idArtesania}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
}

export async function addOneArtesania(params: Artesania): Promise<{ idArtesania?: number; error?: string }> {
  return fetchData<{ idArtesania: number }>(`${backendURL}artesania/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
}

export async function getCountAllRows(): Promise<{rows:number} | { error: string }> {
  return fetchData<{rows:number}>(`${backendURL}artesania/rows`);
}

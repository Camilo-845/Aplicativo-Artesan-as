/**
 * Verifica si una cadena es una URL válida.
 * @param url - La cadena de texto a verificar.
 * @returns `true` si la cadena es una URL válida, `false` en caso contrario.
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url); // Intenta crear un objeto URL
    return true; // Es una URL válida
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return false; // No es una URL válida
  }
}

/**
 * Verifica si una URL es relativa y empieza con una barra diagonal "/".
 * @param url - La cadena de texto a verificar.
 * @returns `true` si la URL es relativa válida, `false` en caso contrario.
 */
export function isValidRelativeUrl(url: string): boolean {
  return url.startsWith("/"); // Verifica que empiece con "/"
}

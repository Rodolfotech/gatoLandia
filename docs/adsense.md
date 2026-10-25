# Integrar Google AdSense

Estado: el código está preparado. Falta solo configurar las variables de entorno cuando tengas la cuenta.

## 1. Variables de entorno

Define estas variables en Vercel (Settings → Environment Variables) y en `.env.local` para probar en local:

| Variable | Qué es | Ejemplo |
|---|---|---|
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | ID de editor de AdSense | `ca-pub-1234567890123456` |
| `NEXT_PUBLIC_ADSENSE_SLOT_ARTICULO` | ID del bloque de anuncio para artículos | `1234567890` |

Sin ellas no se muestra ningún anuncio, ni se genera `ads.txt`.

## 2. Qué ya hace el código

- **Script de AdSense en todas las páginas.** Es necesario para que Google verifique el sitio.
- **Anuncios solo tras aceptar las cookies.** Los espacios (`AdSlot`) no se renderizan sin consentimiento.
- **`/ads.txt`** se genera desde `NEXT_PUBLIC_ADSENSE_CLIENT_ID`.
- **Ubicación inicial:** dentro de los temas, después de la segunda sección (`Topicontent.tsx`).

## 3. Añadir más ubicaciones

1. Crea el bloque en AdSense y copia su ID.
2. Añade la variable en `app/lib/adSlots.ts` y en Vercel.
3. Coloca `<AdSlot slot={AD_SLOTS.nuevo} />` donde quieras mostrarlo.

## 4. Antes de activar anuncios

- Confirma que la política de privacidad tiene el titular y el plazo de conservación.
- Si llega tráfico desde la Unión Europea, añade un mensaje de consentimiento certificado (CMP).
- No pongas anuncios en la página de emergencia ni junto al contenido de urgencia.

## 5. Cómo se respeta el consentimiento

- Al cargar la página, `layout.tsx` define `pauseAdRequests = 1`. Google carga su script, pero no pide anuncios.
- Al aceptar cookies, `consentStore.ts` pone la pausa en 0 y los espacios (`AdSlot`) aparecen.
- Al rechazar, la pausa sigue activa: no se piden anuncios.
- Las pruebas de este flujo se hicieron con IDs de prueba: antes de aceptar no hubo ninguna petición de anuncios.

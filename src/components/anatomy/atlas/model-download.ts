/**
 * Downloads and decodes model chunks (.bin or .bin.gz).
 */
export async function decodeModelResponse(
  response: Response,
  expectedBytes: number,
  compressed: boolean
): Promise<ArrayBuffer> {
  if (!response.ok) {
    throw new Error(`Gagal mengunduh data anatomi (${response.status})`);
  }
  const payload = await response.arrayBuffer();
  const signature = new Uint8Array(payload, 0, Math.min(2, payload.byteLength));
  const isGzip = compressed && signature[0] === 0x1f && signature[1] === 0x8b;

  let buffer: ArrayBuffer;
  if (isGzip && typeof DecompressionStream !== 'undefined') {
    buffer = await new Response(
      new Blob([payload]).stream().pipeThrough(new DecompressionStream('gzip'))
    ).arrayBuffer();
  } else {
    buffer = payload;
  }

  if (buffer.byteLength !== expectedBytes) {
    throw new Error('Data anatomi terpotong atau belum selesai diunduh. Silakan coba lagi.');
  }
  return buffer;
}

export function stringToSlug(input: string): string {
  return input
    .toLowerCase() // Mengubah ke huruf kecil
    .trim() // Menghapus spasi di awal dan akhir
    .replace(/[^\w\s-]/g, "") // Menghapus karakter non-alfanumerik kecuali spasi dan tanda hubung
    .replace(/\s+/g, "-"); // Mengganti spasi dengan tanda hubung
}

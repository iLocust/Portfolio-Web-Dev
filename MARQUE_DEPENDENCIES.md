# MarqueeAnimation Dependencies

Untuk mengimplementasikan komponen MarqueeAnimation, Anda perlu menginstal dua dependensi tambahan:

```bash
npm install framer-motion @motionone/utils
```

## Dependensi yang Dibutuhkan:

1. **framer-motion** - Library animasi untuk React yang digunakan untuk efek animasi teks bergerak
2. **@motionone/utils** - Utilitas tambahan yang digunakan untuk fungsi 'wrap' dalam komponen MarqueeAnimation

## Struktur File yang Ditambahkan:

1. `/src/lib/utils.js` - Utilitas dasar termasuk fungsi 'cn' untuk menggabungkan class names
2. `/src/components/ui/marquee-animation.jsx` - Komponen animasi marquee
3. `/src/components/SkillsMarquee.jsx` - Komponen yang menggunakan MarqueeAnimation untuk menampilkan skill

## Integrasi ke Aplikasi:

Komponen SkillsMarquee telah ditambahkan ke App.js di antara Experience dan Projects untuk menampilkan skills teknologi yang Anda miliki.

## Catatan:

- Komponen ini responsive dan akan menyesuaikan dengan ukuran layar
- Kecepatan scrolling dapat diatur melalui prop `baseVelocity`
- Arah scrolling dapat diubah antara "left" dan "right"
- Warna dan gaya dapat disesuaikan melalui prop `className`
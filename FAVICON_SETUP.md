# Favicon ve Meta Tag Kurulum Rehberi

## Hızlı Kurulum (Önerilen)

Next.js App Router için en kolay yöntem:

1. **Logo dosyasını icon.png olarak kopyalayın:**
   ```bash
   # /public/logos/1337 (6).png dosyasını /app/icon.png olarak kopyalayın
   ```
   Next.js otomatik olarak `app/icon.png` dosyasını favicon olarak kullanacaktır.

2. **Alternatif: favicon.ico oluşturun:**
   - Logo dosyanızdan 32x32 veya 16x16 boyutunda bir favicon.ico oluşturun
   - `/public/favicon.ico` olarak kaydedin

## Gerekli Favicon Dosyaları (Opsiyonel - Daha İyi Uyumluluk İçin)

Aşağıdaki favicon dosyalarını `/public` klasörüne eklemeniz gerekmektedir. Bu dosyaları logo dosyanızdan (`/logos/1337 (6).png`) oluşturabilirsiniz.

### Gerekli Dosyalar:

1. **favicon-16x16.png** - 16x16 piksel
2. **favicon-32x32.png** - 32x32 piksel
3. **favicon-96x96.png** - 96x96 piksel
4. **apple-touch-icon.png** - 180x180 piksel (iOS için)
5. **android-chrome-192x192.png** - 192x192 piksel (Android için)
6. **android-chrome-512x512.png** - 512x512 piksel (Android için)
7. **safari-pinned-tab.svg** - SVG formatında (Safari için)
8. **favicon.ico** - 32x32 piksel (klasik favicon)

### Favicon Oluşturma Araçları:

- **Online Tools:**
  - https://realfavicongenerator.net/
  - https://www.favicon-generator.org/
  - https://favicon.io/

- **Manuel Oluşturma:**
  Logo dosyanızı yukarıdaki boyutlara göre resize edip PNG formatında kaydedin.

### Dosya Yapısı:

```
/public
  ├── favicon.ico
  ├── favicon-16x16.png
  ├── favicon-32x32.png
  ├── favicon-96x96.png
  ├── apple-touch-icon.png
  ├── android-chrome-192x192.png
  ├── android-chrome-512x512.png
  ├── safari-pinned-tab.svg
  └── site.webmanifest
```

### Open Graph Image:

Open Graph görseli (`og-image.jpg`) için `/public` klasörüne 1200x630 piksel boyutunda bir görsel ekleyin. Bu görsel sosyal medyada paylaşım yapıldığında görünecektir.

**Not:** Tüm favicon dosyaları eklendikten sonra site otomatik olarak bunları kullanacaktır. Layout.tsx ve site.webmanifest dosyaları zaten yapılandırılmıştır.



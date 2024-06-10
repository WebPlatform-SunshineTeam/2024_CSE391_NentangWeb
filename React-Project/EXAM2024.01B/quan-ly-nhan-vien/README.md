```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx tailwindcss init --full
```

- Dán 3 dòng này vào đầu file **index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Chạy dự án
```bash
npm run start
```
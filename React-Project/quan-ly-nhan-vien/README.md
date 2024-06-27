# Tải các thư viện về trước khi chạy
## Demo: 
![alt text](image.png)

- Paste vào cmd:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init --full
npm i validator
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
npm install node-fetch
```

- Dán 3 dòng này vào đầu file **index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Thay thế dòng **content** trong file **tailwind.config.js** bằng:
```js
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
```

## Chạy dự án
```bash
npm run start
```
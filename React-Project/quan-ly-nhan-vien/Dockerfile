# Sử dụng base image nhẹ chứa Node.js
FROM node:16-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install --production

# Sao chép các file và thư mục còn lại vào thư mục làm việc
COPY . .

# Build ứng dụng React
RUN npm run build

# Chỉ sao chép thư mục build vào image cuối cùng
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose cổng mà ứng dụng sẽ chạy trên
EXPOSE 80

# Khởi chạy nginx
CMD ["nginx", "-g", "daemon off;"]

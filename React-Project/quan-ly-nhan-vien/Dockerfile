# Sử dụng một base image chứa Node.js
FROM node:latest

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép các file và thư mục còn lại vào thư mục làm việc
COPY . .

# Build ứng dụng React
RUN npm run build

# Expose cổng mà ứng dụng sẽ chạy trên (nếu cần thiết)
EXPOSE 3000

# Khởi chạy ứng dụng khi container được khởi động
CMD ["npm", "start"]

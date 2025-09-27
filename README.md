
# 📩 Chat Application - Microservices Architecture

Ứng dụng chat thời gian thực được xây dựng theo kiến trúc **Microservices** với **NestJS**, giao tiếp bằng **gRPC**, **RabbitMQ** làm message broker và **Next.js** cho giao diện người dùng.  
Dự án được triển khai bằng **Docker Compose** và hỗ trợ **CI/CD** với GitHub Actions.  

---

## 🚀 Công nghệ sử dụng

- **Backend**
  - [NestJS](https://nestjs.com/) - Framework Node.js mạnh mẽ
  - [gRPC](https://grpc.io/) - Giao tiếp giữa các microservice với tốc độ cao
  - [RabbitMQ](https://www.rabbitmq.com/) - Message broker dùng cho event-driven
  - [MongoDB / MySQL] - Lưu trữ dữ liệu (cấu hình linh hoạt)
  
- **Frontend**
  - [Next.js](https://nextjs.org/) - React framework hỗ trợ SSR & CSR
  - [TypeScript](https://www.typescriptlang.org/)
  - [Socket.IO / gRPC-web] - Kết nối thời gian thực với backend

- **Hạ tầng**
  - Docker + Docker Compose
  - Nginx (reverse proxy) 
  - GitHub Actions (CI/CD)

---

## 🏗️ Kiến trúc hệ thống
<img width="981" height="953" alt="Untitled Diagram drawio" src="https://github.com/user-attachments/assets/e63db25a-8cfb-45da-aa33-d72aeec2ff3b" />


- **Auth Service**: Đăng ký, đăng nhập, xác thực JWT, refresh token  
- **User Service**: Quản lý hồ sơ, danh bạ, trạng thái online/offline  
- **Room Service**: Quản lý nhóm chat  
- **Chat Service**: Quản lý tin nhắn, xử lý sự kiện thời gian thực  
- **RabbitMQ**: Đồng bộ dữ liệu và phát sự kiện giữa các service  

---

## ⚙️ Cài đặt & chạy dự án

### 1. Clone repo
```bash
git clone https://github.com/your-username/chat-app-microservice.git
cd chat-app-microservice
docker-compose up --build





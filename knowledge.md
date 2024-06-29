Metadata là những thông tin của trang web, thường là để tối ưu cho việc SEO
Title là tiêu đề của trang web

Hướng dẫn
Import: import {Manrope} from "next/font/google"
Khai báo: const manrope = Manrope({
    subsets: ['latin']
})

subsets: kiểu chữ, thông thường là Latin

#Routing
-Segment dynamic: [name] -> [course] : http://localhost:3000/1212/lesson (params)
-Nested segemnt: http://localhost:3000/hello/world/page.tsx
hello: segement 1
world: segment 2
-Group: Nó sẽ không tạo ra routing, ví dụ: (dahboard) -> sẽ ko tạo ra /dashboard.
Truy cập sẽ ra 404
Mục đích: gom các routing liên quan vào chung

- Cath all segment: sign-in/[...sign-in] -> nếu ko tạo folder sign-in sẽ bị dính đè: chấp nhận /a/b/c -> nếu ko có /a/b/c sẽ 404
- Optional Catch all segment: sign-in/[[...sign-in]]: ko bắt buộc p có /a/b/c-> vẫn show trang page
-lưu ý khi để 2 thư mục dynamic cùng cấp sẽ lỗi

#Params
-Params: thông thường là dynamic routes: [item]/lesson
-Search Params: những query trên URL, vdu: lesson?slug=1. Thì slug chính là searchParams

#layout


#Image: next/image
Image yêu cầu có 3 thuộc tính alt, width, height
**: cái gì cũng được
Nếu sử dụng thược tính fill thì ko cần width, height vẫn hoạt động. Tuy nhiên thẻ img trở thành absolute, cho nên cần 1 phần tử chứa nó sử dụng position:relative or absolute tuỳe vào mục đích code
Khi sử dụng src từ bên ngoài vào thì phải thiết lâp trong next.config.mjs
priority: muốn load thằng này trước
Tối ưu lên production load image nhanh thì next khuyền khích sharp. Chỉ chạy production thôi
 images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
export default {
    info: {
        title: 'app', // 页面title
        version: "0.1.001",  // 软件版本号
        company: {
            name: "公司名称", // 公司名称
            url: "www.localhost.com:8080", // 公司网址
        },
        phone: "010-00000000",   // 服务电话
    },
    tab_page: {
        icon: "", // 标签页ICO
        name: "" // 标签页名称
    },
    login: {
        image: "",    // 登录页图片
        name: "",  // 登录页软件名称
        logo: "./static/images/login-logo.jpg", // 登录页logo
        timeout: 300 // 登出超时时间
    },
    logoPath: "./static/images/logo.jpg",
    style: {
        classic: {
            logo: "./static/images/login-logo.jpg",    // 蓝色风格logo
            mobile_logo: "./static/images/small-logo.jpg"
        },
        business: {
            logo: "./static/images/login-logo.jpg",    // 商务风格logo
            small_logo: "./static/images/small-logo.jpg",
            mobile_logo: "./static/images/small-logo.jpg"
        },
        simplicity: {
            logo: "./static/images/login-logo.jpg",   // 平板风格logo
            mobile_logo: "./static/images/small-logo.jpg"
        }
    },
}
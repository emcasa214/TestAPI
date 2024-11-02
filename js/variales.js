// Params quản lý state
export let params = {
    carId: "",           // ID dòng xe đang chọn
    versionId: "",       // ID phiên bản đang chọn
    bankId: "",          // ID ngân hàng đang chọn
    search: "",          // Từ khóa tìm kiếm
    page: 1,             // Trang hiện tại
    limit: 10           // Số item mỗi trang
};

// DOM Elements
export const carTable = document.querySelector('#carTable');
export const versionTable = document.querySelector('#versionTable');
export const bankTable = document.querySelector('#bankTable');
export const searchInput = document.querySelector('#searchInput');
export const searchButton = document.querySelector('#searchButton');
export const pagination = {
    prev: document.querySelector('#paginationPrev'),
    next: document.querySelector('#paginationNext'),
    current: document.querySelector('#paginationCurrent')
};
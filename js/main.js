import { renderCarTable, renderVersionTable, renderBankTable } from './renderTables.js';
import { searchInput, searchButton, pagination, params } from './variables.js';

// Khởi tạo ứng dụng
const initApp = () => {
    // Render các bảng lần đầu
    renderCarTable();
    renderBankTable();

    // Xử lý tìm kiếm
    searchButton.addEventListener('click', () => {
        params.search = searchInput.value;
        params.page = 1;
        renderCarTable();
    });

    // Xử lý phân trang
    pagination.prev.addEventListener('click', () => {
        if (params.page > 1) {
            params.page--;
            pagination.current.textContent = params.page;
            renderCarTable();
        }
    });

    pagination.next.addEventListener('click', () => {
        params.page++;
        pagination.current.textContent = params.page;
        renderCarTable();
    });
};

// Xử lý xem phiên bản xe
window.showVersions = (carId) => {
    params.carId = carId;
    renderVersionTable(carId);
};

// Xử lý xem chi tiết phiên bản
window.showSpecs = async (versionId) => {
    params.versionId = versionId;
    // Thêm logic hiển thị modal chi tiết ở đây
};

// Khởi chạy ứng dụng
initApp();
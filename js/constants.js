export const API_BASE = 'http://34.199.134.219/';

export const API_URLS = {
    CAR_LIST: `${API_BASE}/backend/car`,           // Lấy danh sách dòng xe
    CAR_DETAIL: `${API_BASE}/backend/car/id`,        // Lấy chi tiết dòng xe (thêm id vào sau)
    VERSION_LIST: `${API_BASE}/backend/carver`,     // Lấy danh sách phiên bản
    VERSION_DETAIL: `${API_BASE}/backend/carver/id`,  // Lấy chi tiết phiên bản (thêm id vào sau)
    BANK_LIST: `${API_BASE}/backend/rate`,          // Lấy danh sách ngân hàng
    BANK_DETAIL: `${API_BASE}/backend/rate/id`,       // Lấy chi tiết ngân hàng (thêm id vào sau)
    CAR_VERSIONS: `${API_BASE}/backend/carname/carvername` // Lấy danh sách phiên bản theo dòng xe
};
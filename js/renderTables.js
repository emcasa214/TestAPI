import { fetchApi } from './fetchApi.js';
import { API_URLS } from './constants.js';
import { carTable, versionTable, bankTable, params } from './variables.js';

// Render bảng dòng xe
export const renderCarTable = async () => {
    try {
        const cars = await fetchApi(API_URLS.CAR_LIST);
        const html = `
            <table class="min-w-full">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-6 py-3 text-left">ID</th>
                        <th class="px-6 py-3 text-left">Tên dòng xe</th>
                        <th class="px-6 py-3 text-left">Hãng xe</th>
                        <th class="px-6 py-3 text-left">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    ${cars.map(car => `
                        <tr class="border-b">
                            <td class="px-6 py-4">${car.id}</td>
                            <td class="px-6 py-4">${car.name}</td>
                            <td class="px-6 py-4">${car.manufacturer}</td>
                            <td class="px-6 py-4">
                                <button 
                                    class="bg-blue-500 text-white px-4 py-2 rounded"
                                    onclick="showVersions('${car.id}')"
                                >
                                    Xem phiên bản
                                </button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        carTable.innerHTML = html;
    } catch (error) {
        carTable.innerHTML = '<p class="text-red-500">Có lỗi xảy ra khi tải dữ liệu</p>';
    }
};

// Render bảng phiên bản xe
export const renderVersionTable = async (carId) => {
    try {
        const versions = await fetchApi(`${API_URLS.CAR_VERSIONS}?carId=${carId}`);
        const html = `
            <table class="min-w-full">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-6 py-3 text-left">ID</th>
                        <th class="px-6 py-3 text-left">Tên phiên bản</th>
                        <th class="px-6 py-3 text-left">Giá</th>
                        <th class="px-6 py-3 text-left">Thông số</th>
                    </tr>
                </thead>
                <tbody>
                    ${versions.map(version => `
                        <tr class="border-b">
                            <td class="px-6 py-4">${version.id}</td>
                            <td class="px-6 py-4">${version.name}</td>
                            <td class="px-6 py-4">${version.price.toLocaleString()} VNĐ</td>
                            <td class="px-6 py-4">
                                <button 
                                    class="bg-green-500 text-white px-4 py-2 rounded"
                                    onclick="showSpecs('${version.id}')"
                                >
                                    Chi tiết
                                </button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        versionTable.innerHTML = html;
    } catch (error) {
        versionTable.innerHTML = '<p class="text-red-500">Có lỗi xảy ra khi tải dữ liệu</p>';
    }
};

// Render bảng ngân hàng
export const renderBankTable = async () => {
    try {
        const banks = await fetchApi(API_URLS.BANK_LIST);
        const html = `
            <table class="min-w-full">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-6 py-3 text-left">ID</th>
                        <th class="px-6 py-3 text-left">Tên ngân hàng</th>
                        <th class="px-6 py-3 text-left">Lãi suất</th>
                        <th class="px-6 py-3 text-left">Thời hạn</th>
                    </tr>
                </thead>
                <tbody>
                    ${banks.map(bank => `
                        <tr class="border-b">
                            <td class="px-6 py-4">${bank.id}</td>
                            <td class="px-6 py-4">${bank.name}</td>
                            <td class="px-6 py-4">${bank.interestRate}%</td>
                            <td class="px-6 py-4">${bank.term} tháng</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        bankTable.innerHTML = html;
    } catch (error) {
        bankTable.innerHTML = '<p class="text-red-500">Có lỗi xảy ra khi tải dữ liệu</p>';
    }
};
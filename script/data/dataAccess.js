import { read, utils } from "../../lib/xlsx.mjs";


async function readExcelFile(filePath) {
	// Read the file
	const response = await fetch(filePath);
	const bufferData = await response.arrayBuffer();
	const workbook = read(bufferData);

	// Initialize an object to hold data from all sheets
	const excelData = {};

	// Iterate over each sheet name
	workbook.SheetNames.forEach(sheetName => {
		// Get the worksheet
		const worksheet = workbook.Sheets[sheetName];

		// Convert the worksheet to JSON
		const data = utils.sheet_to_json(worksheet);

		// Store the data in the allData object with the sheet name as the key
		excelData[sheetName] = data;
	});
	transformData(excelData);
}

function transformData(excelData) {
	const khieuNai = excelData["Khiếu nại"];
	const phapLenhQLTT = excelData["Pháp lệnh QLTT"];
	const phongChongThamNhung = excelData["Phòng chống tham nhũng"];
	const phanToChuc = excelData["Phần tổ chức"];
	const thanhTra = excelData["Thanh tra"];
	const thongTuLienQuan = excelData["Thông tư liên quan"];
	const tiepCongDan = excelData["Tiếp công dân"];
	const toCao = excelData["Tố cáo"];
	const xuLyVPHC = excelData["Xử lý VPHC"];
	data = {
		tccb: phanToChuc,
		tckntcd: [...toCao, ...khieuNai, ...tiepCongDan],
		ttpctn: [...thanhTra, ...phongChongThamNhung],
		plttlq: [...phapLenhQLTT, ...thongTuLienQuan],
		xlvphc: xuLyVPHC,
	}
	console.log(data);
}

readExcelFile("../../resources/MCQ_LanhDao.xlsx")

// async function getLanhdaoData() {
// 	const res = await fetch("./resources/lanhdao.json");
// 	return await res.json();
// }

// async function getDoiData() {
// 	const res = await fetch("./resources/doi.json");
// 	return await res.json();
// }
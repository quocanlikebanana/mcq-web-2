async function getData() {
	const response = await fetch("./resources/MCQ_LanhDao.json");
	const raw = await response.json();

	const khieuNai = raw["Khiếu nại"];
	const phapLenhQLTT = raw["Pháp lệnh QLTT"];
	const phongChongThamNhung = raw["Phòng chống tham nhũng"];
	const phanToChuc = raw["Phần tổ chức"];
	const thanhTra = raw["Thanh tra"];
	const thongTuLienQuan = raw["Thông tư liên quan"];
	const tiepCongDan = raw["Tiếp công dân"];
	const toCao = raw["Tố cáo"];
	const xuLyVPHC = raw["Xử lý VPHC"];
	data = {
		tccb: phanToChuc,
		tckntcd: [...toCao, ...khieuNai, ...tiepCongDan],
		ttpctn: [...thanhTra, ...phongChongThamNhung],
		plttlq: [...phapLenhQLTT, ...thongTuLienQuan],
		xlvphc: xuLyVPHC,
	}
	console.log(data);
}

// async function getLanhdaoData() {
// 	const res = await fetch("./resources/lanhdao.json");
// 	return await res.json();
// }

// async function getDoiData() {
// 	const res = await fetch("./resources/doi.json");
// 	return await res.json();
// }
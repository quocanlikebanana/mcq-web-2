lanhdaoMode_btn.addEventListener("click", () => {
	mode = Mode.LanhDao;
	titleText = "Phần Lãnh Đạo";
	Mode_To_Setting();
});

doiMode_btn.addEventListener("click", () => {
	mode = Mode.Doi;
	titleText = "Phần Công Chức Đội";
	Mode_To_Setting();
})

async function Mode_To_Setting() {
	mode_div.classList.add("hide");
	setting_div.classList.remove("hide");
	mainTitle_div.textContent = titleText;
	await retrieveData();
	loadSettingNvg();
}

async function retrieveData() {
	await getData();

	// if (mode == Mode.LanhDao) {
	// 	data = await getData();

	// } else if (mode == Mode.Doi) {
	// 	data = await getDoiData();
	// }
}

function loadSettingNvg() {
	tccb_lns.setAttribute("MaxValue", data.tccb.length);
	tckntcd_lns.setAttribute("MaxValue", data.tckntcd.length);
	ttpctn_lns.setAttribute("MaxValue", data.ttpctn.length);
	plttlq_lns.setAttribute("MaxValue", data.plttlq.length);
	xlvphc_lns.setAttribute("MaxValue", data.xlvphc.length);
	let preSetting = myLocalStorage.getRecord_DefaultSetting();
	if (preSetting) {
		tccb_lns.setAttribute("DefaultValue", preSetting.socau.tccb);
		tckntcd_lns.setAttribute("DefaultValue", preSetting.socau.tckntcd);
		ttpctn_lns.setAttribute("DefaultValue", preSetting.socau.ttpctn);
		plttlq_lns.setAttribute("DefaultValue", preSetting.socau.plttlq);
		xlvphc_lns.setAttribute("DefaultValue", preSetting.socau.xlvphc);
		thoigian_ns.setAttribute("value", preSetting.thoigian);
	}
}
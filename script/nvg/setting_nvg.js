quaylai_btn.addEventListener("click", () => {
	Setting_To_Mode();
});

tieptheo_btn.addEventListener("click", () => {
	if (data == null) {
		alert("Không có dữ liệu câu hỏi");
		return;
	}
	const setting = {
		socau: {
			tccb: Number(tccb_lns.children[0].children[1].value),
			tckntcd: Number(tckntcd_lns.children[0].children[1].value),
			ttpctn: Number(ttpctn_lns.children[0].children[1].value),
			plttlq: Number(plttlq_lns.children[0].children[1].value),
			xlvphc: Number(xlvphc_lns.children[0].children[1].value),
		},
		thoigian: Number(thoigian_ns.value),
	}
	myLocalStorage.setRecord_DefaultSetting(setting);
	myTimer.start(setting.thoigian, disableQuestions);
	loadQuestionNvg(data, setting);
	Setting_To_Question();
});

function Setting_To_Mode() {
	mode_div.classList.remove("hide");
	setting_div.classList.add("hide");
	mainTitle_div.textContent = "Câu Hỏi Trắc Nghiệm";
}

function Setting_To_Question() {
	setting_div.classList.add("hide");
	question_div.classList.remove("hide");
	questionFooter_div.classList.remove("hide");
	timer_div.classList.remove("hide");
}

function loadQuestionNvg(data, setting) {
	const combined = [
		...pickAndShuffle(data.tccb, setting.socau.tccb),
		...pickAndShuffle(data.tckntcd, setting.socau.tckntcd),
		...pickAndShuffle(data.ttpctn, setting.socau.ttpctn),
		...pickAndShuffle(data.plttlq, setting.socau.plttlq),
		...pickAndShuffle(data.xlvphc, setting.socau.xlvphc),
	];
	console.log([...pickAndShuffle(data.tccb, setting.socau.tccb)]);
	console.log(combined);
	shuffleArray(combined);
	loadQuestions(combined);
}
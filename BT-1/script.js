    // Logic tính toán giữ nguyên
        function tinhTongBai1(n) {
            let s = 0;
            for (let i = 1; i <= n; i++) {
                s += i * i;
            }
            return s;
        }

        function tinhTongBai2(n) {
            let s = 0;
            for (let i = 0; i <= n; i++) {
                s += (2 * i + 1);
            }
            return s;
        }

        function thucHienTinh(baiSo) {
            let nInput = document.getElementById("inputN").value;
            let ketQuaDiv = document.getElementById("ketQua");

            // Xóa hiệu ứng con trỏ nhấp nháy cũ
            let outputHTML = "";

            if (nInput === "") {
                outputHTML = `<span class="console-prefix">~</span><span class="error-text">Error: Tham số N chưa được khởi tạo!</span>`;
            } else {
                let n = parseInt(nInput);
                if (n < 0) {
                    outputHTML = `<span class="console-prefix">~</span><span class="error-text">Exception: N phải là số nguyên dương (N >= 0)!</span>`;
                } else {
                    let ketQua = 0;
                    if (baiSo === 1) {
                        ketQua = tinhTongBai1(n);
                        outputHTML = `
                            <span class="console-prefix">~</span>Đang tính: 1 + 4 + ... + ${n}²<br>
                            <span class="console-prefix">~</span>Kết quả trả về: <span class="success-text">S = ${ketQua}</span>
                        `;
                    } else if (baiSo === 2) {
                        ketQua = tinhTongBai2(n);
                        outputHTML = `
                            <span class="console-prefix">~</span>Đang tính: 1 + 3 + ... + (2*${n}+1)<br>
                            <span class="console-prefix">~</span>Kết quả trả về: <span class="success-text">S = ${ketQua}</span>
                        `;
                    }
                }
            }

            // Gắn lại con trỏ nhấp nháy ở cuối dòng output
            ketQuaDiv.innerHTML = outputHTML + `<span class="blink-cursor"></span>`;
        }
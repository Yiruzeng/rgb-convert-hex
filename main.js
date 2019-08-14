(function () {

  // -------------------- Declare Variables ----------------------
  const body = document.body
  const red = document.querySelector('#red')
  const green = document.querySelector('#green')
  const blue = document.querySelector('#blue')
  const r_output = document.querySelector('#r_output')
  const g_output = document.querySelector('#g_output')
  const b_output = document.querySelector('#b_output')
  const hex_out = document.querySelector('#hex-output')

  // -------------------- functions----------------------

  function rgbToHex() {
    let r_hex = parseInt(red.value, 10).toString(16)
    let g_hex = parseInt(green.value, 10).toString(16)
    let b_hex = parseInt(blue.value, 10).toString(16)
    const hex = "#" + check(r_hex) + check(g_hex) + check(b_hex)
    body.style.backgroundColor = hex
    hex_out.innerText = hex
  }

  // 如果數值是個位數前補0
  function check(num) {
    return (num.length < 2) ? "0" + num : num
  }

  // -------------------- EventListener ----------------------
  // change事件取得slider數值
  red.addEventListener('change', function () {
    rgbToHex();
    r_output.value = red.value;
  }, false)

  // input事件同時顯示slider數值
  red.addEventListener('input', function () {
    rgbToHex();
    r_output.value = red.value;
  }, false)

  green.addEventListener('change', function () {
    rgbToHex();
    g_output.value = green.value;
  }, false)

  green.addEventListener('input', function () {
    rgbToHex();
    g_output.value = green.value;
  }, false)

  blue.addEventListener('change', function () {
    rgbToHex();
    b_output.value = blue.value;
  }, false)

  blue.addEventListener('input', function () {
    rgbToHex();
    b_output.value = blue.value;
  }, false)

})()
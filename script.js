function meetTime() {
  const timeH = $("#timeH").val();
  const timeM = $("#timeM").val();
  const startH = $("#startH").val();
  const startM = $("#startM").val();
  const meetTime = startH + ":" + startM;

  let meetH = Number(startH) + Number(timeH);
  let meetM = Number(startM) + Number(timeM);
  let minute = Math.floor(meetM / 60);
  if (minute > 0) {
    meetH = meetH + minute;
    meetM %= 60;
  }
  if (meetM == 0) {
    meetM = "00";
  }
  $("#meetTime").val(meetTime + "~" + meetH + ":" + meetM);
}

$("#meetContent").val(
  " ■ 아래와 같이 회의실 사용할 예정입니다. 일정 참고 부탁드립니다. \n - 일시 : \n - 장소 : \n - 참석자 : \n - 내용 : "
);
function meetComplete() {
  const content =
    " ■ 아래와 같이 회의실 사용할 예정입니다. 일정 참고 부탁드립니다.";
  const date = " - 일시 : " + $("#meetDate").val() + ",";
  const time = $("#meetTime").val();
  const place = " - 장소 : " + $("#place").val();
  const users = " - 참석자 : " + $("#users").val();
  const title = " - 내용 : " + $("#title").val();
  $("#meetContent").val(
    content + "\n" + date + time + "\n" + place + "\n" + users + "\n" + title
  );
}

function textCopy() {
  window.navigator.clipboard.writeText($("#meetContent").val()).then(() => {
    // 복사가 완료되면 호출된다.
    alert("복사완료");
  });
}

<template>
  <div class="stuCard">
    <div>
      <img class="profilePhoto" src="@/assets/student/profile.png" alt="프로필">
    </div>
    <h1>김원정</h1>
    <h2>학생</h2>
    <hr>
    <p>IT학부 AI컴퓨터정보과</p>
    <a><img class="stuImg" src="@/assets/student/stuIcon.png" alt="학생증 아이콘"></a>
    <h3>학생카드</h3>
    <div>
      <img class="barcode" src="@/assets/student/barcode.png" alt="바코드">
      <h3>2018141009</h3>
    </div>
    <div>
      <img class="jeiuLogo" src="@/assets/student/logoWhite.png" alt="학교 로고">
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentInformation"
}
</script>

<style scoped>

.stuCard {
  margin: 10% auto;
  border-radius: 10px;
  width: 80.56%;
  padding: 10px 0 20px 0;
  background-color: var(--blue-card);
  color: var(--blue-card-text);
}

.stuCard > hr {
  margin: 0 0 0 25px;
  width: 50%;
  border: var(--blue-card-hr) solid 0.5px;
}

.stuCard > h1 {
  float: left;
  margin: 20px 0 0 0;
  padding: 0 5px 0 25px;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.stuCard > h2 {
  margin: 20px 0 5px 0;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.stuCard > div > h3 {
  margin: 0 0 5px 0;
  font-size: 15pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.stuCard > p {
  margin: 7px 0 20px 0;
  padding: 0 0 0 25px;
  font-size: 9pt;
  color: var(--blue-card-text);
}

.stuCard > a > .stuImg {
  float: right;
  margin: -66px 25px 0 0;
  padding: 0;
  width: 12%;
}

.stuCard > h3 {
  float: right;
  margin: -30px 28px 0 0;
  font-size: 8pt;
  font-weight: bold;
  color: var(--blue-card-text);
}

.stuCard > div {
  text-align: center;
  margin: 20px 0 0 0;
}

.stuCard > div > .profilePhoto {
  width: 132px;
  height: 170px;
  background-color: var(--text-color);
  border-radius: 10px;
}

.stuCard > div > .jeiuLogo {
  width: 17%;
}

.stuCard > div > .barcode {
  width: 70%;
  margin: 10px;
  border-radius: 5px;
}

</style>
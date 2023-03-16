<template>
	<div>
		<a id="custom-login-btn" @click="$event => kakaoLogin()">
			<img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
				width="222"/>
		</a>
		<br>
		<button type="button" @click="kakaoLogout">카카오 로그아웃</button>
	</div>
</template>

<script>
export default{
	data() {
		return{
			code: ''
		};
	},
	mounted() {
		// Kakao.init(process.env.KAKAO_KEY);
		// Kakao.isInitialized();
		// this.kakaoLogout();
	},
	methods: {
		kakaoLogin() {
			window.Kakao.Auth.login({
			scope: "profile_nickname, profile_image, account_email",
			success: this.getKakaoAccount,
			});
		},
		getKakaoAccount() {
			window.Kakao.API.request({
				url: "/v2/user/me",
				success: (res) => {
				const kakao_account = res.kakao_account;
				const nickname = kakao_account.profile.nickname; //카카오 닉네임
				const profile_image_url = kakao_account.profile.profile_image_url; //카카오 이미지
				const email = kakao_account.email; //카카오 이메일
				console.log("nickname", nickname);
				console.log("profile_image_url", profile_image_url);
				console.log("email", email);
				//로그인 처리 구현
				console.log(kakao_account);
				this.$store.commit("user", kakao_account);
				alert("로그인 성공!");
				},
				fail: (error) => {
				// this.$router.push("/errorPage");
				console.log(error);
				},
			});
		},
		kakaoLogout() {
			if (!window.Kakao.Auth.getAccessToken()) {
				console.log("Not logged in.");
				return;
			}
			window.Kakao.Auth.logout((response) => {
				//로그아웃
				console.log("access token:", window.Kakao.Auth.getAccessToken());
				console.log("log out:", response);
			});
		},
	}
}
</script>
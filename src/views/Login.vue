<template>
    <div class="member_wrap_login">
        <div class="loginPage">
            <form name="login">
                <p class="login-icon"></p>                 
                <label>전화번호 입력</label>
                <select class="form-control">
                    <option>대한민국</option>
                </select>
                <input type="text" placeholder="전화번호를 입력해 주세요"  maxlength="30" class="form-control"> 

                <label>비밀번호 입력</label> 
                <input type="password" name="pw" placeholder="비밀번호를 입력해 주세요" maxlength="30" class="form-control">

                <label>
                    <input type="checkbox"> 전화번호 저장
                </label>
               
                <div class= "text-center">
                    <button type="button" class="btn btn-lg btn-success btn-block">로그인</button> 
                    <a href="join_step01.html" class="btn btn-lg btn-secondary btn-block" role="button">회원가입</a> 
                    <small class="text-danger">전화번호, 비밀번호 분실시 고객센터<strong>(031-696-0499)</strong>로 문의 주세요</small>
                </div>
            </form>
        </div>
    </div>
   
</template>

<script>
export default {
    name:'login'
}
</script>


<template>
 <div id="ig-footer">
   <div class="footer-inner">     
     <div class="homepage-links">
        <div  class="responsive-group">
            <router-link 
                :to="{name: 'company'}"
                >회사소개
            </router-link>
            <i class="con" role="none presentation"></i>
            <router-link 
                :to="{name: 'terms_agreement'}"
                >이용약관
            </router-link>
            <i class="con" role="none presentation"></i> 
            <router-link 
                :to="{name: 'terms_privacy'}"
                >개인정보처리방침
            </router-link>
            <i class="con" role="none presentation"></i> 
            <router-link 
                :to="{name: 'terms_location'}"
                >위치정보수집및이용동의
            </router-link>  
            <i class="con" role="none presentation"></i>        
            <router-link 
                :to="{name: 'terms_financial'}"
                >전자금융거래이용약관
            </router-link>          
        </div>
      </div> 
     <div class="logo-image"><img src="/assets/img/logo_oval.png"></div>
     <div class="company-info">
         <div class="responsive-group">
           <span>오발<i class="con"  role="none presentation"></i>대표이사 신창훈</span> 
           <i class="con"  role="none presentation"></i>
           <span>경기도 성남시 분당구 판교로 256번길 25 B동 4층</span> 
           <i class="con" role="none presentation"></i>
           <span>T. 031-696-0499<i class="con" role="none presentation"></i>F. 031-696-0430</span>            
          </div> 
          <div class="responsive-group">
            <span>사업자등록번호 : 773-87-00356</span> 
            <i class="con" role="none presentation"></i>
            <span>통신판매업신고번호 : 제 2016-서울강남-01517호</span>
          </div> 
     </div> 
     <div class="copyright">Copyright © 2018 ImGATE All Rights Reserved.</div>  
     <div class="social-links">
         <a href="#" target="_blank">
           <div class="social-link-icon icon-kakao_plus_friend"></div>
         </a>
         <a href="#" target="_blank">
           <div class="social-link-icon icon-instagram"></div>
         </a>
         <a href="#" target="_blank">
           <div class="social-link-icon icon-naver_blog"></div>
         </a>
     </div>      
    </div>
 </div> <!-- footer-->
</template>

<script>
export default {
    name:'igFooter'
};
</script>
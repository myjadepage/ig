<template>
    <div id="ig-contents">   
      <div class="mainPage">

        <!-- 메인비주얼 -->
        <div id="section1" class="section visual">        
            <div class="inner">
              <div class="text">
                <h1>블루투스 도어락<br><strong><span class="main_color">OVAL MMS</span>로 편리하게</strong></h1> 
                <p>전문 글로벌 기업 OVAL</p> 
                <router-link 
                    :to="{name: 'compnay'}"
                    class="about"
                  >
                  <span>COMPANY</span>
                  <img src="/assets/img/arr.png">
                </router-link>                
              </div>
            </div>           
            <div class="image">
              <div class="pc">
                <span class="img"></span>   
              </div>   
            </div>        
        </div> 

        <!-- 서비스 -->
        <div id="section2" class="service">
          <div class="content">
            <div class="inner">
              <div class="text">
                <p class="w-block main_color"><strong>더욱 스마트해진</strong> MultiFamily 솔루션</p>              
              </div> 
              <ul>
                <li>
                  <router-link 
                      :to="{name:'ovalhome'}"
                      class="block"
                    >
                    <p class="text-block">
                    <img src="/assets/img/ic_ovalhome.png"> 
                    <span class="tit">OVAL HOME</span> 
                    <span class="txt">통합형 모바일 도어락은<br>스마트하고 안전한 삶을 누리세요</span>
                    </p> 
                    <span class="img"><img src="/assets/img/service1.png"></span> 
                    <div class="overlay"></div>
                  </router-link>
                </li> 
                <li>
                  <router-link 
                      :to="{name:'ovalhost'}"
                      class="block"
                    >  
                    <p class="text-block">
                      <img src="/assets/img/ic_ovalhospital.png"> 
                      <span class="tit">OVAL HOSPITAL</span>
                      <span class="txt">통합형 모바일 도어락은<br>스마트하고 안전한 삶을 누리세요</span>
                    </p> 
                    <span class="img"><img src="/assets/img/service3.png"></span> 
                    <div class="overlay"></div>
                  </router-link>
                </li> 
                <li>
                  <router-link 
                      :to="{name:'ovalhost'}"
                      class="block"
                    >  
                    <p class="text-block">
                      <img src="/assets/img/ic_ovalmms.png"> 
                      <span class="tit">OVAL MMS</span> 
                      <span class="txt">통합형 모바일 도어락은<br>스마트하고 안전한 삶을 누리세요</span>
                    </p> 
                    <span class="img"><img src="/assets/img/service5.png"></span> 
                    <div class="overlay"></div>
                  </router-link>
                </li>            
                <li>
                  <router-link 
                      :to="{name:'help'}"
                      class="block"
                    >    
                    <p class="text-block">
                      <img src="/assets/img/ic_helpdesk.png"> 
                      <span class="tit">HELP DESK</span> 
                      <span class="txt">통합형 모바일 도어락은<br>스마트하고 안전한 삶을 누리세요</span>
                    </p> 
                    <span class="img"><img src="/assets/img/service2.png"></span> 
                    <div class="overlay"></div>
                  </router-link>
                </li> 
                <li>
                  <router-link 
                      :to="{name:'download'}"
                      class="block"
                    >   
                    <p class="text-block">
                      <img src="/assets/img/ic_download.png"> 
                      <span class="tit">DOWNLOAD</span> 
                      <span class="txt">통합형 모바일 도어락은<br>스마트하고 안전한 삶을 누리세요</span>
                    </p> 
                    <span class="img"><img src="/assets/img/service4.png"></span> 
                    <div class="overlay"></div>
                  </router-link>
                </li>                   
                <li>
                  <router-link 
                      :to="{name:'pricing'}"
                      class="block"
                    >    
                    <p class="text-block">
                      <img src="/assets/img/ic_price.png"> 
                      <span class="tit">PRICING</span> 
                      <span class="txt">통합형 모바일 도어락은<br>스마트하고 안전한 삶을 누리세요</span>
                    </p> 
                    <span class="img"><img src="/assets/img/service6.png"></span> 
                    <div class="overlay"></div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 가격 -->
        <div id="section3" class="price">
          <div class="content">
            <div class="inner">
                <div class="text">
                    <p class="w-block main_color"><strong>PRICING</strong></p>              
                    <small>OVAL MMS를 업그레이드 해보세요</small>
                </div>
                <ul class="price_table">
                  <li class="shadow_hover">
                      <dl>
                          <dt class="top_header">
                            <small>BASIC</small>
                            <h4>베이직</h4>
                          </dt>
                          <dd class="price_plan">
                            $20<small>(month)</small>
                          </dd>
                          <dd class="price_detail">
                            <ul>
                              <li>10객실 이하 사업자</li>
                              <li>SMS 기본 5건</li>
                              <li>600 Pincode/month</li>
                              <li>객실 10개 등록</li>
                              <li>공동도어 2개</li>
                              <li>단지 1개</li>
                              <li>빌딩 1개</li>
                              <li>LOG DB Cloud Backup /1month</li>
                            </ul>
                          </dd>
                          <dd>
                            <router-link 
                                :to="{name:'pricing'}"
                                class="btn btn-success"
                                >자세히 보기
                            </router-link>
                          </dd>
                      </dl>                                        
                  </li>                
                  <li class="shadow_hover">
                      <dl>
                          <dt class="top_header">
                            <small>MEDIUM</small>
                            <h4>미디어</h4>
                          </dt>
                          <dd class="price_plan">
                            $40<small>(month)</small>
                          </dd>
                          <dd class="price_detail">
                            <ul>
                              <li>20객실 이하 사업자</li>
                              <li>SMS 기본 10건</li>
                              <li>1,200 Pincode/month</li>
                              <li>객실 20개 등록</li>
                              <li>공동도어 4개</li>
                              <li>단지 1개</li>
                              <li>빌딩 1개</li>
                              <li>LOG DB Cloud Backup /2month</li>
                            </ul>
                          </dd>
                          <dd>
                            <router-link 
                                :to="{name:'pricing'}"
                                class="btn btn-success"
                                >자세히 보기
                            </router-link>
                          </dd>
                        </dl>                  
                  </li>
                  <li class="shadow_hover">
                      <dl>
                          <dt class="top_header">
                            <small>LARGE</small>
                            <h4>라지</h4>
                          </dt>
                          <dd class="price_plan">
                            $100<small>(month)</small>
                          </dd>
                          <dd class="price_detail">
                            <ul>
                              <li>50객실 이하 사업자</li>
                              <li>SMS 기본 20건</li>
                              <li>3,000 Pincode/month</li>
                              <li>객실 50개 등록</li>
                              <li>공동도어 10개</li>
                              <li>단지 1개</li>
                              <li>빌딩 2개</li>
                              <li>LOG DB Cloud Backup /5month</li>
                            </ul>
                          </dd>
                          <dd>
                            <router-link 
                                :to="{name:'pricing'}"
                                class="btn btn-success"
                                >자세히 보기
                            </router-link>                            
                          </dd>
                        </dl>                  
                  </li>
                  <li class="shadow_hover">
                      <dl>
                          <dt class="top_header">
                            <small>SUPER</small>
                            <h4>슈퍼</h4>
                          </dt>
                          <dd class="price_plan">
                            $200<small>(month)</small>
                          </dd>
                          <dd class="price_detail">
                            <ul>
                              <li>100객실 이하 사업자</li>
                              <li>SMS 기본 4건</li>
                              <li>3,000 Pincode/month</li>
                              <li>객실 50개 등록</li>
                              <li>공동도어 10개</li>
                              <li>단지 1개</li>
                              <li>빌딩 2개</li>
                              <li>LOG DB Cloud Backup /1year</li>
                            </ul>
                          </dd>
                          <dd>
                            <router-link 
                                :to="{name:'pricing'}"
                                class="btn btn-success"
                                >자세히 보기
                            </router-link>
                          </dd>
                        </dl>                  
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div><!-- content -->
</template>

<script>
export default {
  name: 'home'
}
</script>

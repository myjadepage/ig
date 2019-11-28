
<template>
  <nav>
        <div id="ig-header">
        <!-- pc용네비 -->
        <div class="header-inner  responsive-pc">
            <div class="home-logo">
                <router-link :to="{name:'home'}" >
                    <div class="home-logo-image"></div>
                </router-link>                         
            </div>        
            <div class="sitemap">
                <ul class="main-list">
                    <li class="">
                        <span class="main-title">COMPANY</span> 
                        <div class="list-box">
                            <ul class="sub-list-oneline">
                                <li>
                                    <router-link 
                                        v-bind="classitem"
                                        exact :to="{ name:'company' }"                                        
                                        >{{ menuA1 }}
                                        </router-link>
                                </li>        
                                <li>
                                    <router-link 
                                        v-bind="classitem"
                                        exact :to="{ name:'partner' }"
                                        >{{ menuA2 }}
                                        </router-link>  
                                </li>                                 
                                <li>
                                    <router-link 
                                        v-bind="classitem"
                                        exact :to="{ name:'recruit' }"
                                        >{{ menuA3 }}
                                        </router-link>
                                </li>        
                            </ul>
                        </div>
                    </li>
                    <li class="">
                        <span class="main-title">PRODUCT</span> 
                        <div class="list-box">
                            <ul class="sub-list-oneline">      
                                <li>
                                    <router-link 
                                    v-bind="classitem"
                                    exact
                                    :to="{ name:'ovalhome' }"
                                    >{{menuB1}}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link 
                                    v-bind="classitem"
                                    exact
                                    :to="{ name:'ovalhost' }"
                                    >{{menuB2}}
                                    </router-link>
                                </li>          
                            </ul>
                        </div>
                    </li>
                    <li class="">
                        <span class="main-title">SERVICE</span> 
                        <div class="list-box">
                            <ul class="sub-list-oneline">      
                                <li>
                                    <router-link 
                                        v-bind="classitem"
                                        exact
                                        :to="{ name:'pricing' }"
                                        >{{menuC1}}<span class="mark"></span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link 
                                        v-bind="classitem"
                                        exact
                                        :to="{ name:'download' }"
                                        >{{menuC2}}
                                    </router-link> 
                                </li>    
                            </ul>
                        </div>
                    </li>
                    <li class="">
                        <span class="main-title">CUSTOMER</span> 
                        <div class="list-box">
                            <ul class="sub-list-oneline">
                                <li>
                                    <router-link 
                                        v-bind="classitem" 
                                        exact
                                        :to="{ name:'notice' }"
                                        >{{menuD1}}
                                    </router-link> 
                                </li> 
                                <li>
                                    <router-link 
                                        v-bind="classitem" 
                                        exact
                                        :to="{ name:'qna' }"
                                        >{{menuD2}}
                                    </router-link> 
                                </li> 
                            </ul>
                        </div>                
                    </li>
                </ul>
            </div>               
            <div class="etc-menu">
                <div class="action-button">
                    <div class="igplus-center aa">
                    <span class="igplus-center-title">아임게이트 관리자</span>
                    <span class="arrow-right"></span>
                    </div>
                </div>              
                <ul class="login-form">
                    <li>
                        <router-link 
                            active-class='active' 
                            exact
                            :to="{ name:'login' }"
                            >
                            로그인
                        </router-link> 
                        <span class="divide" role="presentation" ></span> 
                        <router-link 
                            active-class='active' 
                            exact
                            :to="{ name:'join' }"
                            >
                            회원가입
                        </router-link>                       
                    </li>
                </ul>
            </div> 
        </div>

        <!-- 모바일용네비 -->
        <div class="header-inner responsive-mobile">
            <div class="home-logo">
                <a href=""><div class="home-logo-image"></div></a>
            </div> 
            <div class="etc-menu">
                <a class="btn-all-menu" data-toggle="collapse" data-target="#menu" aria-expanded="false"><i class="icon-all-menu"></i></a>
            </div> 
            <div class="all-menu" id="menu">
                <div class="login-form">
                <div class="user-info"><span>로그인을 해주세요.</span></div> 
                <div class="login-status gray-color">
                    <a href="login.html">로그인</a> <span class="divide"></span> 
                    <a href="join_step01.html">회원가입</a></div>
                </div> 
                <div class="sitemap">
                <ul class="main-list">
                    <li class="">
                    <div class="main-title" data-toggle="collapse" data-target="#menu1" aria-expanded="false">COMPANY
                        <div class="title-icon"><span class="btn-arrow__collapse"></span></div>
                    </div> 
                    <div class="list-box" id="menu1">
                        <div class="sub-list-oneline">
                        <a href="company.html" class="sub-list-link">{{ menuA1 }}</a> 
                        <a href="partner.html" class="sub-list-link">{{ menuA2 }}</a> 
                        <a href="recruit.html" class="sub-list-link">{{ menuA3 }}</a>
                        </div>
                    </div>
                    </li> 
                    <li class="">
                    <div class="main-title"  data-toggle="collapse" data-target="#menu2" aria-expanded="false">PRODUCT
                        <div class="title-icon"><span class="btn-arrow__collapse"></span></div>
                    </div> 
                    <div class="list-box" id="menu2">
                        <div class="sub-list-oneline">      
                            <a href="ovalhome.html" class="sub-list-link">{{menuB1}}</a>           
                            <a href="ovalhost.html" class="sub-list-link">{{menuB2}}</a>
                            <!-- <a href="ovalfamily.html" class="sub-list-link">{{menuB3}}</a>                     -->
                        </div>
                    </div>
                    </li>                
                    <li class="">
                    <div class="main-title"  data-toggle="collapse" data-target="#menu3" aria-expanded="false">SERVICE
                        <div class="title-icon"><span class="btn-arrow__collapse"></span></div></div> 
                        <div class="list-box" id="menu3">
                        <div class="sub-list-oneline">      
                            <a href="pricing.html" class="sub-list-link">{{menuC1}}<span class="mark"></span></a>           
                            <!-- <a href="helpdesk.html" class="sub-list-link">{{menuC3}}</a> -->
                            <a href="download.html" class="sub-list-link">{{menuC2}}</a>                          
                        </div>
                    </div>
                </li>
                <li class="">
                    <div class="main-title"  data-toggle="collapse" data-target="#menu4" aria-expanded="false">CUSTOMER
                        <div class="title-icon"><span class="btn-arrow__collapse"></span></div></div> 
                        <div class="list-box" id="menu4">
                        <div class="sub-list-oneline">      
                            <a href="notice.html" class="sub-list-link">{{menuD1}}<span class="mark"></span></a>           
                            <a href="faq.html" class="sub-list-link">{{menuD2}}</a>
                            <!-- <a href="contact.html" class="sub-list-link">{{menuD3}}</a> -->
                        </div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>

  </nav><!--헤더네비 -->
</template>



<script>
export default {
    name:"igHeader",
    data:function(){
        return{
            classitem:{
                class:'sub-list-link',
                'active-class':'active'
            },
            menuA1:'회사소개',           
            menuA2:'파트너사',
            menuA3:'인재채용',
            menuB1:'OVAL HOME',             
            menuB2:'OVAL HOSPITALITY',
            menuB3:'OVAL 멀티패밀리',
            menuC1:'PRICING',
            menuC2:'DOWNLOAD',
            menuC3:'HELP DESK',
            menuD1:'공지사항',
            menuD2:'QNA',
            menuD3:'CONTACT US'
        }
    }
};
</script>
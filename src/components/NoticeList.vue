<template>
<div id="section" class="section notice">
                <div class="content">
                    <div class="inner">
                        <div class="text">
                            <p class="w-block main_color"><strong>공지사항</strong></p>              
                            <small>새로운 소식을 알려드립니다.</small>
                        </div>

                        <div class="board_box" id="app">
                                <table class="table table-responsive-md">
                                    <colgroup>
                                        <col width="15%">
                                        <col width="*">
                                        <col width="15%">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col">순번</th>
                                            <th scope="col">제목</th>
                                            <th scope="col">등록일</th>
                                        </tr>
                                    </thead>
                                    <tbody> 
                                        <template>
                                            <tr v-for="(item, index) in itemList" :key="index">	
                                                <td class="seq">{{item.seq}}</td>	
                                                <td class="title"><a href="notice_detail.html">{{item.title}}</a></td>	
                                                <td class="indDate">{{item.indate}}</td>
                                            </tr> 
                                        </template>                                            
                                    </tbody>
                                </table>
                                <!-- 페이징 -->
                                <ul class="pagination justify-content-center mt-5">                                    
                                    <li class="page-item previous" >
                                    <a role="button" class="page-link">&lt;</a>
                                    </li>                                
                                    <li>
                                    <a role="button"  class="page-link" >1</a>
                                    </li>                              
                                    <li class="page-item next">
                                        <a role="button"  class="page-link">&gt;</a>
                                    </li>                              
                                </ul>                    
                            </div>

                            <!-- 관리자글쓰기 -->
                            <p class="text-right mt-3 mr-2" v-if="userId==='admin'">                                
                                <a href="notice_write.html" class="btn btn-secondary" role="button">글쓰기</a>
                            </p>
                    </div>
                </div>
            </div>    
</template>

<script>
export default {
    name:'noticeList',
    data:function(){
        return{
            itemList:[
                {seq:1,title:'[공지]MMS Staff 업데이트 알림',indate: new Date},
                {seq:2,title:'[공지]MMS Staff 업데이트 알림',indate: new Date},
                {seq:3,title:'[공지]MMS Staff 업데이트 알림',indate: new Date}
            ],
            userId:'guest'
        }
    },   
}
</script>
<template>
    <div id="section" class="section notice">
            <div class="content">
                <div class="inner">
                     
                    <div class="board_box">
                            <div class="viewTitle">
                              <span>제목</span>
                              <span>
                                  <input type="text" value="" aria-required="true" aria-invalid="false" placeholder="제목을 입력해 주세요"
                                  v-model="title">
                              </span>
                            </div>                            
                            
                            <div class="viewContents"> 
                              <span>내용</span>
                              <span class="notice_message">
                                <textarea rows="6" aria-invalid="false" placeholder="내용을 입력해 주세요"
                                  v-model="content"></textarea>
                              </span>   
                            </div>   
                            
                            <div class="file_upload">                              
                              <span><input type="file"><small class="text-danger">※ 파일첨부시 100MB 이하</small></span>
                            </div>
                    </div>
                    <!-- 관리자글수정, 삭제 -->
                    <p class="text-right mt-3 mr-2">                     
                      <button  class="btn btn-success mr-2" @click="cancle">목록</button>
                      <button  class="btn btn-secondary" @click="noticeAdd">글쓰기</button>
                    </p>                
                </div>
            </div>
        </div>
    
</template>

<script>
import { eventBus } from '../main'

export default {
    name:'noticeWriteAdmin',
    data:function(){
      return{
        title:null,
        content:null
      }
    },
    methods: {
        noticeAdd(){         
          if(this.title === null){
            alert("제목을 입력해 주세요")
          }else if(this.content === null ){
             alert("내용을 입력해 주세요")
          } 
          console.log(this.title +"/"+this.content) 
          eventBus.$emit('noticeAdd', this.title);
          // this.$router.push({name:'notice'})
        },      
        cancle(){
          this.$router.push({name:'notice'});
        }
    },
}
</script>


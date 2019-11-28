<template>
<div id="section" class="section notice">
            <div class="content">
                <div class="inner">
                    <div class="board_box">
                            <div class="viewTitle">
                              <span>제목</span>
                              <span>
                                  <input type="text" value="" aria-required="true" aria-invalid="false">
                              </span>
                            </div>                            
                            
                            <div class="viewContents"> 
                              <span>내용</span>
                              <span class="notice_message">
                                <textarea name="contact_message"  rows="6" aria-invalid="false" ></textarea>
                              </span>   
                            </div>   
                            
                            <div class="file_upload">
                              
                              <span><input type="file"><small class="text-danger">※ 파일첨부시 100MB 이하</small></span>
                            </div>
                    </div>

                    <!-- 관리자글수정, 삭제 -->
                    <p class="text-right mt-3 mr-2">
                        <a href="notice.html" class="btn btn-success" role="button">목록</a>                       
                        <a href="notice_write.html" class="btn btn-secondary" role="button">글쓰기</a>
                    </p>

                </div>
            </div>
        </div>
    
</template>

<script>
export default {
    name:'noticeWrite'
}
</script>
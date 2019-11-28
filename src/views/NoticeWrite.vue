<template>
    <div id="ig-contents">
        <div class="cusPage noticePage"> 
            <noticeTop/>

            <noticeWriteAdmin/>

        </div>
    </div> 
</template>

<script>
import noticeTop from "@/components/NoticeTop";
import noticeWriteAdmin from "@/components/NoticeWriteAdmin";

export default {
    name:'noticeWrite',
    components:{
            noticeTop,
            noticeWriteAdmin
    }
}
</script>
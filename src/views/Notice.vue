<template>
    <div id="ig-contents">
        <div class="cusPage noticePage"> 
            <noticeTop/>

            <noticeList/>
        </div>
    </div> 
</template>

<script>
    import noticeTop from "@/components/NoticeTop";
    import noticeList from "@/components/NoticeList";

    export default {
        name:'notice',
        components:{
            noticeTop,
            noticeList
        }
    };
</script>
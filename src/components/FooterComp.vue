<template lang="">
    <div class="fixed-bottom" id="footerC">
        <footer >
            <p id="footer"></p>
        </footer>
    </div>
</template>
<script>
export default {
    mounted(){
        let dateEle = document.getElementById('footer');
        let currentYear = new Date().getFullYear();
        dateEle.innerHTML = `© ${currentYear} Nazneen Abrahams `;
    }
}
</script>
<style scoped>
    #footerC{
        color: #e4d6a7;
        background-color:#1C110A ;
        height: 22px;
    }
</style>
<script>
    export default {

    }
</script>
<template>
    <footer class="footer">
        <ul>
            <li>
                <div class="footer_logo"></div>
            </li>
            <li>
                <div class="footer_list-title">Navigation</div>
                <ul class="footer_list">
                    <li><a href="">About</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Advertising</a></li>
                    <li><a href="">Small business</a></li>
                </ul>
            </li>
            <li>
                <ul class="footer_list">
                    <li><a href="">Talent Solutions</a></li>
                    <li><a href="">Marketing Solutions</a></li>
                    <li><a href="">Sales Solutions</a></li>
                    <li><a href="">Safery Center</a></li>
                </ul>
            </li>
            <li>
                <ul class="footer_list">
                    <li><a href="">Community Guidelines</a></li>
                    <li><a href="">Privacy & Terms</a></li>
                    <li><a href="">Mobile App</a></li>
                </ul>
            </li>
            <li>
                <div class="footer_list-title">Fast access</div>
                <div class="footer_list">
                    <a href="" class="footer_btn">Questions?</a>
                <a href="" class="footer_btn">Settings</a>
                </div>
                
            </li>
            <li>
                <div class="footer_list-title">Language</div>
                <div class="footer_list">
                    <select name="" id=""></select>

                </div>
            </li>
        </ul>
    </footer>
</template>
<style lang="scss" scope>
    .footer {
        padding: 30px 130px 0px 130px;
        background: white;
        
        height: 215px;
        width: 100%;
        &_logo{
            width: 61px;
            height: 91px;
            background-size: 100%;
            background-position: center;
            background-image: url('~@/assets/img/footer/footer_logo.png') ;
            background-repeat: no-repeat;
        }
        &_list{
            padding-top: 50px;
        }
        &_list-title{
            position: absolute;
            top: 0;
        }
        >ul{
            display: flex;
            >li{
                margin-left: 69px;
                position: relative;
                
            }
            a{
                text-decoration: none;
            }
        }
        >ul>li{
            margin-left: 69px;
        }
    }
</style>
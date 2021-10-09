<script>
    export default {

    }
</script>
<template>
    <footer class="footer">
        <ul class="footer_left">
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
                <div class="footer_list footer_btn-area">
                    <a href="" class="footer_btn Questions">
                        <span>Questions?</span>
                        <span  class="footer-icon-q"></span> 
                    </a>
                    <a href="" class="footer_btn settings">
                        <span>Settings</span>
                        <span class="footer-icon-set"></span> 
                    </a>
                </div>
                
            </li>
        </ul>
        <ul class="footer_right">
            <li>
                <div class="footer_list-title">Language</div>
                <div class="footer_list">
                    <select name="" id="">
                        <option value="en">English</option>
                    </select>
                </div>
            </li>
        </ul>
    </footer>
</template>
<style lang="scss" scope>
    $footer_url:"~@/assets/img/footer/";

    @mixin footer_bg($img) {
        background-image: url("#{$footer_url}#{$img}");
        width: 13px;
        height: 13px;
        background-size: cover;
        display: block;

    }
    .footer {
        background: white;
        margin-top: 20px;
        
        width: 100%;
        border-top:#E7E7E7 1px solid;
        display: flex;
        justify-content: center;
        padding-top: 30px;
        >ul{
            display: flex;

            >li{
                position: relative;
            }
        }
        &_left{
            width: 50%;
            margin-right: 40px;
            display: flex;
            justify-content: space-between;
            >li:nth-child(1){
                margin-right: 69px;
            }
            >li:not(:first-child){
                margin-right:5px;
                flex:1 1 130px;
            }
        }
        &_right{
            width: 30%;
            >li{
                width: 100%;
                display: flex;
                justify-content: center;
            }
            .footer_list-title{
                width: 100%;
            }
            .footer_list{
                width: 100%;
                select{
                    width: 100%;
                    background: #FFFFFF;
                    border: 1px solid #F0F0F0;
                    border-radius: 4px;
                    padding: 5px;
                }
            }
        }
        &_logo{
            width: 46px;
            height: 78px;
            background-size: 100%;
            background-position: center;
            background-image: url('~@/assets/img/footer/footer_logo.png') ;
            background-repeat: no-repeat;
        }
        &_list{
            padding-top: 50px;
            font-size: 12px;
            >li{
                margin-bottom: 15px;
            }
        }
        &_list-title{
            position: absolute;
            top: 0;
            font-weight: bolder;
            font-size: 12px;

        }
        &_btn-area{
            display: flex;
            flex-direction: column;
            .footer_btn{
                background: #0275B1;
                border: 1px solid #0275B1;
                border-radius: 4px;
                width: 170px;
                height: 32px;
                margin-bottom: 10px;
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 15px;
                &.settings{
                    background:transparent;
                    color: #0275B1;
                }
                
            }
        }
        .footer-icon-q{
            @include footer_bg('footer-q.png');
        }
        .footer-icon-set{
            @include footer_bg('footer-set.png');
        }
        
        a{
                text-decoration: none;
                color: #181818;
                font-family: Gotham Pro;
        }
    }
</style>